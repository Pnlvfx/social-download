import insta from '../../dist/esm/insta.js';

const test = {
  reel: 'https://www.instagram.com/reel/CvWor-GNv6O/?igshid=NzZhOTFlYzFmZQ==',
  story: 'https://instagram.com/stories/blurs7/3201906075849327486?utm_source=ig_story_item_share&igshid=NzZhOTFlYzFmZQ==',
};

export const testInsta = async () => {
  const info = await insta.download(test.reel); // remember that story expire
  console.log('Insta ok', info);
};
