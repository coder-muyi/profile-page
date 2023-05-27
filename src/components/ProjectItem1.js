import styled from 'styled-components/macro';
import { useRef, useEffect } from 'react';

import { ReactComponent as Arrow } from '../assets/icons/arrow-right.svg';
import useScrollObserver from '../hooks/useScrollObserver';
import { Link } from 'react-router-dom';

const ProjectItem = (props) => {
  const { id, name, imgSrc, url, checkHover, removeLiFocusClass } = props;
  const itemRef = useRef({});

  const observer = useScrollObserver((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hide-project-item');
    }
  });

  useEffect(() => {
    observer.observe(itemRef.current);
  }, [observer]);

  return (
    <Item
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
    </Item>
  );
};

const Item = styled.div`
  width: var(--project-card-size);
  height: calc(var(--project-card-size) / 1.2);
  margin: 2em;
  border-radius: 50px;
  overflow: hidden;

  /* for safari */
  mask-image: radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  background: white;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  border: 0.1em solid var(--sec-color);

  &:hover,
  &.project-focus {
    box-shadow: var(--cmn-box-shadow);
    border-radius: 10px;
    transform: scale(1.2);

    .project-overlay {
      opacity: 1;
      background: rgba(0, 0, 0, 0.7);

      .go-to {
        visibility: visible; /* Necessary */
        opacity: 1; /* Necessary */
        transform: translateY(200%);
      }
    }
  }
  &:focus {
    border: 0.3em solid var(--sec-color);
  }

  .project-title {
    box-shadow: var(--cmn-box-shadow);
    margin: 0;
    padding-block: 0.5em;
    background-color: var(--sec-color);
    color: white;
    font-size: 0.8rem;
  }

  .project-preview {
    height: 100%;
    position: relative;
  }

  .project-overlay {
    position: absolute;
    inset: 0;
  }

  .project-overlay .go-to {
    transition-timing-function: cubic-bezier(0.22, 0.68, 0, 2.71);
    transition-delay: 0.25s;
    visibility: hidden; /* Necessary */
    opacity: 0; /* Necessary */
    background-color: white;
    color: var(--sec-color);
    width: 35%;
    font-size: 0.7em;
    margin-inline: 0.5rem;
  }

  .project-overlay .go-to a {
    padding: 0.3rem 0;
    display: inline-flex;
    align-items: center;
  }

  .project-overlay .go-to .arrow {
    display: inline-block;
    opacity: 0;
    width: 0;
    height: 20px;
  }

  .project-overlay .go-to:hover .arrow,
  .project-overlay .go-to a:focus .arrow {
    opacity: 1;
    width: 20%;
  }
`;

export default ProjectItem;
