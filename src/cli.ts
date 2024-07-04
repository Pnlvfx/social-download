import coraline from 'coraline';
import insta from './insta.js';
import Tiktok from '@tobyg74/tiktok-api-dl';

const instagram = {
  reel: 'https://www.instagram.com/reel/CvWor-GNv6O/?igshid=NzZhOTFlYzFmZQ==',
  story: 'https://instagram.com/stories/blurs7/3201906075849327486?utm_source=ig_story_item_share&igshid=NzZhOTFlYzFmZQ==',
};

const testInsta = async () => {
  const info = await insta.getInfo(instagram.reel);
  console.log('Insta ok', info);
};

const testTiktok = async () => {
  try {
    const info = await Tiktok.Downloader('https://vm.tiktok.com/ZGestxDWY/', { version: 'v2' });
    console.log(info);
  } catch (err) {
    console.log({ err });
  }
};

const run = async () => {
  const input = await coraline.createScriptExec({ title: 'Press 1 to test instagram, 2 to test tiktok.' });
  switch (input) {
    case '1': {
      await testInsta();
      break;
    }
    case '2': {
      await testTiktok();
      break;
    }
    default: {
      console.log('Invalid input provided');
    }
  }
  run();
};

run();
