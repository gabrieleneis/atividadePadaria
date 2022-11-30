const popup = document.querySelector('.popup-wrapper');
var button = document.querySelector('.btn');
button.addEventListener('click', () => {
    popup.style.display = 'block'
})
popup.addEventListener('click', event =>{
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)

    if(shouldClosePopup){
        popup.style.display = 'none'
    }
})

const popup1 = document.querySelector('.popup-wrapper1');
var button1 = document.querySelector('.btn1');
button1.addEventListener('click', () => {
    popup1.style.display = 'block'
})
popup1.addEventListener('click', event =>{
    const classNameOfClickedElement = event.target.classList[0]
    const classNames1 = ['popup-close', 'popup-wrapper1']
    const shouldClosePopup = classNames1.some(className => className === classNameOfClickedElement)

    if(shouldClosePopup){
        popup1.style.display = 'none'
    }
})

const popup2 = document.querySelector('.popup-wrapper2');
var button2 = document.querySelector('.btn2');
button2.addEventListener('click', () => {
    popup2.style.display = 'block'
})
popup2.addEventListener('click', event =>{
    const classNameOfClickedElement = event.target.classList[0]
    const classNames2 = ['popup-close', 'popup-wrapper2']
    const shouldClosePopup = classNames2.some(className => className === classNameOfClickedElement)

    if(shouldClosePopup){
        popup2.style.display = 'none'
    }
})

const popup3 = document.querySelector('.popup-wrapper3');
var button3 = document.querySelector('.btn3');
button3.addEventListener('click', () => {
    popup3.style.display = 'block'
})
popup3.addEventListener('click', event =>{
    const classNameOfClickedElement = event.target.classList[0]
    const classNames3 = ['popup-close', 'popup-wrapper3']
    const shouldClosePopup = classNames3.some(className => className === classNameOfClickedElement)

    if(shouldClosePopup){
        popup3.style.display = 'none'
    }
})