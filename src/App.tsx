import { useState } from "react";
import "./App.css";
import DarkModeButton from "./components/DarkModeButton";
import LightModeButton from "./components/LightModeButton";

export default function App() {
  const [theme, setTheme] = useState("light");

  const setDarkMode = () => {
    setTheme("dark");
  };
  const setLightMode = () => {
    setTheme("light");
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1>Theme Switcher</h1>
      <div className="flex flex-row space-x-4 mt-4">
        <LightModeButton onClick={setLightMode} />
        <DarkModeButton onClick={setDarkMode} />
      </div>
    </div>
  );
}
