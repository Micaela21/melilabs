import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Filter from "../Filter/Filter";
import Alert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";

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
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(30);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const pages = products?.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (event, value) => setCurrentPage(value);

  return products?.length === 0 ? (
    <div className={classes.containerall}>
      <div className={classes.filter}>
        <Filter />
      </div>
      <div className={classes.alertC}>
        <Alert severity="info" className={classes.alert}>
          No hay productos
        </Alert>
      </div>
    </div>
  ) : (
    <div className={classes.containerall}>
      <div className={classes.pagination}>
        <Pagination
          size="large"
          variant="outlined"
          shape="rounded"
          count={Math.ceil(products?.length / cardsPerPage)}
          onChange={paginate}
        />
      </div>
      <div className={classes.filter}>
        <Filter />
      </div>
      <div className={classes.catalogue}>
        {pages && pages.map((product) => (
          <div key={product.id} className={classes.product}>
            <ProductCard props={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
