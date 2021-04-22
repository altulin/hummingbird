const getPlugunsList = (array, arrayUsed) => {
  return arrayUsed.map((item) => {
    return array.get(item);
  });
};

const getTasks = (array, tasks) => {
  return array.map((item) => {
    Object.assign(tasks[item], { displayName: item });
    return tasks[item];
  })
};


module.exports.util = {
  getPlugunsList,
  getTasks
}