import styled from 'styled-components/macro';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';

import useScrollObserver from '../hooks/useScrollObserver';
import { devices } from 'assets/data';

const ProjectItem = (props) => {
  const { id, name, imgSrc, url } = props;
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
    <Item className="project hide-project-item" ref={itemRef}>
      <div className="project-preview">
        <img src={imgSrc} alt={name} width="100%" loading="lazy" />
      </div>
      <div className="rect">
        <p className="project-title">{name}</p>
        <div className="links">
          <Link className="button" to={`/projects/${id}`}>
            Details <RiArrowRightSLine size="2em" />
          </Link>
          <a className="button" href={url}>
            Visit Site <RiArrowRightSLine size="2em" />
          </a>
        </div>
      </div>
    </Item>
  );
};

const Item = styled.div`
  width: 100%;
  max-width: 35rem;
  height: 15rem;
  margin-bottom: 5rem;
  margin-inline: auto;
  border: 2px solid var(--theme-color);
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -20px;
    bottom: -10px;
    width: 50px;
    /* height: 100px; */
    background-color: var(--theme-color);
    z-index: 1;
    clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    transition: inherit;
  }

  :hover,
  :focus-within {
    &::before {
      left: -1rem;
      top: -1rem;
    }

    .rect {
      bottom: -10px;
      right: 10px;
      transform: scale(1.05);
    }
  }

  @media ${devices.tablet} {
    height: 20rem;
    max-width: 45rem;
  }

  .project-preview {
    border-radius: inherit;
    overflow: hidden;
    height: 100%;

    img {
      object-fit: cover;
      /* height: 100%; */
      filter: brightness(70%);
    }
  }

  .rect {
    position: absolute;
    background-color: var(--wtb);
    color: var(--paragraph-txt-color);
    right: 0;
    bottom: -1.5rem;
    border: 3px solid var(--theme-color);
    min-width: 55%;
    min-height: 30%;
    box-shadow: 0 3px 4px rgb(0 0 0 / 0.2);
    padding: 2rem;
    border-radius: inherit;

    @media ${devices.tablet} {
      right: -2rem;
    }

    .project-title {
      font-size: 2rem;
      margin: 0;
    }

    .links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      color: var(--btw);

      .button {
        width: 6rem;
        background-color: var(--sec-color);
        color: var(--btw);

        .arrow {
          width: 10px;
          height: 10px;
        }
      }
    }
  }
`;

export default ProjectItem;
