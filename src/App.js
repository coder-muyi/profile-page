import { useState, useEffect } from "react"
import "./App.css"
import ThemeToggle from "./components/ThemeToggle"
import Info from "./components/Info"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import MajorChangesBanner from "./components/MajorChangesBanner"
import styled from "styled-components/macro"

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  const changeTheme = event => setDarkMode(event.target.checked)

  useEffect(() => {
    if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, [])

  return (
    <div className={`App ${isDarkMode ? "dark-app" : ""}`}>
      <MajorChangesBanner />
      <ThemeToggle changeTheme={changeTheme} isDarkMode={isDarkMode} />
      <Grid>
        <Info />
        <Projects />
        <Footer />
      </Grid>
    </div>
  )
}

const Grid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, auto);
    /* grid-template-rows: min-content auto; */
    gap: 2rem;
  }

`

export default App

console.log("Samuel Adepoju MADE THIS!!! 😁😁")