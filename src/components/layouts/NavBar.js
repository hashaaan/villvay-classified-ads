import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const NavBar = ({ page }) => {
  let navigate = useNavigate();

  const handleTabClick = (event, index) => {
    navigate(`/${index}`);
  };

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: "unset !important" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: "auto", display: { md: "flex" } }}
          >
            Classified Ads
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tabs
              value={page}
              onChange={handleTabClick}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
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
