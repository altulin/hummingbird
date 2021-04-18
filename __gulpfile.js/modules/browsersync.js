const plugins = require(`${__dirname}/plugins.js`).plaginsObject

module.exports.browsersync = () => {
  plugins.browserSync.init({ // Инициализация Browsersync
    server: { baseDir: `_src` }, // Указываем папку сервера
    notify: false, // Отключаем уведомления
    online: true, // Режим работы: true или false
    open: false,
    port: 3000
  })
};
