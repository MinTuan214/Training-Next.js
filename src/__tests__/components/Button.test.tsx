import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../app/components/Button";

describe("Button Component", () => {
  test("renders the button with the correct label", () => {
    render(<Button label="Click Me" onClick={() => {}} />);

    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls the onClick function when clicked", () => {
    const mockOnClick = jest.fn();

    render(<Button label="Click Me" onClick={mockOnClick} />);

    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
