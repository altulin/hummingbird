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


  // confidence slider
  if ($(window).width() < 768) {
    $('.confidence__list').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    });
  }

  // result slider
  $('.result__list').slick({
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      }
    ]


  });







  // $('.result__list').on('swipe', function (event, slick, direction) {
  //   console.log(direction);
  //   // left
  // });

  // $('.result__list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  // console.log(nextSlide);
  // });
  // $('.result__list').on('swipe', function (event, slick, currentSlide, nextSlide) {
  //   // $(`.result__link`).addClass(`result__link--eventnone`)
  //   console.log(`fdfgd`)
  // });
  // $(`.result__link`).on(`mousedown`, (e) => {
  //   $(`.result__link`).addClass(`result__link--eventnone`)
  //   // console.log(e.target)
  // })

  // $(`.result__link`).on(`click`, (e) => {
  //   $(`.result__link`).removeClass(`result__link--eventnone`)
  //   // console.log(e.target)
  // })

  $('.accordion__item').accordion({
    "transitionSpeed": 400

  });

  // map

  let myMap;
  const init = () => {

    myMap = new ymaps.Map('map', {

      center: [52.2825, 104.296372],
      zoom: 17,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    });

    const myPlacemark = new ymaps.Placemark([52.2825, 104.296372], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/svg/marker.svg',
      iconImageSize: [48, 60],
      iconImageOffset: [, -50]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  }

  ymaps.ready(init);
});
