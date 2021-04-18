const variablesPath = require(`${__dirname}/variables.js`);
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const del = pluginsPath.del;

const path = variablesPath.path;
// console.log(path.srcImages)

module.exports.clean = () => {
  return del(path.distFolder, { force: true }); // Удаляем всю папку продакшн
};

module.exports.cleanImg = () => {
  return del(path.src.srcImages, { force: true }); // Удаляем всё содержимое папки "img/"
};
