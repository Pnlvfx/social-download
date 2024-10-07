// https://github.com/TobyG74/tiktok-api-dl/tree/master/src
import Tiktok from '@tobyg74/tiktok-api-dl';

export const tiktok = {
  download: Tiktok.Downloader,
  search: Tiktok.Search,
  stalkUser: Tiktok.StalkUser,
};

export { default as insta } from './insta.js';
