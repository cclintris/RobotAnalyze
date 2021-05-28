import React, { useEffect } from "react";
import "../styles/Transactions.css";
import * as echarts from "echarts";
import { option } from "../../static/Transactions";

const Transactions = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("transaction"), "");
    chart.setOption(option);
  });
  return <div className="transaction" id="transaction"></div>;
};

export default Transactions;
