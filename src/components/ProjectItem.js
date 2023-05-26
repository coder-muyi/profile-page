import { useRef, useEffect } from "react";
import { ReactComponent as Arrow } from "../assets/icons/arrow-right.svg";
import useScrollObserver from "../assets/hooks/useScrollObserver";
import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  const { id, name, imgSrc, url, checkHover, removeLiFocusClass } = props;
  const itemRef = useRef({});

  const observer = useScrollObserver((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hide-project-item");
    }
  });

  useEffect(() => {
    observer.observe(itemRef.current);
  }, [observer]);

  return (
    <li
      className={`project hide-project-item`}
      id={id}
      tabIndex="0"
      onMouseEnter={checkHover}
      ref={itemRef}
    >
      <p className="project-title">{name}</p>
      <div className="project-preview">
        <img src={imgSrc} alt={name} width="100%" loading="lazy" />
        <div className="project-overlay">
          <button className="go-to" tabIndex={-1}>
            <Link to="/working-on-it">
              Learn More <Arrow />
            </Link>
          </button>
          <button className="go-to" tabIndex={-1}>
            <a href={url} onBlur={removeLiFocusClass}>
              Visit Site <Arrow />
            </a>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
