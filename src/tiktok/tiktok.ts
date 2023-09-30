import * as cheerio from 'cheerio';
import { TiktokInfo } from './types/index.js';

const getKey = (page: cheerio.Cheerio<cheerio.AnyNode>) => {
  const regex = /key=([\da-f-]+)/;
  const key = page.text().match(regex);
  // eslint-disable-next-line unicorn/no-null
  return key ? key[1] : null;
};

const tiktok = {
  getInfo: async (link: string): Promise<TiktokInfo> => {
    let host = 'https://ttsave.app';
    const res1 = await fetch(host, {
      method: 'get',
    });
    const html = await res1.text();
    let $ = cheerio.load(html);
    host += `/download?mode=video&key=${getKey($('script[type="text/javascript"]'))}`;
    const body = { id: link };
    const res2 = await fetch(host, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PostmanRuntime/7.31.1',
      },
    });
    const html2 = await res2.text();
    $ = cheerio.load(html2);
    return {
      success: true,
      author: {
        name: $('div div h2').text(),
        profile: $('div a').attr('href'),
        username: $('div a.font-extrabold.text-blue-400.text-xl.mb-2').text(),
      },
      video: {
        thumbnail: $('a[type="cover"]').attr('href'),
        views: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(1) span').text(),
        loves: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(2) span').text(),
        comments: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(3) span').text(),
        shares: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(4) span').text(),
        url: {
          no_wm: $("a:contains('DOWNLOAD (WITHOUT WATERMARK)')").attr('href'),
          wm: $("a:contains('DOWNLOAD (WITH WATERMARK)')").attr('href'),
        },
      },
      backsound: {
        name: $('div.flex.flex-row.items-center.justify-center.gap-1.mt-5 span').text(),
        url: $("a:contains('DOWNLOAD AUDIO (MP3)')").attr('href'),
      },
    };
  },
  getID: (link: string) => {
    const url = new URL(link);
    const id = url.pathname.split('/').at(-1);
    if (!id) throw new Error('Invalid url');
    return id;
  },
};

export default tiktok;
