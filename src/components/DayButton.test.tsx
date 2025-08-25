import { fireEvent, render } from "@testing-library/react";
import { describe, expect, vi, test } from "vitest";
import DayButton from "./DayButton";

describe("DayButton", () => {
  test("should render the button with correct text", () => {
    const { getByText } = render(<DayButton onClick={() => {}} />);
    const button = getByText("Day");
    expect(button).toBeInTheDocument();
  });

  test("should call onClick when button is clicked", () => {
    const mockOnClick = vi.fn();
    const { getByText } = render(<DayButton onClick={mockOnClick} />);
    const button = getByText("Day");

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
