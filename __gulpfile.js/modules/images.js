const variablesPath = require(`${__dirname}/variables.js`);
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const newer = pluginsPath.newer;
const imagemin = pluginsPath.imagemin;

const path = variablesPath.path;

module.exports.makeImages = () => {
  return src(path.src.srcRasterImg) // Берём все изображения из папки источника
    .pipe(newer(path.src.srcImages)) // Проверяем, было ли изменено (сжато) изображение ранее
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),

    ])) // Сжимаем и оптимизируем изображеня
    .pipe(dest(path.src.srcImg)) // Выгружаем оптимизированные изображения в папку назначения
};
