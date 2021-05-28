import React, { useEffect } from "react";
import "../styles/MarketSales.css";
import * as echarts from "echarts";
import { option } from "../../static/Marketsales";

const Marketsales = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("marketsales"), "");
    chart.setOption(option);
  });
  return <div className="marketsales" id="marketsales"></div>;
};

export default Marketsales;
