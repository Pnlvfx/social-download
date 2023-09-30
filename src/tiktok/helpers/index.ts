/* eslint-disable unicorn/no-null */
import * as cheerio from 'cheerio';

export const getKey = (page: cheerio.Cheerio<cheerio.AnyNode>) => {
  const regex = /key=([\da-f-]+)/;
  const key = page.text().match(regex);
  return key ? key[1] : null;
};
