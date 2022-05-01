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

  const renderResult = render(<PokemonCard {...card} onClick={onClick} />);

  const imageElement = renderResult.getByAltText(`${card.id}-${card.name}`);

  return { card: card, ...renderResult, imageElement };
};
describe("PokemonCard", () => {
  it("should render with default props", () => {
    const container = render(<PokemonCard />);
  });
});
