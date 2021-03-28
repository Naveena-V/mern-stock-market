import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./components/redux/store/configureStore";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import View from "./components/View";
import AllStcoks from "./components/AllStcoks";
// import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/view/:id" component={View} />
            <Route path="/allstock/view" component={AllStcoks} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
