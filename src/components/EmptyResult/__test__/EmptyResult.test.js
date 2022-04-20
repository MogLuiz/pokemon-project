// Packages
import React from "react";
import { render } from "@testing-library/react";

// Components
import EmptyResult from "../EmptyResult";

describe("EmptyResult", () => {
  test("should render correctly with default props", () => {
    const { container, getByAltText, getByText } = render(<EmptyResult />);

    const defaultMessage = "Oops... Não encontramos nada.";
    const defaultWidth = 200;

    const image = getByAltText(/empty result/i);

    expect(container).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(getByText(defaultMessage)).toBeInTheDocument();
    expect(image.width).toBe(defaultWidth);
  });

  test("should render with message prop", () => {
    const message = "Nova mensagem";
    const { getByText } = render(<EmptyResult message={message} />);

    expect(getByText(message)).toBeInTheDocument();
  });

  test("shoud render with width prop", () => {
    const width = 250;
    const { getByAltText } = render(<EmptyResult width={width} />);

    expect(getByAltText(/empty result/i).width).toBe(width);
  });
});
