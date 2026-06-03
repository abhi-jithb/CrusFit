export type LocalSeoFaq = {
  answer: string;
  question: string;
};

export type LocalSeoHighlight = {
  description: string;
  title: string;
};

export type LocalSeoPage = {
  description: string;
  discipline: string;
  faq: LocalSeoFaq[];
  highlights: LocalSeoHighlight[];
  keyword: string;
  metaDescription: string;
  metaTitle: string;
  path: `/${string}`;
  relatedKeywords: string[];
  slug: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
  title: string;
  trainingFocus: string[];
};
