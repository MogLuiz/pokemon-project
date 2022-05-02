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

  const inputElement = renderResult.getAllByPlaceholderText(/Pesquise.../i);
  const buttonElement = renderResult.getByText(/botão/i);

  return { ...renderResult, inputElement, buttonElement };
};
