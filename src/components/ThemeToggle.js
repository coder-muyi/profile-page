import styled from 'styled-components/macro';

const ThemeToggle = ({ changeTheme, isDarkMode }) => {
  return (
    <StyledThemeToggle>
      <Toggle onChange={changeTheme} checked={isDarkMode} />
    </StyledThemeToggle>
  );
};

const StyledThemeToggle = styled.div`
  position: fixed;
  top: 10px;
  left: calc(50% - 60px);
  border-radius: 10px;
  user-select: none;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  z-index: 1000;
  width: 60px;
  height: 30px;

  & > * {
    cursor: pointer;
  }

  &::after {
    content: 'Change Theme';
    position: absolute;
    top: 20%;
    left: 120%;
    width: 200%;
    color: var(--paragraph-txt-color);
    transform: translateY(-15%);
  }
`;

const Toggle = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  position: relative;
  border-radius: inherit;
  background-color: ${(props) => (props.checked ? 'grey' : 'white')};
  width: 100%;
  height: 100%;
  padding: 1em;
  margin: 0;
  display: block;

  &::before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: -5%;
    height: 110%;
    width: 55%;
    border-radius: 100%;
    transition-duration: var(--trans-dur);
    z-index: 3;
    background: var(--theme-color);
  }

  &:checked::before {
    transform: translate(100%);
  }
`;

export default ThemeToggle;
