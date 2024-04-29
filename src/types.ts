export interface IMovie {
  id: number;
  name: string;
  rating?: {
    kp: number;
  };
  backdrop?: {
    previewUrl: string;
    url: string;
  };
  poster?: {
    previewUrl: string;
    url: string;
  };
  year?: number;
}

interface IGener {
  name: string;
}

export interface IMovieItem {
  name: string;
  description: string;
  poster: {
    previewUrl: string;
    url: string;
  };
  rating: {
    kp: number;
  };
  year: number;
  genres: IGener[];
  movieLength: number;
}

export interface IData {
  docs: IMovie[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}
