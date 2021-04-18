const plugins = require(`./modules/plugins.js`).plaginsObject
const browsersync = require(`./modules/browsersync.js`).browsersync


exports.default = plugins.gulp.parallel(browsersync)
