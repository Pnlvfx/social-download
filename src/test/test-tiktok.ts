import { TiktokAPI } from '../tiktok/tiktok-api.js';

export const testTiktok = async () => {
  try {
    const info = await TiktokAPI(
      'https://www.tiktok.com/@lo_spettatore/video/7278993561985535264?is_from_webapp=1&sender_device=pc&web_id=7272667267128509984',
    );
    console.log(info);
  } catch (err) {
    console.log({ err });
  }
};
