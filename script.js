$(document).ready(function () {
  $(".menu").hover(function () {
    $(".sub-navbar").toggleClass("active");
  });
  $(".slider-box").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:false,
  });
});

$(window).scroll(function () {
  var $scrollTop = $(this).scrollTop();
  if ($scrollTop > 500) {
    $(".download-btn").css({ opacity: 1 }, 100);
  } else {
    $(".download-btn").css({ opacity: 0 }, 100);
  }
});