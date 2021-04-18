const variablesPath = require(`${__dirname}/variables.js`);
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const imagemin = pluginsPath.imagemin;
const del = pluginsPath.del;

const path = variablesPath.path;


module.exports.makeImagesSvg = () => {
  del(path.src.srcImagesSvg, { force: true });
  return src(path.src.srcVectorImg) // Берём все изображения из папки источника

    // .pipe(newer(`${sourceFolder}/img/svg`)) // Проверяем, было ли изменено (сжато) изображение ранее
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(dest(path.src.srcImgSvg)) // Выгружаем оптимизированные изображения в папку назначения
};
