export interface TiktokInfo {
  success: boolean;
  author: {
    name: string;
    profile?: string;
    username: string;
  };
  video: {
    thumbnail?: string;
    views: string;
    loves: string;
    comments: string;
    shares: string;
    url: {
      no_wm?: string;
      wm?: string;
    };
  };
  backsound: {
    name: string;
    url?: string;
  };
}
