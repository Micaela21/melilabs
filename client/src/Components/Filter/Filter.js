import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByKeyword,
  mayor,
  menor,
  nuevo,
  usado,
} from "../../Actions/Actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    margin: "5px",
    borderRadius: "10px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#757575",
    borderRadius: "5px",
  },
  button: {
    margin: "1px",
    fontFamily: "sans-serif",
    fontSize: "medium",
    color: "#fff59d",
    width: "maxContent",
    height: "80px",
    border: "none",
    borderRadius: "1px",
    backgroundColor: "#757575",
    "&:hover": {
      backgroundColor: "#fff59d",
      color: "#757575",
    },
  },
}));

function Filter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const keyword = useSelector((store) => store.keyword);

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "mayor":
        dispatch(mayor());
        break;
      case "menor":
        dispatch(menor());
        break;
      case "usado":
        dispatch(usado("used"));
        break;
      case "nuevo":
        dispatch(nuevo("new"));
        break;
      case "none":
        dispatch(getProductsByKeyword(keyword));
        break;
      default:
        return null;
    }
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <button
          onClick={(e) => handleSubmit(e)}
          name="none"
          className={classes.button}
        >
          Sin Filtro
        </button>
        <button
          onClick={(e) => handleSubmit(e)}
          name="mayor"
          className={classes.button}
        >
          De mayor a menor
        </button>
        <button
          onClick={(e) => handleSubmit(e)}
          name="menor"
          className={classes.button}
        >
          De menor a mayor
        </button>
        <button
          onClick={(e) => handleSubmit(e)}
          name="usado"
          className={classes.button}
        >
          Producto Usado
        </button>
        <button
          onClick={(e) => handleSubmit(e)}
          name="nuevo"
          className={classes.button}
        >
          Producto Nuevo
        </button>
      </Paper>
    </div>
  );
}

export default Filter;
