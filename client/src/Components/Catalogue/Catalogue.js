import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paginas from "../Paginas/Paginas";
import Filter from "../Filter/Filter";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  catalogue: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gap: "50px",
    justifyContent: "space-around",
    alignContent: "space-around",
    gridColumnStart: "2",
    gridColumnEnd: "6",
    gridRowStart: "2",
    gridRowEnd: "3",
  },
  containerall: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
    gridTemplateRows: "auto auto",
    gap: "20px",
    margin: "20px",
  },
  pagination: {
    gridRowStart: "1",
    gridRowEnd: "2",
    gridColumnStart: "5",
    gridColumnEnd: "6",
  },
  filter: {
    gridRowStart: "2",
    gridRowEnd: "3",
    gridColumnStart: "1",
    gridColumnEnd: "2",
  },
  alert: {
    width: "400px",
    textAlign: "center",
    fontSize: "20px",
    backgroundColor: "#fff59d",
    color: "#757575",
    marginTop: "50px",
  },
  alertC: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "50px",
    gridColumnStart: "2",
    gridColumnEnd: "6",
    gridRowStart: "2",
    gridRowEnd: "3",
  },
}));

function Catalogue({ products }) {
  const pages = useSelector((store) => store.pages);
  const classes = useStyles();
  const lastIndex = pages * 30 > products.length ? products.length : pages * 30;
  const firstIndex = lastIndex < 30 ? 30 - lastIndex : lastIndex - 30;

  return products?.length === 1 ? (
    <div className={classes.containerall}>
      <div className={classes.filter}>
        <Filter />
      </div>
      <div className={classes.alertC}>
        <Alert severity="info" className={classes.alert}>
          {products[0].title}
        </Alert>
      </div>
    </div>
  ) : (
    <div className={classes.containerall}>
      <div className={classes.pagination}>
        <Paginas />
      </div>
      <div className={classes.filter}>
        {products?.length > 1 ? <Filter /> : null}
      </div>
      <div className={classes.catalogue}>
        {products?.slice(firstIndex, lastIndex).map((product) => (
          <div key={product.id} className={classes.product}>
            <ProductCard props={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
