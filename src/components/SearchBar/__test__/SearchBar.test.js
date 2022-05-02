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

describe("SearchBar", () => {
  it("should render with default props", () => {
    const { inputElement, buttonElement } = setupTestHelper();

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
