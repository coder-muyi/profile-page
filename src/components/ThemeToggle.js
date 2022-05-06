import styled from "styled-components"

const ThemeToggle = ({ changeTheme, isDarkMode }) => {
  return (
    <StyledThemeToggle>
      <Toggle
        onChange={changeTheme}
        checked={isDarkMode}
      />
    </StyledThemeToggle>
  )
}

const StyledThemeToggle = styled.form`
  position: fixed;
  top: 10px;
  left: calc(50% - 60px);
  color: white;
  border-radius: 10px;
  user-select: none;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  cursor: pointer;
  z-index: 1000;
  width: 60px;
  height: 30px;
  
  & > * {
    cursor: pointer;
  }

  &:hover {
  color: black;
  }
`;

const Toggle = styled.input.attrs({
  type: "checkbox"
})`
  appearance: none;
  position: relative;
  border-radius: inherit;
  background-color: ${props => props.checked ? "grey" : "white"};
  width: 100%;
  height: 100%;
  padding: 1em;
  margin: 0;
  display: block;

  &::before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: -5%;
    height: 110%;
    width: 55%;
    border-radius: 100%;
    transition-duration: .3s;
    z-index: 3;
    background: var(--sec-color);
  }
  
  &:checked::before {
    transform: translate(100%);
  }

  &::after {
    content: "Change Theme";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 120%;
    width: 100%;
    color: ${props => props.checked ? "#ddd" : "#222"};
  }
`;

export default ThemeToggle;