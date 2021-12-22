const btnHamburguer = document.querySelector('.header__nav__icon-hamburger')
const header = document.querySelector('.header')
const navList = document.querySelector('.header__nav__list')
const navTxtBox = document.querySelector('.header__text-box')

btnHamburguer.addEventListener('click', () => {

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
})