import React, { useState } from "react";
import "./Icon_darkMode.css";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
function Icon_darkMode({ toggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <div>
      <MoonIcon />
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <SunIcon />
    </div>
  );
}
export default Icon_darkMode;
