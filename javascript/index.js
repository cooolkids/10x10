var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  effect: "fade",
  spaceBetween: 30,
});


$('.swiper').mouseenter(function () {
  swiper.autoplay.stop()
})

$('.swiper').mouseleave(function () {
  swiper.autoplay.start()
})

var $grid = $('.grid').imagesLoaded(function () {


  $grid.isotope({
    itemSelector: '.grid-item',

    masonry: {
      columnWidth: 280,
      fitWidth: true,
      gutter: 10
    }
  });
});
$('.tab-menu li a').on('click', function (e) {
  e.preventDefault()

  $('.tab-menu li a').removeClass('on')
  $(this).addClass('on')

  var filterValue = $(this).attr('data-filter');

  $grid.isotope({ filter: filterValue });
});



$('.sect4 .button li').mouseenter(function (e) {
  e.preventDefault()

  let idx = $(this).index()
  $('.sect4 .button li').removeClass('on')
  $(this).addClass('on')

  $('.item.tab').removeClass('on')
  $('.item.tab').eq(idx).addClass('on')
})




let itemWid = 0;
let dir = -1;
let speed = 1;
let loc = 1;
let liWidth = 0;

$('.sect3 ul li:not(.etc)').each(function () {
  w = $(this).innerWidth();
  liWidth += w
})

function flowBanner(params) {
  loc += speed * dir;
  console.log(loc);

  if (loc <= -liWidth) {
    loc = 0
  } else if (loc >= 0) {
    loc = -liWidth
  }

  $('.sect3 ul').css({ 'left': loc })
}
setInterval(flowBanner, 10);

$('.sect3').mouseenter(function () {
  speed = 0
})

$('.sect3').mouseleave(function () {
  speed = 1
})

$('span.next').mouseenter(function () {
  speed = 4
  dir = -1
})
$('span.prev').mouseenter(function () {
  speed = 4
  dir = 1
})

Fancybox.bind("[data-fancybox]", {

});

document.getElementById("trigger").addEventListener("click", () => {
  Fancybox.show([
    {
      src: "https://www.google.com/maps/@51.5039653,-0.1246493,14.12z",
      width: 800,
      height: 600,
    },
  ]);
});