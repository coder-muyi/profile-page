import { useState, useEffect } from "react"
import "./App.css"
import ThemeToggle from "./components/ThemeToggle"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
// import Projects from "./components/Projects"
import Footer from "./components/Footer"

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false)
  const [appClassName, setAppClassName] = useState("App")

  const changeTheme = (event) => setDarkMode(event.target.checked)

  useEffect(() => {
    setAppClassName(isDarkMode ? "App dark-app" : "App")
  }, [isDarkMode])

  return (
    <div className={appClassName}>
      <ThemeToggle changeTheme={changeTheme} />
      <Info />
      <About />
      <Interests />
      {/* <Projects /> */}
      <Footer />
    </div>
  )
}

export default App