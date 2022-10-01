import { useState, useEffect } from "react"
import "./App.css"
import ThemeToggle from "./components/ThemeToggle"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
// import MajorChangesBanner from "./components/MajorChangesBanner"
import styled from "styled-components/macro"
import { devices } from './assets/data'

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
     {/* <div className='App'> */}
      {/* <MajorChangesBanner /> */}
      <ThemeToggle changeTheme={changeTheme} isDarkMode={isDarkMode} />
      <Grid>
        <Hero isDarkMode={isDarkMode}/>
        <Projects />
        <Footer />
      </Grid>
    </div>
  )
}

const Grid = styled.div`
  @media (${devices.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

`

export default App

// console.log("Samuel Adepoju MADE THIS!!! 😁😁")