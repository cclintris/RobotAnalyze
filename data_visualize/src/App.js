import React from "react";
import { Router, Route, hashHistory } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import MarketSales from "./components/templates/Marketsales";
import Transactions from "./components/templates/Transactions";
import SalesViews from "./components/templates/SalesViews";
import ConvertRatio from './components/templates/ConvertRatio';

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route exact path="/" component={Home}>
        <Route path="/marketsales" component={MarketSales}></Route>
        <Route path="/transactions" component={Transactions}></Route>
        <Route path="/salesviews" component={SalesViews}></Route>
        <Route path="/convertratio" component={ConvertRatio}></Route>
      </Route>
    </Router>
  );
};

export default App;
