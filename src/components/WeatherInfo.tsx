type Props = {
    theme: "light" | "dark";
    sunrise: string;
    sunset: string;
  };
  
  export default function WeatherInfo({ theme, sunrise, sunset }: Props) {
    return (
      <div className="mt-4 text-lg text-center">
        {theme === "light" ? (
          <>
            <p>🌅 : {sunrise}</p>
            <p>🌇 : {sunset}</p>
          </>
        ) : (
          <>
            <p>🌙 : {sunset}</p>
            <p>🌙 : {sunrise}</p>
          </>
        )}
      </div>
    );
  }
  