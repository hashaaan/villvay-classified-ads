import React from "react";
import ReactDom from "react-dom";

import AppSelect from "../AppSelect";
import { categories } from "../../data/categories";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <AppSelect
      value={categories[0].value}
      items={categories}
      label="Categories"
      onChange={() => {}}
    />,
    div
  );
});
