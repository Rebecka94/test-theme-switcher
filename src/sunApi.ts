export interface SunData {
    sunrise: string;
    sunset: string;
  }
  
  export async function getSunTimes(lat: number, lon: number): Promise<SunData> {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`
    );

    const data = await response.json();
    return {
      sunrise: data.results.sunrise,
      sunset: data.results.sunset,
    };
  }
  