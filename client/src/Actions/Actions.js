import axios from "axios";
export const GET_PRODUCTS_BY_KEYWORD = "GET_PRODUCTS_BY_KEYWORD";
export const NUEVO = "NUEVO";
export const USADO = "USADO";
export const MAYOR = "MAYOR";
export const MENOR = "MENOR";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const BEFORE_PAGE = "BEFORE_PAGE";
export const RESET = "RESET";

export function getProductsByKeyword(keyword) {
  return (dispatch) => {
    axios
      .get(`https://c49c14a3c41f.ngrok.io/api/search?q=${keyword}`)
      .then((response) => {
        dispatch({
          type: "GET_PRODUCTS_BY_KEYWORD",
          payload: response.data,
          keyword: keyword,
        });
      });
  };
}

export const mayor = () => {
  return {
    type: "MAYOR",
  };
};

export const menor = () => {
  return {
    type: "MENOR",
  };
};

export const nuevo = (payload) => {
  return {
    type: "NUEVO",
    payload,
  };
};

export const usado = (payload) => {
  return {
    type: "USADO",
    payload,
  };
};

export const changePage = () => {
  return {
    type: "CHANGE_PAGE",
  };
};

export const beforePage = () => {
  return {
    type: "BEFORE_PAGE",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
