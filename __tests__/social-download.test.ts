/* eslint-disable no-console */
import { describe, it } from '@jest/globals';
import { insta, tiktok } from '../src/social-download.js';

const instagram = {
  reel: 'https://www.instagram.com/reel/CvWor-GNv6O/?igshid=NzZhOTFlYzFmZQ==',
  // story: 'https://instagram.com/stories/blurs7/3201906075849327486?utm_source=ig_story_item_share&igshid=NzZhOTFlYzFmZQ==',
};

const tiktokUrl = 'https://vm.tiktok.com/ZGestxDWY/';

describe('social-download', () => {
  it('should get a tiktok info', async () => {
    const info = await tiktok.download(tiktokUrl, { version: 'v2' });
    console.log(info);
  });

  it('should get instagram info', async () => {
    await insta.getInfo(instagram.reel);
  });
});
