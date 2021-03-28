import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchStocks, startRemoveStock } from "../actions/Stockaction";
import stockReducer from "../reducers/StockReducer";

const store = createStore(stockReducer, applyMiddleware(thunk));

console.log("Initial state", store.getState());
store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchStocks());
store.dispatch(startRemoveStock());

export default store;
