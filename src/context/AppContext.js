import { createContext, useContext, useState } from "react";
import { items } from "../data/items";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
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
    <AppContext.Provider
      value={{
        items: itemsState,
        addToFavorites: handleAddToFavourites,
        addItem: handleAddItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
