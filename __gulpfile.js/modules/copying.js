const path = require(`${__dirname}/variables.js`).path;

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