const path = require(`${__dirname}/variables.js`).path.src;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const newer = pluginsPath.newer;
const webp = pluginsPath.webp;


module.exports.createWebp = () => {
  return src(path.srcWebpImg)
    .pipe(newer(path.srcWebpImgFolder))
    .pipe(webp())
    .pipe(dest(path.srcWebpImgFolder))
};
