import Tiktok from '@tobyg74/tiktok-api-dl';

type Version = 'v1' | 'v2' | 'v3';

const versions: Version[] = ['v1', 'v2', 'v3'];

const tiktok = {
  getInfo: async (url: string) => {
    for (const version of versions) {
      const data = await Tiktok.Downloader(url, { version });
      if (data.status === 'success') {
        return data;
      }
    }
    return {
      status: 'error',
      message: 'Something went wrong',
    };
  },
};

export default tiktok;
