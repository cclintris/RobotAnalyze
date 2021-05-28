import React, { useEffect } from "react";
import "../styles/SalesViews.css";
import * as echarts from "echarts";
import { option } from "../../static/SalesViews";

const SalesViews = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("salesviews"), "");
    chart.setOption(option);
  });
  return <div className="salesviews" id="salesviews"></div>;
};

export default SalesViews;
