
const browsersync = require(`${__dirname}/browsersync.js`).browsersync;
const getScriptFile = require(`${__dirname}/scripts.js`).getScriptFile;
const getStyleFile = require(`${__dirname}/styles.js`).getStyleFile;
const makeImages = require(`${__dirname}/images.js`).makeImages;
const makeImagesSvg = require(`${__dirname}/images-svg.js`).makeImagesSvg;
const cleanImg = require(`${__dirname}/clean.js`).cleanImg;
const createSprite = require(`${__dirname}/sprite.js`).createSprite;

module.exports.tasksObject = {
  browsersync,
  getScriptFile,
  getStyleFile,
  makeImages,
  makeImagesSvg,
  cleanImg,
  createSprite
}

