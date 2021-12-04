import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Box,
  Typography,
  TextField,
  Stack,
  IconButton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Close } from "@mui/icons-material";

import { useAppContext } from "../../context/AppContext";
import AppSelect from "../AppSelect";

const Input = styled("input")({
  display: "none",
});

const NewClassified = ({ categories = [], onClose }) => {
  const appContext = useAppContext();
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
      <IconButton
        color="primary"
        data-testid="drawer-close-button"
        sx={[
          {
            position: "absolute",
            color: "#646464",
            margin: "10px",
            height: "40px",
            top: "10px",
            right: "10px",
          },
          {
            "&:hover": {
              color: "#1976d2",
            },
          },
        ]}
        onClick={() => onClose()}
      >
        <Close />
      </IconButton>
      <Stack component="form" spacing={2}>
        <TextField
          id="ad-title"
          label="Title"
          variant="outlined"
          onChange={handleChangeTitle}
        />
        <AppSelect
          items={categories}
          minWidth={300}
          label="Category"
          value={category}
          onChange={handleChageCategory}
        />
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
          data-testid="new-classified-submit"
        >
          Save and Publish
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default NewClassified;
