import { useState, useRef, useEffect } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Canvas from "components/Canvas";
import emojiSrc from "assets/emoji-smile.gif";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { width: innerWidth, height: innerHeight };
}

const WorkingOnIt = () => {
  const wRef = useRef({});
  const [dim, setDim] = useState(getWindowSize());

  useEffect(() => {
    const wElement = wRef.current;

    let listener = () => {
      setDim({
        width: wElement.clientWidth,
        height: wElement.clientHeight,
      });
    };
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  return (
    <WOI ref={wRef}>
      <Canvas dimension={dim} />
      <div>
        <h1>
          Working On It <img className="emoji" src={emojiSrc} alt="emoji" />{" "}
        </h1>
        <button>
          <Link to="/">GO BACK</Link>
        </button>
      </div>
    </WOI>
  );
};

const WOI = styled.div`
  position: relative;
  display: flex;
  place-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  & > * {
    position: absolute;
  }

  .emoji {
    width: 40px;
    height: 40px;
  }
`;

export default WorkingOnIt;
