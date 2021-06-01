const colors = ["#5470C6", "#EE6666"];

export const option = {
  color: colors,

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
    bottom: 50,
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
              (params.seriesData.length ? "：" + params.seriesData[0].data : "")
            );
          },
        },
      },
      data: [
        "11-25 00:00:00",
        "11-25 01:00:00",
        "11-25 02:00:00",
        "11-25 03:00:00",
        "11-25 04:00:00",
        "11-25 05:00:00",
        "11-25 06:00:00",
        "11-25 07:00:00",
        "11-25 08:00:00",
        "11-25 09:00:00",
        "11-25 10:00:00",
        "11-25 11:00:00",
        "11-25 12:00:00",
        "11-25 13:00:00",
        "11-25 14:00:00",
        "11-25 15:00:00",
        "11-25 16:00:00",
        "11-25 17:00:00",
        "11-25 18:00:00",
        "11-25 19:00:00",
        "11-25 20:00:00",
        "11-25 21:00:00",
        "11-25 22:00:00",
        "11-25 23:00:00",
        "11-26 00:00:00",
        "11-26 01:00:00",
        "11-26 02:00:00",
        "11-26 03:00:00",
        "11-26 04:00:00",
        "11-26 05:00:00",
        "11-26 06:00:00",
        "11-26 07:00:00",
        "11-26 08:00:00",
        "11-26 09:00:00",
        "11-26 10:00:00",
        "11-26 11:00:00",
        "11-26 12:00:00",
        "11-26 13:00:00",
        "11-26 14:00:00",
        "11-26 15:00:00",
        "11-26 16:00:00",
        "11-26 17:00:00",
        "11-26 18:00:00",
        "11-26 19:00:00",
        "11-26 20:00:00",
        "11-26 21:00:00",
        "11-26 22:00:00",
        "11-26 23:00:00",
        "11-27 00:00:00",
        "11-27 01:00:00",
        "11-27 02:00:00",
        "11-27 03:00:00",
        "11-27 04:00:00",
        "11-27 05:00:00",
        "11-27 06:00:00",
        "11-27 07:00:00",
        "11-27 08:00:00",
        "11-27 09:00:00",
        "11-27 10:00:00",
        "11-27 11:00:00",
        "11-27 12:00:00",
        "11-27 13:00:00",
        "11-27 14:00:00",
        "11-27 15:00:00",
        "11-27 16:00:00",
        "11-27 17:00:00",
        "11-27 18:00:00",
        "11-27 19:00:00",
        "11-27 20:00:00",
        "11-27 21:00:00",
        "11-27 22:00:00",
        "11-27 23:00:00",
        "11-28 00:00:00",
        "11-28 01:00:00",
        "11-28 02:00:00",
        "11-28 03:00:00",
        "11-28 04:00:00",
        "11-28 05:00:00",
        "11-28 06:00:00",
        "11-28 07:00:00",
        "11-28 08:00:00",
        "11-28 09:00:00",
        "11-28 10:00:00",
        "11-28 11:00:00",
        "11-28 12:00:00",
        "11-28 13:00:00",
        "11-28 14:00:00",
        "11-28 15:00:00",
        "11-28 16:00:00",
        "11-28 17:00:00",
        "11-28 18:00:00",
        "11-28 19:00:00",
        "11-28 20:00:00",
        "11-28 21:00:00",
        "11-28 22:00:00",
        "11-28 23:00:00",
        "11-29 00:00:00",
        "11-29 01:00:00",
        "11-29 02:00:00",
        "11-29 03:00:00",
        "11-29 04:00:00",
        "11-29 05:00:00",
        "11-29 06:00:00",
        "11-29 07:00:00",
        "11-29 08:00:00",
        "11-29 09:00:00",
        "11-29 10:00:00",
        "11-29 11:00:00",
        "11-29 12:00:00",
        "11-29 13:00:00",
        "11-29 14:00:00",
        "11-29 15:00:00",
        "11-29 16:00:00",
        "11-29 17:00:00",
        "11-29 18:00:00",
        "11-29 19:00:00",
        "11-29 20:00:00",
        "11-29 21:00:00",
        "11-29 22:00:00",
        "11-29 23:00:00",
        "11-30 00:00:00",
        "11-30 01:00:00",
        "11-30 02:00:00",
        "11-30 03:00:00",
        "11-30 04:00:00",
        "11-30 05:00:00",
        "11-30 06:00:00",
        "11-30 07:00:00",
        "11-30 08:00:00",
        "11-30 09:00:00",
        "11-30 10:00:00",
        "11-30 11:00:00",
        "11-30 12:00:00",
        "11-30 13:00:00",
        "11-30 14:00:00",
        "11-30 15:00:00",
        "11-30 16:00:00",
        "11-30 17:00:00",
        "11-30 18:00:00",
        "11-30 19:00:00",
        "11-30 20:00:00",
        "11-30 21:00:00",
        "11-30 22:00:00",
        "11-30 23:00:00",
        "12-01 00:00:00",
        "12-01 01:00:00",
        "12-01 02:00:00",
        "12-01 03:00:00",
        "12-01 04:00:00",
        "12-01 05:00:00",
        "12-01 06:00:00",
        "12-01 07:00:00",
        "12-01 08:00:00",
        "12-01 09:00:00",
        "12-01 10:00:00",
        "12-01 11:00:00",
        "12-01 12:00:00",
        "12-01 13:00:00",
        "12-01 14:00:00",
        "12-01 15:00:00",
        "12-01 16:00:00",
        "12-01 17:00:00",
        "12-01 18:00:00",
        "12-01 19:00:00",
        "12-01 20:00:00",
        "12-01 21:00:00",
        "12-01 22:00:00",
        "12-01 23:00:00",
        "12-02 00:00:00",
        "12-02 01:00:00",
        "12-02 02:00:00",
        "12-02 03:00:00",
        "12-02 04:00:00",
        "12-02 05:00:00",
        "12-02 06:00:00",
        "12-02 07:00:00",
        "12-02 08:00:00",
        "12-02 09:00:00",
        "12-02 10:00:00",
        "12-02 11:00:00",
        "12-02 12:00:00",
        "12-02 13:00:00",
        "12-02 14:00:00",
        "12-02 15:00:00",
        "12-02 16:00:00",
        "12-02 17:00:00",
        "12-02 18:00:00",
        "12-02 19:00:00",
        "12-02 20:00:00",
        "12-02 21:00:00",
        "12-02 22:00:00",
        "12-02 23:00:00",
        "12-03 00:00:00",
        "12-03 01:00:00",
        "12-03 02:00:00",
        "12-03 03:00:00",
        "12-03 04:00:00",
        "12-03 05:00:00",
        "12-03 06:00:00",
        "12-03 07:00:00",
        "12-03 08:00:00",
        "12-03 09:00:00",
        "12-03 10:00:00",
        "12-03 11:00:00",
        "12-03 12:00:00",
        "12-03 13:00:00",
        "12-03 14:00:00",
        "12-03 15:00:00",
        "12-03 16:00:00",
        "12-03 17:00:00",
        "12-03 18:00:00",
        "12-03 19:00:00",
        "12-03 20:00:00",
        "12-03 21:00:00",
        "12-03 22:00:00",
        "12-03 23:00:00",
      ],
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
              (params.seriesData.length ? "：" + params.seriesData[0].data : "")
            );
          },
        },
      },
      data: [
        "11-25 00:00:00",
        "11-25 01:00:00",
        "11-25 02:00:00",
        "11-25 03:00:00",
        "11-25 04:00:00",
        "11-25 05:00:00",
        "11-25 06:00:00",
        "11-25 07:00:00",
        "11-25 08:00:00",
        "11-25 09:00:00",
        "11-25 10:00:00",
        "11-25 11:00:00",
        "11-25 12:00:00",
        "11-25 13:00:00",
        "11-25 14:00:00",
        "11-25 15:00:00",
        "11-25 16:00:00",
        "11-25 17:00:00",
        "11-25 18:00:00",
        "11-25 19:00:00",
        "11-25 20:00:00",
        "11-25 21:00:00",
        "11-25 22:00:00",
        "11-25 23:00:00",
        "11-26 00:00:00",
        "11-26 01:00:00",
        "11-26 02:00:00",
        "11-26 03:00:00",
        "11-26 04:00:00",
        "11-26 05:00:00",
        "11-26 06:00:00",
        "11-26 07:00:00",
        "11-26 08:00:00",
        "11-26 09:00:00",
        "11-26 10:00:00",
        "11-26 11:00:00",
        "11-26 12:00:00",
        "11-26 13:00:00",
        "11-26 14:00:00",
        "11-26 15:00:00",
        "11-26 16:00:00",
        "11-26 17:00:00",
        "11-26 18:00:00",
        "11-26 19:00:00",
        "11-26 20:00:00",
        "11-26 21:00:00",
        "11-26 22:00:00",
        "11-26 23:00:00",
        "11-27 00:00:00",
        "11-27 01:00:00",
        "11-27 02:00:00",
        "11-27 03:00:00",
        "11-27 04:00:00",
        "11-27 05:00:00",
        "11-27 06:00:00",
        "11-27 07:00:00",
        "11-27 08:00:00",
        "11-27 09:00:00",
        "11-27 10:00:00",
        "11-27 11:00:00",
        "11-27 12:00:00",
        "11-27 13:00:00",
        "11-27 14:00:00",
        "11-27 15:00:00",
        "11-27 16:00:00",
        "11-27 17:00:00",
        "11-27 18:00:00",
        "11-27 19:00:00",
        "11-27 20:00:00",
        "11-27 21:00:00",
        "11-27 22:00:00",
        "11-27 23:00:00",
        "11-28 00:00:00",
        "11-28 01:00:00",
        "11-28 02:00:00",
        "11-28 03:00:00",
        "11-28 04:00:00",
        "11-28 05:00:00",
        "11-28 06:00:00",
        "11-28 07:00:00",
        "11-28 08:00:00",
        "11-28 09:00:00",
        "11-28 10:00:00",
        "11-28 11:00:00",
        "11-28 12:00:00",
        "11-28 13:00:00",
        "11-28 14:00:00",
        "11-28 15:00:00",
        "11-28 16:00:00",
        "11-28 17:00:00",
        "11-28 18:00:00",
        "11-28 19:00:00",
        "11-28 20:00:00",
        "11-28 21:00:00",
        "11-28 22:00:00",
        "11-28 23:00:00",
        "11-29 00:00:00",
        "11-29 01:00:00",
        "11-29 02:00:00",
        "11-29 03:00:00",
        "11-29 04:00:00",
        "11-29 05:00:00",
        "11-29 06:00:00",
        "11-29 07:00:00",
        "11-29 08:00:00",
        "11-29 09:00:00",
        "11-29 10:00:00",
        "11-29 11:00:00",
        "11-29 12:00:00",
        "11-29 13:00:00",
        "11-29 14:00:00",
        "11-29 15:00:00",
        "11-29 16:00:00",
        "11-29 17:00:00",
        "11-29 18:00:00",
        "11-29 19:00:00",
        "11-29 20:00:00",
        "11-29 21:00:00",
        "11-29 22:00:00",
        "11-29 23:00:00",
        "11-30 00:00:00",
        "11-30 01:00:00",
        "11-30 02:00:00",
        "11-30 03:00:00",
        "11-30 04:00:00",
        "11-30 05:00:00",
        "11-30 06:00:00",
        "11-30 07:00:00",
        "11-30 08:00:00",
        "11-30 09:00:00",
        "11-30 10:00:00",
        "11-30 11:00:00",
        "11-30 12:00:00",
        "11-30 13:00:00",
        "11-30 14:00:00",
        "11-30 15:00:00",
        "11-30 16:00:00",
        "11-30 17:00:00",
        "11-30 18:00:00",
        "11-30 19:00:00",
        "11-30 20:00:00",
        "11-30 21:00:00",
        "11-30 22:00:00",
        "11-30 23:00:00",
        "12-01 00:00:00",
        "12-01 01:00:00",
        "12-01 02:00:00",
        "12-01 03:00:00",
        "12-01 04:00:00",
        "12-01 05:00:00",
        "12-01 06:00:00",
        "12-01 07:00:00",
        "12-01 08:00:00",
        "12-01 09:00:00",
        "12-01 10:00:00",
        "12-01 11:00:00",
        "12-01 12:00:00",
        "12-01 13:00:00",
        "12-01 14:00:00",
        "12-01 15:00:00",
        "12-01 16:00:00",
        "12-01 17:00:00",
        "12-01 18:00:00",
        "12-01 19:00:00",
        "12-01 20:00:00",
        "12-01 21:00:00",
        "12-01 22:00:00",
        "12-01 23:00:00",
        "12-02 00:00:00",
        "12-02 01:00:00",
        "12-02 02:00:00",
        "12-02 03:00:00",
        "12-02 04:00:00",
        "12-02 05:00:00",
        "12-02 06:00:00",
        "12-02 07:00:00",
        "12-02 08:00:00",
        "12-02 09:00:00",
        "12-02 10:00:00",
        "12-02 11:00:00",
        "12-02 12:00:00",
        "12-02 13:00:00",
        "12-02 14:00:00",
        "12-02 15:00:00",
        "12-02 16:00:00",
        "12-02 17:00:00",
        "12-02 18:00:00",
        "12-02 19:00:00",
        "12-02 20:00:00",
        "12-02 21:00:00",
        "12-02 22:00:00",
        "12-02 23:00:00",
        "12-03 00:00:00",
        "12-03 01:00:00",
        "12-03 02:00:00",
        "12-03 03:00:00",
        "12-03 04:00:00",
        "12-03 05:00:00",
        "12-03 06:00:00",
        "12-03 07:00:00",
        "12-03 08:00:00",
        "12-03 09:00:00",
        "12-03 10:00:00",
        "12-03 11:00:00",
        "12-03 12:00:00",
        "12-03 13:00:00",
        "12-03 14:00:00",
        "12-03 15:00:00",
        "12-03 16:00:00",
        "12-03 17:00:00",
        "12-03 18:00:00",
        "12-03 19:00:00",
        "12-03 20:00:00",
        "12-03 21:00:00",
        "12-03 22:00:00",
        "12-03 23:00:00",
      ],
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
      xAxisIndex: 1,
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: [
        5954, 7153, 6085, 5788, 5567, 5620, 6692, 8418, 11264, 14058, 17239,
        17123, 16301, 16959, 17339, 17030, 16230, 15002, 14441, 16241, 18328,
        19252, 18752, 14652, 10340, 7705, 6195, 5922, 5723, 5540, 6299, 8500,
        11538, 14431, 16921, 17052, 16843, 17192, 17259, 17429, 17028, 15586,
        14910, 16789, 19004, 20279, 19268, 15294, 16746, 7641, 6067, 5998, 5908,
        6008, 7112, 9531, 12155, 15928, 19319, 18299, 18228, 19123, 18305,
        18201, 17182, 15649, 15073, 17414, 19231, 20487, 19881, 15527, 10269,
        7277, 6296, 5521, 5484, 5601, 7044, 8641, 12013, 15789, 18852, 17460,
        17695, 18203, 17477, 18199, 16862, 15071, 14475, 16786, 19711, 20117,
        19863, 15095, 10043, 7369, 5973, 5934, 5761, 5852, 6703, 8925, 12547,
        15733, 18844, 18493, 18083, 18780, 18372, 18895, 17857, 15771, 15146,
        17838, 19464, 21207, 20303, 16294, 10251, 6982, 6068, 5764, 5142, 5806,
        6924, 8775, 12148, 15742, 20153, 18214, 18173, 18718, 18419, 18368,
        17451, 15791, 15278, 17518, 19595, 20640, 20174, 15765, 10241, 7234,
        5977, 5896, 5477, 5586, 7049, 8695, 11569, 15097, 18652, 17268, 17777,
        17874, 17681, 17658, 17008, 15171, 14917, 16536, 18299, 19547, 19009,
        15477, 11317, 8062, 6403, 5761, 5430, 5969, 7220, 9579, 12414, 16661,
        20789, 20417, 20051, 20516, 20317, 20684, 19873, 18312, 17967, 20087,
        22306, 23558, 22861, 18604, 12874, 8044, 6217, 6022, 5702, 5834, 6648,
        9443, 12866, 16147, 21873, 20845, 19539, 20314, 20848, 20460, 20226,
        18625, 17473, 19429, 21583, 23544, 21935, 16911,
      ],
    },
    {
      name: "浏览量",
      type: "line",
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: [
        5954, 7153, 6085, 5788, 5567, 5620, 6692, 8418, 11264, 14058, 17239,
        17123, 16301, 16959, 17339, 17030, 16230, 15002, 14441, 16241, 18328,
        19252, 18752, 14652, 10340, 7705, 6195, 5922, 5723, 5540, 6299, 8500,
        11538, 14431, 16921, 17052, 16843, 17192, 17259, 17429, 17028, 15586,
        14910, 16789, 19004, 20279, 19268, 15294, 16746, 7641, 6067, 5998, 5908,
        6008, 7112, 9531, 12155, 15928, 19319, 18299, 18228, 19123, 18305,
        18201, 17182, 15649, 15073, 17414, 19231, 20487, 19881, 15527, 10269,
        7277, 6296, 5521, 5484, 5601, 7044, 8641, 12013, 15789, 18852, 17460,
        17695, 18203, 17477, 18199, 16862, 15071, 14475, 16786, 19711, 20117,
        19863, 15095, 10043, 7369, 5973, 5934, 5761, 5852, 6703, 8925, 12547,
        15733, 18844, 18493, 18083, 18780, 18372, 18895, 17857, 15771, 15146,
        17838, 19464, 21207, 20303, 16294, 10251, 6982, 6068, 5764, 5142, 5806,
        6924, 8775, 12148, 15742, 20153, 18214, 18173, 18718, 18419, 18368,
        17451, 15791, 15278, 17518, 19595, 20640, 20174, 15765, 10241, 7234,
        5977, 5896, 5477, 5586, 7049, 8695, 11569, 15097, 18652, 17268, 17777,
        17874, 17681, 17658, 17008, 15171, 14917, 16536, 18299, 19547, 19009,
        15477, 11317, 8062, 6403, 5761, 5430, 5969, 7220, 9579, 12414, 16661,
        20789, 20417, 20051, 20516, 20317, 20684, 19873, 18312, 17967, 20087,
        22306, 23558, 22861, 18604, 12874, 8044, 6217, 6022, 5702, 5834, 6648,
        9443, 12866, 16147, 21873, 20845, 19539, 20314, 20848, 20460, 20226,
        18625, 17473, 19429, 21583, 23544, 21935, 16911,
      ],
    },
  ],
};
