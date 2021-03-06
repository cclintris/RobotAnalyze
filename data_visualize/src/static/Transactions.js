import { time, transactAmount } from "./utils/data";

export const option = {
  xAxis: {
    type: "category",
    data: time,
    name: "时间(2017年)",
  },
  yAxis: {
    type: "value",
    name: "交易量(次)",
  },
  series: [
    {
      data: transactAmount,
      type: "line",
    },
  ],
  tooltip: {
    trigger: "axis",
    formatter: function (params) {
      return "时间: " + params[0].name + "<br>" + "交易量: " + params[0].data;
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
