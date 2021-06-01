import * as echarts from "echarts";

export const option = {
  dataset: [
    {
      dimensions: ["itemId", "sales"],
      source: [
        ["5000010", "75498"],
        ["5000007", "74388"],
        ["5000006", "75338"],
        ["5000004", "74244"],
        ["5000008", "74211"],
        ["5000005", "74112"],
        ["5000003", "73970"],
        ["5000009", "73966"],
        ["5000002", "73848"],
        ["5000001", "73777"],
        ["3122135", "1428"],
        ["3031354", "1024"],
        ["2964774", "687"],
        ["2560262", "683"],
        ["3964583", "675"],
        ["740947", "587"],
        ["4443059", "552"],
        ["1910706", "548"],
        ["705557", "548"],
        ["1168232", "522"],
      ],
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
