import { time, transactAmount, browseAmount } from "./utils/data";
import { convertCal } from "./utils/func";

const data = convertCal(transactAmount, browseAmount);
const color = ["#32CD32"];

export const option = {
  color: color,
  xAxis: {
    type: "category",
    data: time,
    name: "时间(2017年)",
  },
  yAxis: {
    type: "value",
    name: "转化率",
  },
  series: [
    {
      data: data,
      type: "line",
    },
  ],
  tooltip: {
    trigger: "axis",
    formatter: function (params) {
      return (
        "时间: " +
        params[0].name +
        "<br>" +
        "转化率: " +
        params[0].data +
        " (浏览/销量)"
      );
    },
    textStyle: {
      align: "left",
    },
  },
  toolbox: {
    right: "35",
    top: "10",
    feature: {
      saveAsImage: {},
    },
  },
};
