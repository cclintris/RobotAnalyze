import { time, transactAmount, browseAmount } from "./utils/data";
import { multiply } from "./utils/func";
// import { multiply } from "./utils/func";

const colors = ["#5470C6", "#EE6666"];

export const option = {
  color: colors,
  toolbox: {
    right: "35",
    top: "10",
    feature: {
      saveAsImage: {},
    },
  },
  tooltip: {
    trigger: "none",
    axisPointer: {
      type: "cross",
    },
  },
  legend: {
    data: ["交易量", "浏览量"],
  },
  grid: {
    top: 70,
    bottom: 40,
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[0],
        },
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              "交易量" +
              (params.seriesData.length
                ? "：" + params.seriesData[0].data
                : "") +
              " (0.1次)"
            );
          },
        },
      },
      data: time,
    },
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1],
        },
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              "浏览量" +
              (params.seriesData.length
                ? "：" + params.seriesData[0].data
                : "") +
              " (次)"
            );
          },
        },
      },
      data: time,
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "交易量",
      type: "line",
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: multiply(transactAmount, 10),
    },
    {
      name: "浏览量",
      xAxisIndex: 1,
      type: "line",
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: browseAmount,
    },
  ],
};
