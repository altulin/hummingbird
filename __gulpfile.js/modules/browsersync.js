const browserSync = require(`${__dirname}/plugins.js`).plaginsObject.browserSync

module.exports.browsersync = () => {
  browserSync.init({ // Инициализация Browsersync
    server: { baseDir: `_src` }, // Указываем папку сервера
    notify: false, // Отключаем уведомления
    online: true, // Режим работы: true или false
    open: false,
    port: 3000
  })
};
