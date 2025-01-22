import React from "react";

const ThemeToggle = ({ theme, setTheme }) => (
  <div className="theme-toggle">
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  </div>
);

export default ThemeToggle;
