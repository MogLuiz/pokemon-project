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
});
