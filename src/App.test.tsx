import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("Theme Switcher text should be visible", () => {
  render(<App />);
  const heading = screen.getByText("Theme Switcher");
  expect(heading).toBeVisible();
});

test("clicking Day and Night buttons should change themes", () => {
  render(<App />);

  const container = screen.getByText("Theme Switcher").parentElement;

  expect(container).toHaveClass("bg-white");

  fireEvent.click(screen.getByText("Night"));
  expect(container).toHaveClass("bg-gray-900");

  fireEvent.click(screen.getByText("Day"));
  expect(container).toHaveClass("bg-white");
});
