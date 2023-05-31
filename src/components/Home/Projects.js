import styled from 'styled-components/macro';

import ProjectItem from '../ProjectItem';
import { projectsList } from 'assets/data';

const Projects = () => {
  return (
    <ProjectsDiv>
      <h2 className="section-header">My Projects</h2>
      <ProjectContainer>
        {projectsList.slice(0, 3).map((project, key) => (
          <ProjectItem key={key} id={project.id} {...project} />
        ))}
      </ProjectContainer>
      <a className="button other-projects" href="#">
        See other projects
      </a>
    </ProjectsDiv>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 1rem;
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
