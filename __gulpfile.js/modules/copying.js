const path = require(`${__dirname}/variables.js`).path;
<<<<<<< HEAD

module.exports.getCopying = () => {
  return src([ // Выбираем нужные файлы
    path.src.srcCssFile,
    path.src.fonts,
    path.src.min_js,
    path.src.js,
    `${sourceFolder}/js/modules/*.js`,
    path.src.img,
    path.src.html,
    path.src.ico,
    path.src.fav,
    path.src.files
  ], { base: `${sourceFolder}` }) // Параметр "base" сохраняет структуру проекта при копировании
    .pipe(dest(`${projectFolder}/`)) // Выгружаем в папку с финальной сборкой
};
=======
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
>>>>>>> c03e204dd7ac18cd3949056a6ad76b8cce1e6b78
