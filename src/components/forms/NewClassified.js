import { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { AppContext } from "../../context/AppContext";

const Input = styled("input")({
  display: "none",
});

const NewClassified = ({ categories = [], onClose }) => {
  const appContext = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleChageCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const generateNextId = () => {
    const lastId =
      appContext.items.length > 0
        ? appContext.items[appContext.items.length - 1].id
        : 0;
    return lastId + 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    appContext.addItem({
      id: generateNextId(),
      category,
      name: title,
      description,
      imageUrl: image,
      isFavourite: false,
    });
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 3000);
  };

  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        New Classified
      </Typography>
      <Stack component="form" spacing={2}>
        <TextField
          id="ad-title"
          label="Title"
          variant="outlined"
          onChange={handleChangeTitle}
        />
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel id="select-label-cat">Category</InputLabel>
          <Select
            labelId="select-label-cat"
            id="select-cat"
            value={category}
            label="Category"
            onChange={handleChageCategory}
          >
            {categories.length > 0 &&
              categories.map(({ id, name, value }) => (
                <MenuItem key={id} value={value}>
                  {name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <TextField
          id="ad-description"
          label="Description"
          variant="outlined"
          multiline
          rows={12}
          onChange={handleChangeDescription}
        />
        <label htmlFor="ad-image">
          <Input
            accept="image/*"
            id="ad-image"
            type="file"
            onChange={handleChangeImage}
          />
          <Button component="span">Upload Photo</Button>
        </label>
        <LoadingButton
          variant="contained"
          color="primary"
          sx={{ borderRadius: 20 }}
          onClick={handleSubmit}
          loading={loading}
        >
          Save and Publish
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default NewClassified;
