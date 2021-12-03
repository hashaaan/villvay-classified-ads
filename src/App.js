import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Favourites from "./components/pages/Favourites";
import { AppContext } from "./context/AppContext";
import { items } from "./data/items";

function App() {
  const [itemsState, setItemsState] = useState(items);

  const handleAddToFavourites = (item) => {
    const newItems = [...itemsState];
    const index = newItems.indexOf(item);
    newItems[index].isFavourite = !newItems[index].isFavourite;
    setItemsState(newItems);
  };

  return (
    <>
      <AppContext.Provider
        value={{ items: itemsState, addToFavorites: handleAddToFavourites }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
