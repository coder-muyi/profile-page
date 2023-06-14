import useSwr from 'swr';
import { gql } from 'graphql-request';

import { fetcher } from 'utils';

export function useGetProjects(query) {
  const { data, error, isLoading } = useSwr(
    [
      query ||
        gql`
          {
            projects(orderBy: createdAt_DESC) {
              name
              url
              images {
                id
                url(
                  transformation: {
                    image: { resize: { width: 600, height: 600, fit: clip } }
                  }
                )
              }
              projectDetail {
                id
              }
            }
          }
        `,
    ],
    fetcher,
  );

  return {
    data: data?.projects,
    error,
    isLoading,
  };
}
