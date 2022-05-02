// Packages
import React from "react";
import { render } from "@testing-library/react";

// Components
import SearchBar from "../SearchBar";

const setupTestHelper = (
  props = {
    placeholder: "Pesquise...",
    buttonLabel: "Botão",
    inputDelay: 200,
  }
) => {
  const renderResult = render(<SearchBar {...props} />);

  const inputElement = renderResult.getByPlaceholderText(props.placeholder);
  const buttonElement = renderResult.getByText(props.buttonLabel);

  return { ...renderResult, inputElement, buttonElement };
};

describe("SearchBar", () => {
  it("should render with default props", () => {
    const { inputElement, buttonElement } = setupTestHelper();

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
