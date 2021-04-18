module.exports.scripts = () => {
  return src([ // Берём файлы из источников
    jquery_js,
    jquery_modal_js,
    inputmask_js,
    // swiper_js,
    mmenu_js,
    // jquery_fajax_js,
    // jquery_formstyler_js,
    slick_js,
    path.src.libs_js, // библиотеки из папки libs
    sourceJs, // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
  ])
    .pipe(sourcemaps.init())
    .pipe(concat(projectJs)) // Конкатенируем в один файл
    // .pipe(sourcemaps.write()) //добавляем карту
    .pipe(dest(`${sourceFolder}/js`)) // Выгружаем готовый файл не мин в папку назначения
    .pipe(concat(projectJsMin))
    .pipe(uglify()) // Сжимаем JavaScript
    // .pipe(sourcemaps.write()) //добавляем карту
    .pipe(dest(`${sourceFolder}/js`)) // Выгружаем готовый файл мин в папку назначения
    .pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
};
