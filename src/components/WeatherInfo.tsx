type Props = {
    theme: "light" | "dark";
    sunrise: string;
    sunset: string;
  };
  
  export default function WeatherInfo({ theme, sunrise, sunset }: Props) {

    const formatTime = (isoString: string) =>
        new Date(isoString).toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });


    return (
      <div className="mt-4 text-lg text-center">
        {theme === "light" ? (
          <>
            <span className="text-4xl">☀️</span>
          <p>Sunrise: {formatTime(sunrise)}</p>
          </>
        ) : (
          <>
            <span className="text-4xl">🌙</span>
          <p>Moonrise: {formatTime(sunset)}</p>
          </>
        )}
      </div>
    );
  }
  