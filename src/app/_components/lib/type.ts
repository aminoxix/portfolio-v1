export interface PinnedRepo {
  name: string;
  description: string;
  url: string;
  homepageUrl: string;
  primaryLanguage: {
    name: string;
  };
}

export interface APIResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: PinnedRepo[];
      };
    };
  };
}

export interface WorkExperience {
  track: number;
  icon: string;
  name: string;
  officialName: string;
  description: string;
  tenure: string;
  role: string;
  tech_stack: string[];
  responsibilities: string[];
}
