import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import NightButton from "./NightButton";

describe("NightButton", () => {
  it("should render the button with correct text", () => {
    const { getByText } = render(<NightButton onClick={() => {}} />);
    const button = getByText("Night");
    expect(button).toBeInTheDocument();
  });

  it("should call onClick when button is clicked", () => {
    const mockOnClick = vi.fn();
    const { getByText } = render(<NightButton onClick={mockOnClick} />);
    const button = getByText("Night");

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
