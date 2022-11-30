const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

for (const element of toggle) {
  element.addEventListener('click', function() {
  nav.classList.toggle('show')
  })
}

for (const link of links) {
  link.addEventListener('click', function(){
      nav.classList.remove('show')
  })
}

function sombraHeader() {
  if(window.scrollY >= navHeight) {
      header.classList.add('scroll')
  } else {
      header.classList.remove('scroll')
  }
}

window.addEventListener('scroll', function(){
  sombraHeader()
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});