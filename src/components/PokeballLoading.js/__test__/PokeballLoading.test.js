// Packages
import React from "react";
import { render } from "@testing-library/react";

// Components
import PokeballLoading from "../PokeballLoading";

describe("PokeballLoading", () => {
  test("should render correctly with default props", () => {
    const { getByAltText, container } = render(<PokeballLoading />);

    const defaultSize = 200;
    const image = getByAltText(/pokeball loading/i);

    expect(container).toBeInTheDocument();
    expect(image).toBeInTheDocument();

    expect(image.width).toBe(defaultSize);
    expect(image.height).toBe(defaultSize);
  });

  test("should render with the correctly message", () => {
    const message = "Mensagem de loading";

    const { queryByText, rerender } = render(<PokeballLoading />);

    expect(queryByText(message)).not.toBeInTheDocument();

    rerender(<PokeballLoading message={message} />);

    expect(queryByText(message)).toBeInTheDocument();
  });
});
