import { ReactComponent as Arrow } from "../assets/icons/arrow-right.svg"
import { ReactComponent as Bg } from "../assets/project-bg.svg"
import { projectsList } from "../assets/data"
import { useRef, useEffect } from "react"

let listItems = []

const Projects = () => {
  const element = useRef({})
  const isElementFocused = element => (element === document.activeElement)

  useEffect(() => {
    listItems = Array.from(element.current.children)

    document.addEventListener("keydown", e => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        listItems.forEach(li => {
          if (isElementFocused(li)) {
            e.preventDefault()
            li.classList.add("project-focus")
          } else {
            li.classList.remove("project-focus")
          }
        })
      }
    })
  }, [])

  function checkHover() {
    listItems.forEach(li => {
      li.blur()
      li.classList.remove("project-focus")
    })
  }

  function removeLiFocusClass(event) {
    const ancestor = event.nativeEvent.path[4]
    ancestor.classList.remove("project-focus")
  }

  return (
    <div className="Projects">
      <h2>My Projects</h2>
      <Bg />
      <ul className="projects-list" ref={element}>
        {
          projectsList.map((project, key) =>
            <li
              className={`project`}
              id={key}
              key={key}
              tabIndex="0"
              onMouseEnter={checkHover}
            >
              <p className="project-title">{project.name}</p>
              <div className="project-preview">
                <img
                  src={project.imgSrc}
                  alt={project.name}
                  width="100%"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <button className="go-to" tabIndex={-1}>
                    <a
                      href={project.url}
                      onBlur={removeLiFocusClass}
                    >
                      Visit site <Arrow />
                    </a>
                  </button>
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