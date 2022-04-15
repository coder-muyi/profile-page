import { ReactComponent as Arrow } from "../assets/icons/arrow-right.svg"

const Projects = () => {
  const projectsList = [
    {
      name: "Material UI Colors Demo",
      url: "https://samuel-username.github.io/Material-UI-Colors",
    },
    {
      name: "Movie list",
      url: "https://samuel-username.github.io/Movie-list"
    },
    {
      name: "My blackjack",
      url: "https://samuel-username.github.io/blackjack"
    },
    {
      name: "Huddle landing page",
      url: "https://samuel-username.github.io/landing_page"
    },
    {
      name: "Coming Soon",
      url: "https://samuel-username.github.io/coming-soon-landing-page"
    },
    {
      name: "Blogr (Desktop view is incomplete)",
      url: "https://samuel-username.github.io/blogr-landing-page"
    }
  ]

  return (
    <div className="Projects">
      <h2>My Projects</h2>
      <ul className="projects-list">
        {
          projectsList.map((project, key) => 
            <li className="project" key={key}>
              <p className="project-title">{project.name}</p>

              <div className="project-preview">
                <iframe title={project.name} src={project.url} loading="lazy" />
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