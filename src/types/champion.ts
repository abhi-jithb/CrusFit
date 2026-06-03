export type ProfileImage = {
  alt: string;
  src: string;
};

export type ChampionProfile = {
  achievements: string[];
  disciplines: string[];
  id: string;
  image: ProfileImage;
  name: string;
};

export type ChampionPerformerGroup = {
  id: string;
  performers: string[];
  summary: string;
  title: string;
};

export type LeadershipProfile = {
  id: string;
  image: ProfileImage;
  name: string;
  roles: string[];
};
