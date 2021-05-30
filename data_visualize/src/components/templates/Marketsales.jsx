import React, { useEffect } from "react";
import "../styles/MarketSales.css";
import * as echarts from "echarts";
import { option } from "../../static/Marketsales";
import { useSelector } from "react-redux";

const Marketsales = () => {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    const marketSalesId = document.getElementById("marketsales");
    if (marketSalesId === null) return;
    echarts.dispose(marketSalesId);
    const chart = echarts.init(marketSalesId, theme);
    chart.setOption(option);
  });
  return <div className="marketsales" id="marketsales"></div>;
};

export default Marketsales;
