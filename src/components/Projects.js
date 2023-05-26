import { useRef, useEffect } from "react";
import { ReactComponent as Bg } from "../assets/project-bg.svg";
import { projectsList } from "../assets/data";
import ProjectItem from "./ProjectItem";

let listItems = [];

const Projects = () => {
  const element = useRef({});
  const isElementFocused = (element) => element === document.activeElement;

  useEffect(() => {
    listItems = Array.from(element.current.children);

    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        listItems.forEach((li) => {
          if (isElementFocused(li)) {
            e.preventDefault();
            li.classList.add("project-focus");
          } else {
            li.classList.remove("project-focus");
          }
        });
      }
    });
  }, []);

  function checkHover() {
    listItems.forEach((li) => {
      li.blur();
      li.classList.remove("project-focus");
    });
  }

  function removeLiFocusClass(event) {
    const ancestor = event.nativeEvent.path[4];
    ancestor.classList.remove("project-focus");
  }

  return (
    <div className="Projects">
      <h2>My Projects</h2>
      <Bg />
      <ul className="projects-list" ref={element}>
        {projectsList.map((project, key) => (
          <ProjectItem
            key={key}
            id={key}
            {...project}
            checkHover={checkHover}
            removeLiFocusClass={removeLiFocusClass}
          />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
