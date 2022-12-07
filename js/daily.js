const date = new Date().getDay();
var combo1 = createPromotion("Pastel-de-Carne","Pastel de carne","Clássica combinação de massa sequinha e carne moída") + createPromotion("Romeu-e-Julieta","Pastel Romeu e Julieta","A clássica junção de queixo e goiabada em um pastel sequinho.") + createPromotion("Espetinho-de-carne","Churrasquinho de semana","Espetinho de carne assada pra te lembrar do final de semana.") + createPromotion("Pizza-de-Morango-chocolate","Pizza sensação","Massa crocante, cobertura de morango e chocolate e borda recheada de mousse de morango.");
var combo2 = createPromotion("Pizza-brisa-do-mar","Pizza brisa do mar","Uma pizza que leva o melhor do frescor do mar com frutos do mar e nosso molho especial.") + createPromotion("Pedacinho-do-céu","Pedacinho do céu","Porção de tamanho personalizado de bolo de cenoura e cobertura macia de chocolate") + createPromotion("Canoinhas","Canoinhas","Kit com dez canoinhas de sabores sortidos.") + createPromotion("Festinha-escondida","Festinha escondida","Kit de dez docinhos de festa sortidos.");
var combo3 = createPromotion("Cachorro-quente","Cachorro quente","Escolha os condimentos a serem colocados.") + createPromotion("Pizza-floresta-negra","Pizza floresta negra","Pizza de chocolate amargo") + createPromotion("Lembranca-de-inverno","Lembrança de inverno","Fondue com vinho branco.") + createPromotion("Frescor-de-verão","Frescor de verão","Torta de sorvete de flocos");
var combo4 = createPromotion("Pastel-de-Carne","Pastel de carne","Clássica combinação de massa sequinha e carne moída") + createPromotion("Pizza-de-Morango-chocolate","Pizza sensação","Massa crocante, cobertura de morango e chocolate e borda recheada de mousse de morango.") + createPromotion("Pastel-de-carne","Pastel de carne","Clássica combinação de massa sequinha e carne moída") + createPromotion("Pizza-floresta-negra","Pizza floresta negra","Pizza de chocolate amargo");
var combo5 = createPromotion("Lembrança-de-inverno","Lembrança de inverno","Fondue com vinho branco.") + createPromotion("Romeu-e-Julieta","Pastel Romeu e Julieta","A clássica junção de queixo e goiabada em um pastel sequinho.") + createPromotion("Espetinho-de-carne","Churrasquinho de semana","Espetinho de carne assada pra te lembrar do final de semana.") + createPromotion("Frescor-de-verão","Frescor de verão","Torta de sorvete de flocos");
var combo6 = createPromotion("Canoinhas","Canoinhas","Kit com dez canoinhas de sabores sortidos.") + createPromotion("Pizza-floresta-negra","Pizza floresta negra","Pizza de chocolate amargo") + createPromotion("Pizza-brisa-so-mar","Pizza brisa do mar","Uma pizza que leva o melhor do frescor do mar com frutos do mar e nosso molho especial.") + createPromotion("Festinha-escondida","Festinha escondida","Kit de dez docinhos de festa sortidos.");
var combo7 = createPromotion("Cachorro-quente","Cachorro quente","Escolha os condimentos a serem colocados.") + createPromotion("Festinha-escondida","Festinha escondida","Kit de dez docinhos de festa sortidos.") + createPromotion("Pizza-brisa-so-mar","Pizza brisa do mar","Uma pizza que leva o melhor do frescor do mar com frutos do mar e nosso molho especial.") + createPromotion("Frescor-de-verão","Frescor de verão","Torta de sorvete de flocos");


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
            <img src="img/Daily-${img}.png" alt="">
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
    slidesPerView: 1,
    slidesPergroup: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    // autoplay: {
    //     delay: 2900,
    //     disableOnInteraction: false,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".banner-nav-next",
      prevEl: ".banner-nav-prev",
    },
    keyboard: true,
    breakpoints:{
      768:{
          slidesPerView:2,
        },
      1024:{
        slidesPerView:3,
      },
      1440:{
        slidesPerView:4,
      }
    }
  });

