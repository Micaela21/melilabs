import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, CardMedia } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px black",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#d8d8d8",
  },
  divider: {
    margin: 3,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    fontSize: "15px",
  },
  title: {
    textDecoration: "none",
    "&:link": {
      color: "gray",
    },
    "&:visited": {
      color: "gray",
    },
    "&:hover": {
      color: "black",
    },
  },
}));

function ProductCard({ props }) {
  const classes = useStyles({ color: "#fff59d" });

  return (
    <div className='product'>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={props.thumbnail} />
        <CardContent className={classes.content}>
          <Typography className={classes.heading} variant={"h6"} gutterBottom>
            <a href={props.permalink} className={classes.title}>
              {props.title.toUpperCase().slice(0, 18)}...
            </a>
          </Typography>
          <Typography className={classes.subheading} variant={"caption"}>
            $ {props.price}
          </Typography>
          <Typography className={classes.subheading} variant={"caption"}>
            Stock: {props.available_quantity} u
          </Typography>
          <Typography className={classes.subheading} variant={"caption"}>
            Condition: {props.condition === "new" ? "Nuevo" : "Usado"}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
