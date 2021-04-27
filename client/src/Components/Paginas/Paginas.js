import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { beforePage, changePage } from "../../Actions/Actions";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#757575",
    borderRadius: "5px",
  },
  button: {
    fontFamily: "sans-serif",
    fontSize: "medium",
    color: "#fff59d",
    width: "150px",
    height: "50px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#757575",
    "&:hover": {
      backgroundColor: "#fff59d",
      color: "#757575",
    },
  },
}));

function Paginas() {
  const classes = useStyles();
  const pages = useSelector((store) => store.pages);
  const products = useSelector((store) => store.getProductsByKeyword);
  const [numOfPages, setNumOfPages] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products) {
      setNumOfPages(Math.ceil(products.length / 30));
    }
  }, [products]);

  const handleClickSig = () => {
    dispatch(changePage());
  };

  const handleClickAnt = () => {
    dispatch(beforePage());
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        {pages > 1 ? (
          <button onClick={handleClickAnt} className={classes.button}>
            <KeyboardArrowLeft />
            <KeyboardArrowLeft />
          </button>
        ) : null}
        {pages < numOfPages ? (
          <button onClick={handleClickSig} className={classes.button}>
            <KeyboardArrowRight />
            <KeyboardArrowRight />
          </button>
        ) : null}
      </Paper>
    </div>
  );
}

export default Paginas;
