import React, { useEffect } from "react";
import "../styles/Transactions.css";
import * as echarts from "echarts";
import { option } from "../../static/Transactions";
import { useSelector } from "react-redux";

const Transactions = () => {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    const transactionId = document.getElementById("transaction");
    if (transactionId === null) return;
    echarts.dispose(transactionId);
    const chart = echarts.init(transactionId, theme);
    chart.setOption(option);
  });
  return <div className="transaction" id="transaction"></div>;
};

export default Transactions;
