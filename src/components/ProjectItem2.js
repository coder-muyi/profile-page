import styled from 'styled-components/macro';
import { useRef, useEffect } from 'react';

import { ReactComponent as Arrow } from '../assets/icons/arrow-right.svg';
import useScrollObserver from '../hooks/useScrollObserver';
import { Link } from 'react-router-dom';

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
      <p className="project-title">{name}</p>
    </Item>
  );
};

const Item = styled.div`
  width: 100%;
  max-width: 45rem;
  height: 20rem;
  margin-bottom: 5rem;
  margin-inline: auto;
  overflow: hidden;
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  .project-preview {
    img {
      object-fit: cover;
      /* width: 100%; */
      /* height: 100%; */
      filter: brightness(50%);
    }
  }
`;

export default ProjectItem;
