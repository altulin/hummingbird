$(function () {





  // tabs
  $('.company__main-tabs').responsiveTabs({
    startCollapsed: 'accordion'
  });







  //mmenu
  if ($("#header-nav").length > 0) {
    const menu = new MmenuLight(
      document.querySelector("#header-nav"),
      "(max-width: 4000px)"
    );

    const navigator = menu.navigation({
      title: ""
    });

    const drawer = menu.offcanvas({
      position: "right"
    });

    $(`.header__link-menu--open`).on(`click`, (e) => {
      e.preventDefault();
      drawer.open();
      // $(`.header__link-menu--open`).addClass(`hidden`);
      // $(`.header__link-menu--close`).removeClass(`hidden`);
    });

    $(`.header__link-menu--close`).on(`click`, (e) => {
      e.preventDefault();
      drawer.close();
      // $(`.header__link-menu--close`).addClass(`hidden`);
      // $(`.header__link-menu--open`).removeClass(`hidden`);
    });

    $(`.mm-ocd__backdrop`).on(`click`, () => {
      // $(`.header__link-menu--close`).addClass(`hidden`);
      // $(`.header__link-menu--open`).removeClass(`hidden`);
    });
  }


  //валидация полей форм
  $(`.modal-anonymous__form`).on(`submit`, (e) => {
    checkValidation(e);
  });


  const checkValidation = (e) => {
    let flag = false;
    e.preventDefault();
    $(e.target).parent().find(`.valid`).each((i, item) => {
      if ($(item).val().length === 0) {
        $(item).addClass(`not-valid`);
        droppingErr(item);

      } else {
        flag = true;
      }
    })

    if (flag) {
      sendForm(e);
    }
  };


  // отправка форм
  const sendForm = (e) => {
    const form = e.target;
    const data = $(form).serialize();
    $.ajax({
      url: 'https://httpbin.org/anything',
      method: 'post',
      dataType: 'json',
      data: data,
      success: function () {
        successHandler(e)
      }
    });
  };


  // после отправки открываем страницу
  const successHandler = (e) => {
    e.target.reset();
    $('#modal-thanks').modal();
  }


  //сброс ошибки
  const droppingErr = (item) => {
    $(item).on(`click`, () => {
      $(item).removeClass(`not-valid`);
    })
  };


});
