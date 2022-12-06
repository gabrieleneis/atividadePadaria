 criaJogos(time1, hora, time2){
    return`
    <li>
        <img src="./img/${time1}.svg" alt="">
        <p>${hora}</p>
        <img src="./img/${time2}.svg" alt="">
    </li>`
}

function criafunctionCard(img, product, content){
    return`
    <div class="swiper-slide cardsDaily">
    <div class="cardDaily">
        <div class="topDaily">
            <img src="img/Carte-${img}.png" alt="">
        </div>
        <div class="detailsDaily">
            <h3>${product}</h3>
            <p>${content}</p>
        </div>
    </div>
</div>
`
}

document.querySelector("body").innerHTML = `
<header>
    <h1 class="titulo">Calendário</h1>
</header>
<main>
        ${criaCard("24/11", "segunda-feira", criaJogos("brazil", "16:00", "colombia") + criaJogos("brazil", "16:00", "colombia") + criaJogos("brazil", "16:00", "colombia")) + criaCard("24/11", "segunda-feira", criaJogos("brazil", "16:00", "colombia") + criaJogos("brazil", "16:00", "colombia"))}
</main>
`