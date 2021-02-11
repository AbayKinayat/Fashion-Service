  //Аккардион

document.addEventListener('DOMContentLoaded', function() {
  const accardionSections = document.querySelectorAll('.accardion__section');

  let accardionSectionNull = function(section) {
    section.querySelector('.accardion__body').style.height = '0px';
    section.querySelector('.accardion__btn_circle').textContent = '+';
    section.querySelector('.accardion__btn_circle').style.backgroundColor = '#F1F1F1';
  }

  let accardionClickHandler = function() {

    if(this.querySelector('.accardion__btn_circle').textContent === '-') {
      accardionSections.forEach(function(section) {
        accardionSectionNull(section)
      })
      return false
    }

    accardionSections.forEach(function(section) {
      accardionSectionNull(section)
    })

    let accardionBodyTextHeight = this.querySelector('.accardion__body p').clientHeight;

    console.log(accardionBodyTextHeight)

    this.querySelector('.accardion__body').style.height = accardionBodyTextHeight + 'px';
    this.querySelector('.accardion__btn_circle').textContent = '-';
    this.querySelector('.accardion__btn_circle').style.backgroundColor = '#CCFE62';
  }

  accardionSections.forEach(function(section) {

    section.addEventListener('click', accardionClickHandler)

  })
})

  // Popup

let showPopupBtn = document.querySelector('.popupShow');
let popupFade = document.querySelector('.popup-fade');
let popup = document.querySelector('.popup-form');
let popupCloseBtn = document.querySelectorAll('.popup-close');
let popupThanks = document.querySelector('.popup-thanks');
let thansBtn = document.querySelector('#thanksBtn')
let thansBtn2 = document.querySelector('#thanksBtn2')


showPopupBtn.addEventListener('click', showPopup);

popupFade.addEventListener('click', popupClose);
popupCloseBtn[0].addEventListener('click', popupClose);
popupCloseBtn[1].addEventListener('click', popupClose);
thansBtn.addEventListener('click', popupClose);
thansBtn2.addEventListener('click', popupClose);

function showPopup() {
  popupFade.style.visibility = 'visible';
  popupFade.style.opacity = '1';
  popup.style.visibility = 'visible';
  popup.style.opacity = '1';
  popup.style.transform = 'translate(-50%, -50%) scale(1)';
}

function popupClose() {
  popupFade.style.visibility = 'hidden';
  popupFade.style.opacity = '0';
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
  popup.style.transform = 'translate(-50%, -50%) scale(0.8)';
  popupThanks.style.visibility = 'hidden';
  popupThanks.style.opacity = '0';
  popupThanks.style.transform = 'translate(-50%, -50%) scale(0.8)';
}

 //Validation form

popup.addEventListener('submit', function(event) {

  event.preventDefault()
  
  let userName = document.querySelector('#userName').value.trim();
  let userPhone = document.querySelector('#userPhone').value.trim();
  let userEmail = document.querySelector('#userEmail').value.trim();
  let agree = document.querySelector('#agree');
  let nameMessage = document.querySelector('#nameMessage');
  let phoneMessage = document.querySelector('#phoneMessage');
  let emailMessage = document.querySelector('#emailMessage');

  nameMessage.textContent = '';
  phoneMessage.textContent = '';
  emailMessage.textContent = '';

  if  (userName.length < 2) {
    nameMessage.textContent = 'Введите не менее 2 символов';
  }
  if (!/[а-я]/ig.test(userName)) {
    nameMessage.textContent = 'Не корректное имя';
  }
  if (!/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(userPhone)) {
    phoneMessage.textContent = 'Не корректный телефон';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
    emailMessage.textContent = 'Не корректный почта';
  }
  if (userName == '') {
    nameMessage.textContent = 'Введите ваше имя';
  }
  if (userPhone == '') {
    phoneMessage.textContent = 'Введите ваш телефон';
  }
  if (userEmail == '') {
    emailMessage.textContent = 'Введите вашу почту';
  }

  if (userName.length < 2 || !/[а-я]/ig.test(userName) || !/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(userPhone) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail) || userName == '' || userPhone == '' || userEmail == '' || !agree.checked) {
    return false
  }

  let popupThanks = document.querySelector('.popup-thanks');

  popupThanks.style.visibility = "visible";
  popupThanks.style.opacity = '1';
  popupThanks.style.transform = 'translate(-50%, -50%) scale(1)';
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
  popup.style.transform = 'translate(-50%, -50%) scale(0.8)';

})

// Burger menu

const showNavSideBtn = document.querySelector('.burger-nav');
const closeNavSideBtn = document.querySelector('.nav-side__close')
const navSide = document.querySelector('.nav-side');

showNavSideBtn.addEventListener('click', function() {
  navSide.style.transform = 'translateX(0)';
})

closeNavSideBtn.addEventListener('click', function() {
  navSide.style.transform = 'translateX(-100%)';
})

$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#userPhone").mask("+7(999) 999-9999");
});

// Phone Btn

$(window).scroll(function(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.section-services').offset().top;
	var eh = $('.section-services').outerHeight();
	var dh = $(document).height();  

  if (wt + wh >= et || wh + wt == dh || eh + et < wh){
    document.querySelector('.phone-btn').style.transform = 'translateX(50px)';
    document.querySelector('.phone-btn').style.visibility = 'hidden';
    document.querySelector('.phone-btn').style.opacity = '0';
	}
	if (wt + wh >= et + 400 || wh + wt == dh || eh + et < wh){
    document.querySelector('.phone-btn').style.transform = 'translateX(0)';
    document.querySelector('.phone-btn').style.visibility = 'visible';
    document.querySelector('.phone-btn').style.opacity = '1';
	}
});
