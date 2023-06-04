import { createGlobalStyle } from 'styled-components';
import { devices } from 'assets/data';

const GlobalStyles = createGlobalStyle`

* {
  transition-duration: 0.25s;
}

*:focus {
  outline-color: var(--btw);
}

::selection {
  background-color: rgb(245, 98, 93, 0.4);
}

h1,
h2 {
  color: var(--header-txt-color);
  position: relative;
}

h2 {
  font-size: 2rem;
}

h2::before {
  content: '';
  width: 4px;
  height: 100%;
  position: absolute;
  background-color: var(--theme-color);
  left: -1rem;
}

a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}

.section-header {
  position: relative;
  max-width: 1200px;
  margin: 3rem auto 4rem;
  text-align: center;
  text-transform: capitalize;
}

.section-header::before,
.section-header::after {
  content: '';
  position: absolute;
  padding: 1em;
  background-color: var(--theme-color);
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
}

.section-header::before {
  left: 0;
}

.section-header::after {
  right: 0;
}

button,
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 130px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  font-size: 1.1rem;
  border: 0;
  color: inherit;
  background-color: var(--bg-color);
  text-decoration: none;
  gap: 10px;
  padding: 0.5rem;
  cursor: pointer;
}

button:hover,
.button:hover {
  transform: scale(1.1);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
}

p {
  font-size: 1.2rem;
  color: var(--paragraph-txt-color);
}

.dark-app .project {
  box-shadow: 0px 6px 10px rgba(255, 255, 255, 0.5);
}
.dark-app {
  .project {
    box-shadow: 0px 6px 10px rgba(255, 255, 255, 0.5);
  }
}

@media ${devices.tablet} {
  :root {
    --grid-right-col: 16rem;
  }

  .Projects {
    grid-column: 1 / -1;
  }

  .page-grid {
    grid-template-columns: 1fr 15rem;
  }
}

@media ${devices.laptop} {
  :root {
    --project-card-size: 300px;
    --grid-right-col: 25rem;
  }
}

`;

export default GlobalStyles;
