import {
  BEFORE_PAGE,
  CHANGE_PAGE,
  GET_PRODUCTS_BY_KEYWORD,
  MAYOR,
  MENOR,
  NUEVO,
  RESET,
  USADO,
} from "../Actions/Actions";

const initialState = {
  getProductsByKeyword: [],
  pages: 1,
  keyword: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_BY_KEYWORD:
      return {
        ...state,
        getProductsByKeyword: action.payload,
        keyword: action.keyword,
      };
    case MAYOR:
      return {
        ...state,
        getProductsByKeyword: [...state.getProductsByKeyword].sort((a, b) => {
          return b.price - a.price;
        }),
      };
    case MENOR:
      return {
        ...state,
        getProductsByKeyword: [...state.getProductsByKeyword].sort((a, b) => {
          return a.price - b.price;
        }),
      };
    case USADO:
      return {
        ...state,
        getProductsByKeyword:
          [...state.getProductsByKeyword].filter(
            (obj) => obj.condition === action.payload
          ).length > 0
            ? [...state.getProductsByKeyword].filter(
                (obj) => obj.condition === action.payload
              )
            : null,
      };
    case NUEVO:
      return {
        ...state,
        getProductsByKeyword:
          [...state.getProductsByKeyword].filter(
            (obj) => obj.condition === action.payload
          ).length > 0
            ? [...state.getProductsByKeyword].filter(
                (obj) => obj.condition === action.payload
              )
            : null,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        pages: state.pages + 1,
      };
    case BEFORE_PAGE:
      return {
        ...state,
        pages: state.pages - 1,
      };
    case RESET:
      return {
        ...state,
        keyword: "",
      };
    default:
      return state;
  }
}

export default reducer;
