import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
} from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

const ItemCard = ({ item, onClick, onFavorite }) => {
  let navigate = useNavigate();

  const handleItemClick = () => {
    onClick(item);
    navigate(`/ad-details/${item.id}`);
  };

  return (
    <Card>
      <Box
        sx={{
          display: "block",
          backgroundImage: `url(${item.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 170,
        }}
      >
        <IconButton
          color="primary"
          aria-label="add to favorites"
          sx={[
            {
              backgroundColor: "#FFF",
              color: item.isFavourite ? "#1976d2" : "#969696",
              margin: "10px",
              height: "40px",
              float: "right",
            },
            {
              "&:hover": {
                backgroundColor: "#FFF",
                color: "#1976d2",
              },
            },
          ]}
          onClick={() => onFavorite(item)}
        >
          {item.isFavourite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </Box>
      <CardActionArea onClick={handleItemClick}>
        <CardContent>
          <Typography
            sx={{ fontSize: 10, fontWeight: "600", letterSpacing: 1 }}
            gutterBottom
          >
            {item.category.toUpperCase()}
          </Typography>
          <Typography
            gutterBottom
            sx={{ fontWeight: "500" }}
            variant="h5"
            component="div"
          >
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
