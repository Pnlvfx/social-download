import { getUserAgent } from '@goatjs/node/user-agent';
import * as cheerio from 'cheerio';
import querystring from 'node:querystring';

const CLIENT_URL = 'https://savevid.net/en';
const SERVER_URL = 'https://v3.savevid.net/api/ajaxSearch';

const headers = {
  accept: '*/*',
  'accept-language': 'en',
  'cache-control': 'no-cache',
  'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'accept-encoding': 'gzip, deflate, br',
  origin: CLIENT_URL,
  'referrer-policy': 'strict-origin-when-cross-origin',
  'user-agent': getUserAgent(),
};

interface InstagramInfos {
  url: string;
  type: 'image' | 'video';
}

interface InstagramData {
  status: 'ok';
  data: string;
}

export const insta = {
  getInfo: async (url: string): Promise<InstagramInfos> => {
    const query = querystring.stringify({ q: url, t: 'media', lang: 'en', v: 'v2' });
    const res = await fetch(SERVER_URL, { method: 'POST', headers, referrer: CLIENT_URL, body: query });
    if (!res.ok) throw new Error(`${res.status.toString()}: ${res.statusText}`);
    const json = (await res.json()) as InstagramData;
    const $ = cheerio.load(json.data);
    const container = $('div.download-items');
    const btn = container.find('.download-items__btn');
    const mediaurl = btn.find('a').attr('href');
    if (!mediaurl) throw new Error('Instagram download fail!');
    const type = /.jpg/.test(mediaurl) ? 'image' : 'video';
    return { url: mediaurl, type };
  },
};
