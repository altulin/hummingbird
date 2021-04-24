const path = require(`${__dirname}/variables.js`).path;
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const src = pluginsPath.gulp.src;
const dest = pluginsPath.gulp.dest;
const path_dist = path.dist

module.exports.getCopying = () => {
  return src([ // Выбираем нужные файлы
    path_dist.cssFile,
    path_dist.cssMinFile, // стили мин если надо
    path_dist.fontsFiles,
    path_dist.jsFile,
    path_dist.jsMinFile, // скрипты мин если надо
    path_dist.images,
    path_dist.htmlFiles,
    path_dist.icoFiles,
    path_dist.favFiles,
  ], { base: path.srcFolder }) // Параметр "base" сохраняет структуру проекта при копировании
    .pipe(dest(`${path.distFolder}/`)) // Выгружаем в папку с финальной сборкой
};
