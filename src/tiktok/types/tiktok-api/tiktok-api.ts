export interface TiktokAPIResponse {
  status: 'success' | 'error';
  message?: string;
  result?: {
    type: 'video' | 'image';
    id: string;
    createTime: number;
    description: string;
    duration?: string;
    author: Author;
    statistics: Statistics;
    hashtag: string[];
    cover?: string[];
    dynamicCover?: string[];
    originCover?: string[];
    video?: string[];
    images?: string[];
    music: Music;
  };
}

export interface Author {
  uid: number;
  username: string;
  nickname: string;
  signature: string;
  region: string;
  avatarThumb: string[];
  avatarMedium: string[];
  url: string;
}

export interface Statistics {
  playCount: number;
  downloadCount: number;
  shareCount: number;
  commentCount: number;
  likeCount: number;
  favoriteCount: number;
  forwardCount: number;
  whatsappShareCount: number;
  loseCount: number;
  loseCommentCount: number;
}

export interface Music {
  id: number;
  title: string;
  author: string;
  album: string;
  playUrl: string[];
  coverLarge: string[];
  coverMedium: string[];
  coverThumb: string[];
  duration: number;
}
