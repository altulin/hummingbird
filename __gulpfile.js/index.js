const plugins = require(`./modules/plugins.js`).plaginsObject;

const browsersync = require(`./modules/browsersync.js`).browsersync;
const getScriptFile = require(`./modules/scripts.js`).getScriptFile;
const getStyleFile = require(`./modules/styles.js`).getStyleFile;
const makeImages = require(`./modules/images.js`).makeImages;
const makeImagesSvg = require(`./modules/images-svg.js`).makeImagesSvg;
const cleanImg = require(`./modules/clean.js`).cleanImg;
const createSprite = require(`./modules/sprite.js`).createSprite;


exports.default = plugins.gulp.parallel(cleanImg, makeImagesSvg, makeImages, createSprite, getStyleFile, getScriptFile, browsersync);
exports.build = plugins.gulp.series(cleanImg)
