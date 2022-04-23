import { useState, useEffect } from "react"
import "./App.css"
import ThemeToggle from "./components/ThemeToggle"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  const changeTheme = event => setDarkMode(event.target.checked)

  useEffect(() => {
    if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, [])

  return (
    <div className={`App ${isDarkMode && "dark-app"}`}>
      <ThemeToggle changeTheme={changeTheme} isDarkMode={isDarkMode} />
      <Info />
      <About />
      <Interests />
      <Projects />
      <Footer />
    </div>
  )
}

export default App