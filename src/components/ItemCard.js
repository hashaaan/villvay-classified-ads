import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

const ItemCard = ({ item, onClick }) => {
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
              color: "rgba(0, 0, 0, 0.4)",
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
        >
          <FavoriteBorder />
        </IconButton>
      </Box>
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
    </Card>
  );
};

export default ItemCard;
