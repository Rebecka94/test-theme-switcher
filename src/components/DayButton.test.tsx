import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DayButton from "./DayButton";

describe("DayButton", () => {
  it("should render the button with correct text", () => {
    const { getByText } = render(<DayButton onClick={() => {}} />);
    const button = getByText("Day");
    expect(button).toBeInTheDocument();
  });
});
