const ThemeToggle = ({changeTheme, isChecked}) => {
  return (
    <form className="theme-toggle">
      <label htmlFor="theme-toggle">Enable { isChecked ? "Light Mode" : "Dark Mode"}</label>
      <input type="checkbox" id="theme-toggle" onChange={changeTheme} />
    </form>
  )
}

export default ThemeToggle;