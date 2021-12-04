import React from "react";
import ReactDom from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

import ItemCard from "../ItemCard";

const mockedUsedNavigate = jest.fn();

const mokedItem = {
  id: 1,
  name: "Lorem ipsum dolor sit amet",
  category: "housing",
  imageUrl: "/static/images/07.png",
  description:
    "consectetur adipiscing elit. Morbi eleifend risus quis quam euismod, eget aliquam nulla elementum. Nullam lacus nisi, pretium in viverra a, consectetur id mauris. Maecenas luctus risus quis vehicula cursus...",
  isFavourite: false,
};

afterEach(cleanup);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

it("renders item card without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <ItemCard item={mokedItem} onClick={() => {}} onFavoriteClick={() => {}} />,
    div
  );
});

it("renders favourite button correctly", () => {
  const { getByTestId } = render(
    <ItemCard item={mokedItem} onClick={() => {}} onFavoriteClick={() => {}} />
  );
  getByTestId("favourite-button");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <ItemCard
        item={mokedItem}
        onClick={() => {}}
        onFavoriteClick={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
