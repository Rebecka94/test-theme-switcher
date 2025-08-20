import "./App.css";
import DarkModeButton from "./components/DarkModeButton";
import LightModeButton from "./components/LightModeButton";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Theme Switcher</h1>
      <div className="flex flex-row space-x-4 mt-4">
        <LightModeButton />
        <DarkModeButton />
      </div>
    </div>
  );
}
