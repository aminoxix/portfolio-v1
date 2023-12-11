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
