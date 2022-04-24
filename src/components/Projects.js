import { ReactComponent as Arrow } from "../assets/icons/arrow-right.svg"
import { ReactComponent as Bg } from "../assets/project-bg.svg"
import { projectsList } from "../assets/data"

const Projects = () => {

  return (
    <div className="Projects">
      <h2>My Projects</h2>
      <Bg />
      <ul className="projects-list">
        {
          projectsList.map((project, key) => 
            <li className="project" key={key}>
              <p className="project-title">{project.name}</p>
              <div className="project-preview">
                {/* <iframe title={project.name} src={project.url} loading="lazy" /> */}
                
                <div className="project-overlay">
                  <button className="go-to"><a href={project.url}>Visit site <Arrow /></a></button>
                </div>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Projects