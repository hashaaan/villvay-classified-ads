import React from "react";
import ReactDom from "react-dom";
import { render, cleanup } from "@testing-library/react";

import NewClassified from "../NewClassified";
import { categories } from "../../../data/categories";

afterEach(cleanup);

it("renders form without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <NewClassified categories={categories} onClose={() => {}} />,
    div
  );
});

it("renders submit button correctly", () => {
  const { getByTestId } = render(
    <NewClassified categories={categories} onClose={() => {}} />
  );
  expect(getByTestId("new-classified-submit")).toHaveTextContent(
    "Save and Publish"
  );
});
