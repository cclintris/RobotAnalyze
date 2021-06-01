import * as echarts from "echarts";
import { topHot } from "./utils/data";

export const option = {
  dataset: [
    {
      dimensions: ["itemId", "sales"],
      source: topHot,
    },
    {
      transform: {
        type: "sort",
        config: { dimension: "sales", order: "desc" },
      },
    },
  ],
  xAxis: {
    type: "category",
    axisLabel: { interval: 0 },
    name: "产品Id",
  },
  yAxis: {
    name: "产品销量(份)",
  },
  series: {
    type: "bar",
    encode: { x: "itemId", y: "sales" },
    datasetIndex: 1,
    showBackground: true,
    // backgroundStyle: {
    //   color: "rgba(180, 180, 180, 0.2)",
    // },
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#83bff6" },
        { offset: 0.5, color: "#188df0" },
        { offset: 1, color: "#188df0" },
      ]),
    },
  },
  tooltip: {
    trigger: "axis",
    formatter: function (params) {
      return (
        "itemId: " +
        params[0].data[0] +
        "<br>" +
        "产品销量: " +
        params[0].data[1]
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
