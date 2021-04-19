$(function () {

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
    });

    $(`.header__link-menu--close`).on(`click`, (e) => {
      e.preventDefault();
      drawer.close();
    });
  }


  //валидация полей форм
  $(`.modal-request__form`).on(`submit`, (e) => {
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

  // mask input tel
  $(`#phone`).inputmask({ "mask": "+7 (999) 999-99-99" });

  // GLightbox
  const lightbox = GLightbox({
    touchNavigation: true,
    // loop: true,
    autoplayVideos: true
  });

  if ($(window).width() < 768) {
    $('.confidence__list').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    });
  }


});
