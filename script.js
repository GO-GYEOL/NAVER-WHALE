$(document).ready(function () {
  $(".menu").hover(function () {
    $(".sub-navbar").toggleClass("active");
  });
  $(".slider-box").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
  });
});
