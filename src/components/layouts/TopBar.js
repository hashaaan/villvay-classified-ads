import { useState } from "react";
import { Button, Container, Toolbar, Box, Drawer } from "@mui/material";

import NewClassified from "../forms/NewClassified";
import AppSelect from "../AppSelect";
import { categories } from "../../data/categories";

const TopBar = ({ onSelectCategory }) => {
  const [category, setCategory] = useState("all");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChageCategory = (e) => {
    setCategory(e.target.value);
    onSelectCategory(e.target.value);
  };

  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 100 }}>
          <Box sx={{ mr: "auto", display: { md: "flex" } }}>
            <AppSelect
              items={categories}
              minWidth={180}
              label="Categories"
              value={category}
              onChange={handleChageCategory}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 20 }}
              size="large"
              onClick={toggleDrawer(true)}
            >
              New Classified
            </Button>
          </Box>
        </Toolbar>
      </Container>
      {/* App Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <NewClassified
          onClose={() => setDrawerOpen(false)}
          categories={categories}
        />
      </Drawer>
    </>
  );
};

export default TopBar;
