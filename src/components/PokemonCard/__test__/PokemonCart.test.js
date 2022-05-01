// Packages
import React from "react";
import { render } from "@testing-library/react";

// Mocks
import { cardBuilder } from "../../../__mocks__/card-builder";

// Components
import PokemonCard from "../PokemonCard";

const setup = (props = { card: cardBuilder({ name: "MeuPojemon" }) }) => {
  const { card } = props;
  const onClick = jest.fn();

  const imageAlt = `${card.id}-${card.name}`;

  const renderResult = render(<PokemonCard {...card} onClick={onClick} />);

  const imageElement = renderResult.getByAltText(imageAlt);

  return { card: card, ...renderResult, imageElement, imageAlt, onClick };
};
describe("PokemonCard", () => {
  it("should render with default props", () => {
    const { imageElement, card, imageAlt } = setup();

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe(card.imageUrl);
    expect(imageElement.alt).toBe(imageAlt);
  });

  it("should emit event onClick", () => {
    const { imageElement, onClick } = setup();
    imageElement.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
