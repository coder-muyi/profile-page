import styled from 'styled-components/macro';
import { useRef, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import ProjectItem1 from './ProjectItem1';
import ProjectItem2 from './ProjectItem2';
import Grid from './common/Grid';
import { ReactComponent as Bg } from 'assets/project-bg.svg';
import { projectsList } from 'assets/data';
import { useWindowSize } from 'hooks/useWindowSize';
import { devices, sizes } from 'assets/data';

let listItems = [];

const Projects = () => {
  const element = useRef({});
  const [isDarkMode] = useOutletContext();
  const windowSize = useWindowSize();
  const isElementFocused = (element) => element === document.activeElement;

  console.log(windowSize);

  useEffect(() => {
    listItems = Array.from(element.current.children);

    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        listItems?.forEach((li) => {
          if (isElementFocused(li)) {
            e.preventDefault();
            li.classList.add('project-focus');
          } else {
            li.classList.remove('project-focus');
          }
        });
      }
    });
  }, []);

  function checkHover() {
    listItems?.forEach((li) => {
      li.blur();
      li.classList.remove('project-focus');
    });
  }

  function removeLiFocusClass(event) {
    const ancestor = event.nativeEvent.path[4];
    ancestor.classList.remove('project-focus');
  }

  return (
    <ProjectsDiv isDarkMode={isDarkMode}>
      <Grid>
        <h2>My Projects</h2>
        <Bg />
        {windowSize.width > sizes.tablet ? (
          <ProjectContainer>
            {projectsList.map((project, key) => (
              <ProjectItem2
                key={key}
                id={key}
                {...project}
                checkHover={checkHover}
                removeLiFocusClass={removeLiFocusClass}
              />
            ))}
          </ProjectContainer>
        ) : (
          <ul className="projects-list" ref={element}>
            {projectsList.map((project, key) => (
              <ProjectItem1
                key={key}
                id={key}
                {...project}
                checkHover={checkHover}
                removeLiFocusClass={removeLiFocusClass}
              />
            ))}
          </ul>
        )}
      </Grid>
    </ProjectsDiv>
  );
};

const ProjectContainer = styled.div``;

const ProjectsDiv = styled.div`
  text-align: center;
  background: ${(p) => (p.isDarkMode ? 'var(--bg-color)' : 'white')};
  padding-block: 2em;
  background-image: url(./assets/project-bg.png);
  background-size: 600px 500px;
  background-position: 0;

  h2 {
    position: relative;
    max-width: 1200px;
    margin-inline: auto;

    ::before,
    ::after {
      content: '';
      position: absolute;
      padding: 1em;
      background-color: var(--sec-color);
      clip-path: polygon(
        30% 0%,
        70% 0%,
        100% 30%,
        100% 70%,
        70% 100%,
        30% 100%,
        0% 70%,
        0% 30%
      );
    }

    ::before {
      left: 0;
    }

    ::after {
      right: 0;
    }
  }
`;

export default Projects;
