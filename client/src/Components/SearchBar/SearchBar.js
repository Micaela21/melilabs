import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { getProductsByKeyword } from "../../Actions/Actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function SearchBar() {
  const classes = useStyles();
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getProductsByKeyword(keyword));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSearch} name='form'>
      <InputBase
        className={classes.input}
        placeholder="ej. zapatilla, computadoras, etc"
        inputProps={"aria-label"}
        value={keyword}
        onChange={handleChange}
        name='search'
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        name='button'
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
