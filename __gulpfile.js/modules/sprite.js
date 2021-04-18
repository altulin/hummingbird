const variablesPath = require(`${__dirname}/variables.js`);
const pluginsPath = require(`${__dirname}/plugins.js`).plaginsObject;

const del = pluginsPath.del;
const src = pluginsPath.gulp.src;
const imagemin = pluginsPath.imagemin;
const svgmin = pluginsPath.svgmin;
const cheerio = pluginsPath.cheerio;
const replace = pluginsPath.replace;
const svgstore = pluginsPath.svgstore;
const rename = pluginsPath.rename;

const dest = pluginsPath.gulp.dest;

const path = variablesPath.path;


module.exports.createSprite = () => {
  del(path.src.srcSpriteFolder, { force: true });
  return src(path.src.srcSpriteFiles)
    .pipe(imagemin([
      imagemin.svgo()
    ]))

    .pipe(svgmin({
      js2svg: {
        // pretty: true
      }
    }))

    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true }
    }))

    .pipe(replace('&gt;', '>'))

    .pipe(svgstore({
      inlineSvg: true
    }))

    .pipe(rename("sprite.svg"))
    .pipe(dest(path.src.srcImg))
};
