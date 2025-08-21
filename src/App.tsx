import { useEffect, useState } from "react";
import "./App.css";
import DarkModeButton from "./components/DarkModeButton";
import LightModeButton from "./components/LightModeButton";
import WeatherInfo from "./components/WeatherInfo";
import { SunData, getSunTimes } from "./sunApi";

const lat = 57.7089;
const lon = 11.9746;

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [sunData, setSunData] = useState<SunData | null>(null);

  useEffect(() => {
    getSunTimes(lat, lon).then(setSunData);
  }, []);

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

      {sunData && (
        <WeatherInfo
          theme={theme}
          sunrise={sunData.sunrise}
          sunset={sunData.sunset}
        />
      )}

      <h1>Theme Switcher</h1>
      <div className="flex flex-row space-x-4 mt-4">
        <LightModeButton onClick={setLightMode} />
        <DarkModeButton onClick={setDarkMode} />
      </div>
    </div>
  );
}
