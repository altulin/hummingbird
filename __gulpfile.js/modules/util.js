module.exports.getPlugunsList = (array, arrayUsed) => {
  return arrayUsed.map((item) => {
    return array.get(item);
  });
};
