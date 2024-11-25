$(".slick-slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".storie-slick").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
$(".client-slick").slick({
  dots: false,
  arrows: false,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".menu-img").click(() => {
  $(".menu-bar").css("top", "0");
});
$(".close-menu").click(() => {
  $(".menu-bar").css("top", "-100%");
});
