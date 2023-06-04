import { request } from 'graphql-request';

export const fetcher = (query) => {
  return request(
    'https://api-ca-central-1.hygraph.com/v2/clic0jmo80os301uk8enhgpgq/master',
    query[0],
  );
};
