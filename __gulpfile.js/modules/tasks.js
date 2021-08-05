
const browsersync = require(`${__dirname}/browsersync.js`).browsersync;
const getScriptFile = require(`${__dirname}/scripts.js`).getScriptFile;
const getStyleFile = require(`${__dirname}/styles.js`).getStyleFile;
const makeImages = require(`${__dirname}/images.js`).makeImages;
const makeImagesSvg = require(`${__dirname}/images-svg.js`).makeImagesSvg;
const cleanImg = require(`${__dirname}/clean.js`).cleanImg;
const clean = require(`${__dirname}/clean.js`).clean;
const createSprite = require(`${__dirname}/sprite.js`).createSprite;
const copying = require(`${__dirname}/copying.js`).getCopying;
const makeWebp = require(`${__dirname}/images-webp.js`).makeWebp;
const transformPug = require(`${__dirname}/pug.js`).transformPug;
const htmlPrettify = require(`${__dirname}/prettify.js`).htmlPrettify;
const getWatchers = require(`${__dirname}/watch.js`).getWatchers;

module.exports.tasksObject = {
  browsersync,
  getScriptFile,
  getStyleFile,
  makeImages,
  makeImagesSvg,
  cleanImg,
  clean,
  createSprite,
  copying,
  makeWebp,
  transformPug,
  htmlPrettify,
  getWatchers
}
