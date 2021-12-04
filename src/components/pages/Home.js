import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";

import ItemCard from "../ItemCard";
import NavBar from "../layouts/NavBar";
import TopBar from "../layouts/TopBar";
import { useAppContext } from "../../context/AppContext";

const Home = () => {
  const appContext = useAppContext();
  const [itemsToShow, setItemsToShow] = useState(appContext.items);

  useEffect(() => {
    setItemsToShow(appContext.items);
  }, [appContext.items]);

  const handleCategorySelect = (category) => {
    if (category === "all") {
      setItemsToShow(appContext.items);
    } else {
      setItemsToShow(
        appContext.items.filter((item) => item.category === category)
      );
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
                <ItemCard
                  item={item}
                  onClick={() => {}}
                  onFavorite={appContext.addToFavorites}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
