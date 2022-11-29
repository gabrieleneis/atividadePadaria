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

// products itens
// var $cont = document.querySelector('.cont');
// var $elsArr = [].slice.call(document.querySelectorAll('.el'));
// var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

// setTimeout(function() {
//     $cont.classList.remove('s--inactive');
// }, 200);

// $elsArr.forEach(function($el){
//     $el.addEventListener('click', function(){
//         if (this.classList.contains('s--active'))return;
//         $cont.classList.add('s--el-active');
//         this.classList.add('s--active');
//     });
// });

// $closeBtnsArr.forEach(function($btn){
//     $btn.addEventListener('click', function(e){
//         e.stopPropagation();
//         $cont.classList.remove('s--el-active');
//         document.querySelector('.el.s--active').classList.remove('s--active');
//     })
// })


var evalution = new Swiper(".evalution", {
  loop: true,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
