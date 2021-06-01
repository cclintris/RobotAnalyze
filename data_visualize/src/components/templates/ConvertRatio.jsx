import React, { useEffect } from "react";
import "../styles/ConvertRatio.css";
import * as echarts from "echarts";
import { option } from "../../static/ConvertRatio";
import { useSelector } from "react-redux";

const ConvertRatio = () => {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    const convertRatioId = document.getElementById("convertRatio");
    if (convertRatioId === null) return;
    echarts.dispose(convertRatioId);
    const chart = echarts.init(convertRatioId, theme);
    chart.setOption(option);
  });
  return <div className="convertRatio" id="convertRatio"></div>;
};

export default ConvertRatio;
