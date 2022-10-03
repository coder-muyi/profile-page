import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import ForceScrollToTop from "./ForceScrollToTop"
import ThemeToggle from "./ThemeToggle"
import Footer from './Footer'

const SharedLayout = () => {
  const [isDarkMode, setDarkMode] = useState(false)
  const changeTheme = event => setDarkMode(event.target.checked)

  useEffect(() => {
    if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, [])

  return (
    <div className={`App ${isDarkMode ? "dark-app" : ""}`}>
      <ThemeToggle changeTheme={changeTheme} isDarkMode={isDarkMode} />
      <ForceScrollToTop />
      <Outlet context={[isDarkMode, changeTheme]} />
      <Footer />
    </div>
  )
}

export default SharedLayout