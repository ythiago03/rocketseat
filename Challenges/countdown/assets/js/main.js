let day = document.querySelector('#day')
let hours = document.querySelector('#hour')
let minute = document.querySelector('#minute')
let second = document.querySelector('#second')


let teste = +second.textContent;
let teste2 = +minute.textContent;

const increment = () => {
    teste = teste + 1

    if(teste > 60){
        teste = 0
        teste2 = teste2 + 1
    }
    second.textContent = teste
    minute.textContent = teste2
}

setInterval(() => increment(), 1000)

if(teste > 10){
    console.log('passou')
}
