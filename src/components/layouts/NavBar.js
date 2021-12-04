import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Tab,
  Tabs,
} from "@mui/material";

const NavBar = ({ page }) => {
  let navigate = useNavigate();

  const handleTabClick = (event, index) => {
    navigate(`/${index}`);
  };

  return (
    <AppBar position="static" color="default" sx={{ backgroundColor: "#FFF" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: "unset !important" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: "auto", display: { md: "flex" }, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Classified Ads
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tabs
              value={page}
              onChange={handleTabClick}
              textColor="primary"
              indicatorColor="primary"
              aria-label="navigation tabs"
            >
              <Tab value={"home"} label="Home" />
              <Tab value={"favourites"} label="Favourites" />
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
