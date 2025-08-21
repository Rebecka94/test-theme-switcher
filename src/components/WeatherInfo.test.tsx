import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WeatherInfo from "./WeatherInfo";

describe("WeatherInfo", () => {
  const sunrise = "2025-08-21T05:45:00Z";
  const sunset = "2025-08-21T21:15:00Z";

  it("shows sunrise for Day theme", () => {
    render(<WeatherInfo theme="light" sunrise={sunrise} sunset={sunset} />);
    expect(screen.getByText("☀️")).toBeInTheDocument();
    expect(screen.getByText(/Sunrise:/)).toBeVisible();
  });

  it("shows moonrise for Night theme", () => {
    render(<WeatherInfo theme="dark" sunrise={sunrise} sunset={sunset} />);
    expect(screen.getByText("🌙")).toBeInTheDocument();
    expect(screen.getByText(/Moonrise:/)).toBeVisible();
  });
});
