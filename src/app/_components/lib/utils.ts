export const query = `
{
    user(login: "aminoxix") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            url
            homepageUrl
            description
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;
