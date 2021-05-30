import React, { useEffect } from "react";
import "../styles/SalesViews.css";
import * as echarts from "echarts";
import { option } from "../../static/SalesViews";
import { useSelector } from "react-redux";

const SalesViews = () => {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    const salesViewsId = document.getElementById("salesviews");
    if (salesViewsId === null) return;
    echarts.dispose(salesViewsId);
    const chart = echarts.init(salesViewsId, theme);
    chart.setOption(option);
  });
  return <div className="salesviews" id="salesviews"></div>;
};

export default SalesViews;
