import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LightModeButton from "./LightModeButton";

describe("LightModeButton", () => {
  it("should render the button with correct text", () => {
    const { getByText } = render(<LightModeButton onClick={() => {}} />);
    const button = getByText("Light Mode");
    expect(button).toBeInTheDocument();
  });
});
