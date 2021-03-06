const btnHamburguer = document.querySelector('.header__nav__icon-hamburger')
const header = document.querySelector('.header')
const navList = document.querySelector('.header__nav__list')
const navTxtBox = document.querySelector('.header__text-box')

btnHamburguer.addEventListener('click', () => {

  
  if(btnHamburguer.classList.contains('active')){
    btnHamburguer.classList.remove('active')
    btnHamburguer.src = '/assets/img/icon-hamburger.svg'
  } else {
    btnHamburguer.classList.add('active')
    btnHamburguer.src = '/assets/img/icon-close.svg'
  }

  if(header.classList.contains('active')){
    header.classList.remove('active')
  } else {
    header.classList.add('active')
  }

  if(navList.classList.contains('active')){
    navList.classList.remove('active')
  } else {
    navList.classList.add('active')
  }

  if(navTxtBox.classList.contains('active')){
    navTxtBox.classList.remove('active')
  } else {
    navTxtBox.classList.add('active')
  }
})