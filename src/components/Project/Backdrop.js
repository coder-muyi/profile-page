import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { IoArrowDownCircleOutline, IoArrowBackSharp } from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll';

const Backdrop = ({ projectUrl, imageUrl }) => {
  return (
    <div>
      <Image style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="up">
          <Link to="/" className="button">
            <IoArrowBackSharp />
            Back
          </Link>
        </div>
        <div className="down">
          <ScrollLink to="section" smooth={true} duration={500} offset={-150}>
            <button style={{ background: 'transparent', padding: '0' }}>
              <IoArrowDownCircleOutline size="3em" />
            </button>
          </ScrollLink>
        </div>
      </Image>
      <a
        className="button"
        href={projectUrl}
        style={{
          marginBlock: '3rem',
          backgroundColor: 'var(--theme-color)',
          maxWidth: '10rem',
          marginInline: 'auto',
        }}
        target="_blank"
        rel="noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

const Image = styled.div`
  position: relative;
  width: 100%;
  height: clamp(23rem, 90vw, 40rem);
  background-size: 100%;
  background-repeat: no-repeat;
  background-clip: cover;
  border-radius: 0 0 20rem 20rem;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgb(245, 98, 93, 0.4);
  }

  .up {
    position: absolute;
    top: 3rem;
    left: 3rem;
  }

  .down {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    filter: backdrop(0 3px 5px var(--btw));
  }
`;

export default Backdrop;
