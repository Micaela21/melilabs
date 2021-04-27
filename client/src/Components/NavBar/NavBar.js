import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { reset } from "../../Actions/Actions";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "#757575",
    borderRadius: "5px",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#fff59d",
    fontFamily: "sans-serif",
    fontWeight: 500,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toHome = () => {
    dispatch(reset());
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.grow}>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            onClick={toHome}
          >
            Henry Search
          </Typography>
          <div className={classes.search}>
            <SearchBar />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
