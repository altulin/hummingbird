const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;
const path = require(`${__dirname}/variables.js`).path;

const watch = pluginsPath.gulp.watch;


module.exports.getWatchers = () => {
  watch([
    `${sourceFolder}/js/**/*.js`,
    `!${sourceFolder}/js/${projectJs}`,
    `!${sourceFolder}/js/${projectJsMin}`
  ], scripts);// Выбираем все файлы JS в проекте, а затем исключим

  watch([`${sourceFolder}/sass/**/*.sass`, `!${sourceCss}`], styles);
  watch([`${sourceFolder}/pug/**/*.pug`], transformPug);
  watch(`${sourceFolder}/_img/*`, images);
  watch(`${sourceFolder}/_img/*`, createWebp);
  watch(`${sourceFolder}/_img/svg`, imagesSvg);
  watch(`${sourceFolder}/_img/sprite`, createSprite);
}
