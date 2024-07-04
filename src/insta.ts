import * as cheerio from 'cheerio';
import coraline from 'coraline';
import querystring from 'node:querystring';

const headers = {
  accept: '*/*',
  'accept-language': 'en',
  'cache-control': 'no-cache',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Accept-Encoding': 'gzip, deflate, br',
  Origin: 'https://saveig.app/en',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'User-Agent': coraline.getUserAgent(),
};

interface InstagramInfos {
  url: string;
  type: 'image' | 'video';
}

const insta = {
  getInfo: async (url: string): Promise<InstagramInfos> => {
    const query = querystring.stringify({ q: url, t: 'media', lang: 'en' });
    const res = await fetch('https://v3.saveig.app/api/ajaxSearch', {
      method: 'POST',
      headers,
      referrer: 'https://saveig.app/en',
      body: query,
    });
    if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
    const json = await res.json();
    const $ = cheerio.load(json.data);
    const container = $('div.download-items');
    const btn = container.find('.download-items__btn');
    const mediaurl = btn.find('a').attr('href');
    if (!mediaurl) throw new Error('Instagram download fail!');
    const type = mediaurl.match('.jpg') ? 'image' : 'video';
    return { url: mediaurl, type };
  },
};

export default insta;
