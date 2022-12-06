const date = new Date().getDay();
var combo1 = createPromotion("Salgados","Pastel","CARNE") + createPromotion("TortasDoces","Cuca","CHOCOLATE");
var combo2 = createPromotion("Salgados","Pastel","FRANGO") + createPromotion("TortasDoces","Cuca","NAPOLITANA");
var combo3 = createPromotion("Salgados","Pastel","CERNA") + createPromotion("TortasDoces","Cuca","chocolate");
var combo4 = createPromotion("Salgados","pastel","CERNA") + createPromotion("TortasDoces","Cuca","chocolate");
var combo5 = createPromotion("Salgados","Pastel","CERNA") + createPromotion("TortasDoces","Cuca","chocolate");
var combo6 = createPromotion("Salgados","Pastel","CERNA") + createPromotion("TortasDoces","Cuca","chocolate");
var combo7 = createPromotion("Salgados","Pastel","CARNE") + createPromotion("TortasDoces","Cuca","chocolate7");


var aplication = document.querySelector('#promotion');


if (date == 0) {
  aplication.innerHTML = combo7
} else if (date == 1){
  aplication.innerHTML = combo1
} else if (date == 2){
  aplication.innerHTML = combo2
} else if (date == 3){
  aplication.innerHTML = combo3
} else if (date == 4){
  aplication.innerHTML = combo4
} else if (date == 5){
  aplication.innerHTML = combo5
} else if (date == 6){
  aplication.innerHTML = combo6
} else {
  alert("ERRADO")
}

function createPromotion(img, product, content){
  return`
  <div class="swiper-slide cardsDaily">
      <div class="cardDaily">
          <div class="topDaily">
              <img src="img/Carte-${img}.png" alt="">
              <div class="promo"></div>
          </div>
          <div class="detailsDaily">
              <h3>${product}</h3>
              <p>${content}</p>
          </div>
      </div>
  </div>
  `
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    slidesPergroup: 4,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2900,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

