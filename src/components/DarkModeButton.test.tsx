import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DarkModeButton from "./DarkModeButton";

describe("DarkModeButton", () => {
  it("should render the button with correct text", () => {
    const { getByText } = render(<DarkModeButton onClick={() => {}} />);
    const button = getByText("Dark Mode");
    expect(button).toBeInTheDocument();
  });
});
