import axios from "axios";
export const getStocks = (stocks) => {
  return {
    type: "SET_STOCKS",
    payload: stocks,
  };
};

export const fetchStocks = () => {
  return function (dispatch) {
    axios
      .get("https://stock-app-deploy.herokuapp.com/api/stocks/list")
      .then((response) => {
        const stock = response.data;
        console.log(stock);
        dispatch(getStocks(stock));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const sendStocks = (stock) => {
  return function (dispatch) {
    axios
      .post("https://stock-app-deploy.herokuapp.com/api/stocks", stock)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const removeStock = (id) => {
  return {
    type: "REMOVE_STOCK",
    payload: id,
  };
};

export const startRemoveStock = (id) => {
  return function (dispatch) {
    axios
      .delete(`https://stock-app-deploy.herokuapp.com/api/stocks/${id}`)
      .then((response) => {
        const id = response.data._id;
        dispatch(removeStock(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
