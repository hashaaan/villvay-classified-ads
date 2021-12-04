import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Favourites from "./components/pages/Favourites";
import AdDetails from "./components/pages/AdDetails";
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

  const handleAddItem = (item) => {
    const newItems = [...itemsState];
    newItems.push(item);
    setItemsState(newItems);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          items: itemsState,
          addToFavorites: handleAddToFavourites,
          addItem: handleAddItem,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/ad-details/:id" element={<AdDetails />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
