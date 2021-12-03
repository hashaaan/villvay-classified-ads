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

const TopBar = () => {
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ height: 100 }}>
        <Box sx={{ mr: "auto", display: { md: "flex" } }}>
          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="ca-select-label">Categories</InputLabel>
            <Select
              labelId="ca-select-label"
              id="ca-select"
              //value={age}
              label="Categories"
              onChange={(e) => console.log(e.target.value)}
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
            color="secondary"
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
