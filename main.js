$(function () {
  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close');
  });

  $('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--open');
  });
});

var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;
var navBtnId = 0;

function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('#slidewrapper').css('transform', 'translate(0, 0)');
    slideNow = 1;
  } else {
    translateWidth = -$('#viewport').width() * slideNow;
    $('#slidewrapper').css({
      transform: 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
}
$('.slide-nav-btn').on('click', function () {
    $('.slide-nav-btn').removeClass('slide-nav-btn--active');
    $(this).addClass('slide-nav-btn--active')
  });

$('.slide-nav-btn').click(function () {
  navBtnId = $(this).index();

  if (navBtnId + 1 != slideNow) {
    translateWidth = -$('#viewport').width() * navBtnId;
    $('#slidewrapper').css({
      transform: 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow = navBtnId + 1;
  }
});

const countdown = document.querySelector('.countdown');
const targetDate = new Date('2024-10-10');
 
function updateCountdown() {
  const now = new Date();
  const remainingTime = targetDate - now;
 
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
 
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}
 
// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);

$('.buy-now-pay-later-style').click(function() { // Вызываем функцию по нажатию на кнопку
  var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
  $(popup_id).show(); // Открываем окно
})
$('.afterpay-btn').click(function() { // Обрабатываем клик по заднему фону
  $('.monthly-payment-container1').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
})

function readLess() {
  let dots = document.getElementById('dots');
  let less = document.getElementById('less');
  let btn = document.getElementById('btn');

  if (dots.style.display === "inline"){
    dots.style.display = "none";
    btn.innerHTML = "Read less";
    less.style.display = "inline"
  } else{
    dots.style.display = "inline";
    btn.innerHTML = "Read more";
    less.style.display = "none"
  }
}