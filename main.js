$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    nav: true,
    navText: [
      "<span class='fa-2x fa fa-arrow-circle-left text-center p-2 mt-4'</span>",
      "<span class='fa-2x fa fa-arrow-circle-right p-2 mt-4'</span>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
