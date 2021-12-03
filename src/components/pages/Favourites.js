import NavBar from "../layouts/NavBar";
import TopBar from "../layouts/TopBar";

const Favourites = () => {
  return (
    <>
      <NavBar page="favourites" />
      <TopBar page="favourites" onSelectCategory={() => {}} />
    </>
  );
};

export default Favourites;
