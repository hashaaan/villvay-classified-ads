import { useState } from "react";
import { Container, Grid } from "@mui/material";

import ItemCard from "../ItemCard";
import NavBar from "../layouts/NavBar";
import TopBar from "../layouts/TopBar";
import { items } from "../../data/items";

const Home = () => {
  const [itemsToShow, setItemsToShow] = useState(items);

  const handleCategorySelect = (category) => {
    if (category === "all") {
      setItemsToShow(items);
    } else {
      setItemsToShow(items.filter((item) => item.category === category));
    }
  };

  return (
    <>
      <NavBar page="home" />
      <TopBar page="home" onSelectCategory={handleCategorySelect} />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {itemsToShow.length > 0 &&
            itemsToShow.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <ItemCard item={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
