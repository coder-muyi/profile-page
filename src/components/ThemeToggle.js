const ThemeToggle = ({changeTheme, isDarkMode}) => {
  console.log(isDarkMode)
  return (
    <form className="theme-toggle">
      <label htmlFor="theme-toggle-check">Enable {isDarkMode ? "Light" : "Dark"} Mode</label>
      <input
        type="checkbox"
        id="theme-toggle-check"
        onChange={changeTheme}
        checked={isDarkMode}
      />
    </form>
  )
}

export default ThemeToggle;