import styled from 'styled-components/macro';

import ProjectItem from './ProjectItem';
import { useGetProjects } from 'hooks/useGetProjects';

const Projects = () => {
  const { data, error, isLoading } = useGetProjects();

  return (
    <ProjectsDiv>
      <h2 className="section-header">My Projects</h2>
      <ProjectContainer>
        {data?.map((project, key) => (
          <ProjectItem key={key} {...project} id={project.projectDetail?.id} />
        ))}
        {error && !data && <p>An error occured while fetching.</p>}
        {isLoading && <p>Loading...</p>}
      </ProjectContainer>
      {data?.projects?.length > 2 && (
        <a className="button other-projects" href="#">
          See other projects
        </a>
      )}
    </ProjectsDiv>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 1rem;
  text-align: center;
`;

const ProjectsDiv = styled.div`
  text-align: center;

  .other-projects {
    width: 10rem;
    background-color: var(--wtb);
    color: var(--paragraph-txt-color);
    margin-inline: auto;
  }
`;

export default Projects;
