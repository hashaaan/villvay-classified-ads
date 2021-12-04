import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Favourites from "./components/pages/Favourites";
import AdDetails from "./components/pages/AdDetails";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/ad-details/:id" element={<AdDetails />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
