import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const AppSelect = ({ items = [], label, minWidth = 180, ...props }) => {
  return (
    <FormControl sx={{ minWidth }}>
      <InputLabel id="ca-select-label">{label}</InputLabel>
      <Select
        data-testid="app-select"
        labelId="ca-select-label"
        id="ca-select"
        label={label}
        {...props}
      >
        {items.length > 0 &&
          items.map(({ id, name, value }) => (
            <MenuItem key={id} value={value}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default AppSelect;
