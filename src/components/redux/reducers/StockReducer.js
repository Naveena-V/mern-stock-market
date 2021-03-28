const initialStock = {
  stocks: [],
};

const stockReducer = (state = initialStock, action) => {
  switch (action.type) {
    case "SET_STOCKS":
      return {
        ...state,
        stocks: action.payload,
      };
    case "REMOVE_STOCK":
      return {
        ...state,
        stocks: state.stocks.filter((stock) => stock._id !== action.payload),
      };
    default:
      return state;
  }
};

export default stockReducer;
