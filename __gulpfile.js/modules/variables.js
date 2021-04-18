const projectName = `colibri` // название проекта
const distFolder = `${projectName}_dist`; //Папка продакшн
const srcFolder = `_src`;  // Папка разработки

module.exports.plugunsJsUsed = [`jquery_js`, `jquery_modal_js`, `mmenu_js`, `myJsLibs`, `myJsFile`];
module.exports.plugunsCssUsed = [`normalize_css`, `jquery_modal_css`, `mmenu_css`, `myCssLibs`, `myCssFile`];

module.exports.plugunsJs = new Map([
  [`jquery_js`, `node_modules/jquery/dist/jquery.min.js`],
  [`jquery_modal_js`, `node_modules/jquery-modal/jquery.modal.min.js`],
  [`mmenu_js`, `node_modules/mmenu-light/dist/mmenu-light.js`],
  [`slick_js`, `node_modules/slick-carousel/slick/slick.min.js`],
  [`inputmask_js`, `node_modules/inputmask/dist/jquery.inputmask.min.js`],
  [`jquery_formstyler_js`, `node_modules/jquery-form-styler/dist/jquery.formstyler.min.js`],
  [`myJsFile`, `${srcFolder}/js/main.js`], // мой файл js
  [`myJsLibs`, `${srcFolder}/js/libs/**/*.js`] // мои библиотеки js
]);


module.exports.plugunsCss = new Map([
  [`normalize_css`, `node_modules/normalize.css/normalize.css`],
  [`jquery_modal_css`, `node_modules/jquery-modal/jquery.modal.min.css`],
  [`mmenu_css`, `node_modules/mmenu-light/dist/mmenu-light.css`],
  [`jquery_formstyler_css`, `node_modules/jquery-form-styler/dist/jquery.formstyler.css`],
  [`jquery_formstyler_theme_css`, `node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css`],
  [`slick_css`, `node_modules/slick-carousel/slick/slick.css`],
  [`myCssFile`, `${srcFolder}/sass/style.sass`], // мой файл css
  [`myCssLibs`, `${srcFolder}/css/libs/**/*.css`] // мои библиотеки css
]);


module.exports.path = {
  dist: {


  },
  src: {
    srcJsFile: `script.js`,
    srcJsMinFile: `script.min.js`,
    srcJsFolder: `${srcFolder}/js`,
    srcCssFile: `style.css`,
    srcCssFolder: `${srcFolder}/css`,
    srcRasterImg: `${srcFolder}/_img/*.{png,jpg}`,
    srcImages: `${srcFolder}/img/**/*`,
    srcImg: `${srcFolder}/img`,
    srcVectorImg: `${srcFolder}/_img/svg/*.svg`,
    srcImagesSvg: `${srcFolder}/img/svg/*.svg`,
    srcImgSvg: `${srcFolder}/img/svg`,
    srcSpriteFolder: `${srcFolder}/img/sprite.svg`,
    srcSpriteFiles: `${srcFolder}/_img/sprite/*.svg`
  },
  distFolder
}
