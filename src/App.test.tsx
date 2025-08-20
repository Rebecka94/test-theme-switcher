import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("Theme Switcher text should be visible", () => {
  render(<App />);
  const heading = screen.getByText("Theme Switcher");
  expect(heading).toBeVisible();
});
