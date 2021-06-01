export const multiply = (arr, times) => {
  return arr.map((item) => item * times);
};

export const convertCal = (arr1, arr2) => {
  const res = [];
  const len = arr1.length;
  for (let i = 0; i < len; i++) {
    res.push(arr2[i] / arr1[i]);
  }
  return res;
};
