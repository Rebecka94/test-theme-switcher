import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import App from "./App";
import * as sunApi from "./sunApi";

test("Switcher text updates based on theme", () => {
  render(<App />);

  const heading = screen.getByText("Switch to see moonrise");
  expect(heading).toBeVisible();

  fireEvent.click(screen.getByText("Night"));

  expect(screen.getByText("Switch to see sunrise")).toBeVisible();

  fireEvent.click(screen.getByText("Day"));
  expect(screen.getByText("Switch to see moonrise")).toBeVisible();
});

test("clicking Day and Night buttons should change themes", () => {
  render(<App />);

  const container = screen.getByText(/Switch to see/).parentElement;

  expect(container).toHaveClass("bg-white");

  fireEvent.click(screen.getByText("Night"));
  expect(container).toHaveClass("bg-gray-900");

  fireEvent.click(screen.getByText("Day"));
  expect(container).toHaveClass("bg-white");
});

test("clicking Day/Night buttons updates WeatherInfo", async () => {
  vi.spyOn(sunApi, "getSunTimes").mockResolvedValue({
    sunrise: "2025-08-21T05:45:00Z",
    sunset: "2025-08-21T21:15:00Z",
  });

  render(<App />);

  const sunriseText = await screen.findByText(/Sunrise:/);
  expect(sunriseText.textContent).toMatch(/\d{2}:\d{2}/);
  expect(screen.getByText("☀️")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Night"));

  expect(screen.getByText("🌙")).toBeInTheDocument();
  const moonriseText = screen.getByText(/Moonrise:/);
  expect(moonriseText.textContent).toMatch(/\d{2}:\d{2}/);
});

test("WeatherInfo shows correct times after API resolves", async () => {
  vi.spyOn(sunApi, "getSunTimes").mockResolvedValue({
    sunrise: "2025-08-21T06:00:00Z",
    sunset: "2025-08-21T20:30:00Z",
  });

  render(<App />);

  const sunriseText = await screen.findByText(/Sunrise:/);
  expect(sunriseText.textContent).toMatch(/\d{2}:\d{2}/);

  fireEvent.click(screen.getByText("Night"));

  const moonriseText = await screen.findByText(/Moonrise:/);
  expect(moonriseText.textContent).toMatch(/\d{2}:\d{2}/);
});
