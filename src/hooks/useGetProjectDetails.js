import useSwr from 'swr';
import { gql } from 'graphql-request';

import { fetcher } from 'utils';

export function useGetProjectDetails(id) {
  const { data, error, isLoading } = useSwr(
    [
      gql`
        {
          project_detail(where: {id: "${id}"}) {
            id
            about
            notableFeatures
            techUsed
            project {
              url
              name
              images {
                id
                url(
                  transformation: {
                    image: { resize: { width: 700, height: 700, fit: clip } }
                  }
                )
              }
            }
          }
        }
      `,
    ],
    fetcher,
  );

  return {
    data: data?.project_detail ?? null,
    error,
    isLoading,
  };
}
