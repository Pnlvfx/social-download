import { tiktok } from '../index.js';

export const testTiktok = async () => {
  try {
    const info = await tiktok.getInfo(
      'https://www.tiktok.com/@lo_spettatore/video/7278993561985535264?is_from_webapp=1&sender_device=pc&web_id=7272667267128509984',
    );
    if (!info.video.url.no_wm) throw new Error('Tiktok video not found!');
    console.log('tiktok ok', info);
  } catch (err) {
    console.log({ err });
  }
};
