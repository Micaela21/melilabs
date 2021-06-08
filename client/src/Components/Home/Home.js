import React from "react";
import Catalogue from "../Catalogue/Catalogue";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  presentation: {
    height: "500px",
    width: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "flex-end",
    margin: "100px auto auto auto",
    paddingRight: "10px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage:
      "url(https://image.freepik.com/foto-gratis/retrato-joven-sonriente-creativa-gafas-sol-hermosa-nina-sentada-piso-cerca-pared-gris_158538-1341.jpg)",
  },
  font: {
    fontFamily: "sans-serif",
    fontSize: "25px",
    color: "black",
    textAlign: "right",
  },
}));

export default function Home() {
  const classes = useStyles();
  const products = useSelector((store) => store.getProductsByKeyword);
  const keyword = useSelector((store) => store.keyword);

  return (
    <div>
      {keyword === "" ? (
        <div className={classes.presentation}>
          <h3 className={classes.font}>Haz tu busqueda !</h3>
          <SearchBar />
        </div>
      ) : (
        <>
          <NavBar />
          <Catalogue products={products} />
        </>
      )}
    </div>
  );
}
