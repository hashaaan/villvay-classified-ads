import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import NavBar from "../layouts/NavBar";
import { useAppContext } from "../../context/AppContext";

const AdDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const appContext = useAppContext();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    setAd(appContext.items.find((item) => item.id === Number(params.id)));
  }, [params.id, appContext.items]);

  return (
    <>
      <NavBar page="home" />
      <Container
        maxWidth="lg"
        sx={{
          mt: 5,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <IconButton
          color="primary"
          aria-label="add to favorites"
          sx={[
            {
              color: "#646464",
              margin: "0 10px",
              height: "40px",
              float: "left",
            },
            {
              "&:hover": {
                color: "#1976d2",
              },
            },
          ]}
          onClick={() => navigate(-1)}
        >
          <ArrowBack />
        </IconButton>
        <Card sx={{ width: "80%" }}>
          <CardMedia
            component="img"
            height="400"
            image={ad ? ad.imageUrl : "/static/images/placeholder.jpg"}
            alt="ad cover"
          />
          <CardContent sx={{ minHeight: 300 }}>
            <Typography
              sx={{ fontSize: 12, fontWeight: "600", letterSpacing: 1 }}
              gutterBottom
            >
              {ad && ad.category.toUpperCase()}
            </Typography>
            <Typography
              gutterBottom
              sx={{ fontWeight: "500" }}
              variant="h4"
              component="div"
            >
              {ad && ad.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {ad && ad.description}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default AdDetails;
