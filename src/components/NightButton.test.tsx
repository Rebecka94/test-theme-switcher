import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NightButton from "./NightButton";

describe("NightButton", () => {
  it("should render the button with correct text", () => {
    const { getByText } = render(<NightButton onClick={() => {}} />);
    const button = getByText("Night");
    expect(button).toBeInTheDocument();
  });
});
