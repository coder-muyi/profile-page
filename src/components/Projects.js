import { ReactComponent as Arrow } from "../assets/icons/arrow-right.svg"
import { ReactComponent as Bg } from "../assets/project-bg.svg"
import { projectsList } from "../assets/data"
import { useState, useRef, useEffect } from "react"

const Projects = () => {
  const [isLiFocused, setIsLiFocus] = useState({})
  // const [focusClassName, setFocusClassName] = useState("")
  const element = useRef({})

  useEffect(() => {
    const lis = element.current.children
   
    Array.from(lis, li => {
      const isFocused = li === document.activeElement
      setIsLiFocus(prev => ({...prev, [li.id]: isFocused}))
      return ""
    })
  }, [])

  function checkFocus(event) {
    event.stopPropagation()
    const {type, target} = event
    
    setIsLiFocus(prev => ({
      ...prev,
      [target.id]: !prev[target.id]
    }))

    if (type === "focus") {
      // setFocusClassName("project-focus")
      target.classList.add("project-focus")
    } else {
      target.classList.remove("project-focus")
    }
  }

  console.log(isLiFocused)

  function removeLiFocusClass(event) {
    // setFocusClassName("")
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
              className="project"
              id={key}
              key={key} 
              tabIndex="0"
              onFocus={checkFocus}
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
                    <a href={project.url} onBlur={removeLiFocusClass}>Visit site <Arrow /></a>
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