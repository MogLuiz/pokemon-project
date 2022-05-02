// Packages
import React from "react";
import { render, fireEvent } from "@testing-library/react";

// Components
import SearchBar from "../SearchBar";

const setupTestHelper = (props) => {
  const defaultProps = {
    placeholder: "Pesquise...",
    buttonLabel: "Botão",
    inputDelay: 200,
    ...props,
  };

  const renderResult = render(<SearchBar {...defaultProps} />);

  const inputElement = renderResult.getByPlaceholderText(
    defaultProps.placeholder
  );
  const buttonElement = renderResult.getByText(defaultProps.buttonLabel);
  const inputDelay = defaultProps.inputDelay;

  return { ...renderResult, inputElement, buttonElement, inputDelay };
};

jest.useFakeTimers();

describe("SearchBar", () => {
  it("should render with default props", () => {
    const { inputElement, buttonElement } = setupTestHelper();

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("input should emit onChange event with debounce delay", () => {
    const onChange = jest.fn();
    const { inputDelay, inputElement } = setupTestHelper({ onChange });

    fireEvent.change(inputElement, { target: { value: "Beterraba" } });

    jest.advanceTimersByTime(inputDelay);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({ target: inputElement });
  });

  it("button should emit onButtonClick event", () => {
    const onButtonClick = jest.fn();
    const { buttonElement } = setupTestHelper({ onButtonClick });

    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    expect(onButtonClick).toHaveBeenCalledTimes(2);
  });
});
