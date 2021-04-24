const plugins = require(`./modules/plugins.js`).plaginsObject;
const util = require(`./modules/util.js`).util;
const tasks = require(`./modules/tasks.js`).tasksObject;


// const defaultArray = [`cleanImg`, `makeImagesSvg`, `makeImages`, `createSprite`, `getStyleFile`, `getScriptFile`, `browsersync`];
const defaultArray = [`getWatchers`, `browsersync`];

const buildArray = [`clean`, `copying`]

exports.default = plugins.gulp.series(util.getTasks(defaultArray, tasks));
exports.build = plugins.gulp.series(util.getTasks(buildArray, tasks))
