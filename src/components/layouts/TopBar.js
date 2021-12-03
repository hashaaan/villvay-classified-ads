import { useState } from "react";
import {
  Button,
  Container,
  Toolbar,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const categories = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Community", value: "community" },
  { id: 3, name: "Professional", value: "professional" },
  { id: 4, name: "Housing", value: "housing" },
  { id: 5, name: "Buying", value: "buying" },
  { id: 6, name: "Selling", value: "selling" },
  { id: 7, name: "Jobs", value: "jobs" },
  { id: 8, name: "Education", value: "education" },
  { id: 9, name: "Commercial", value: "commercial" },
];

const TopBar = ({ onSelectCategory }) => {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onSelectCategory(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Toolbar disableGutters sx={{ height: 100 }}>
        <Box sx={{ mr: "auto", display: { md: "flex" } }}>
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel id="ca-select-label">Categories</InputLabel>
            <Select
              labelId="ca-select-label"
              id="ca-select"
              value={category}
              label="Categories"
              onChange={handleCategoryChange}
            >
              {categories.map(({ id, name, value }) => (
                <MenuItem key={id} value={value}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 20 }}
            size="large"
          >
            New Classified
          </Button>
        </Box>
      </Toolbar>
    </Container>
  );
};

export default TopBar;
