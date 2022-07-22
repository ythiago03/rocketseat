const day = document.querySelector('#day')
const hours = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

let timeDay = +day.textContent;
let timeHour = +hours.textContent;
let timeMinute = +minute.textContent;
let timeSecond = +second.textContent;

const decrementDay = () => {
    if(timeDay <= 0 ){
        day.textContent = 00;
        return;
    }
    timeDay = timeDay - 1;
    day.textContent = timeDay;
};

const decrementHour = () => {
    if(timeDay <= 0 && timeHour <= 0){
        hours.textContent = 00;
        return;
    }
    else if(timeHour <= 0 ){
        timeHour = 24;
        decrementDay()
    }

    timeHour = timeHour - 1;
    hours.textContent = timeHour;
};

const decrementMinute = () => {
    if(timeDay <= 0 && timeHour <= 0 && timeMinute <= 0){
        minute.textContent = 00;
        return;
    }
    else if(timeMinute <= 0){
        timeMinute = 60;
        decrementHour()
    }
    timeMinute = timeMinute - 1;
    minute.textContent = timeMinute
}

const decrementSecond = () => {
    if(timeDay <= 0 && timeHour <= 0 && timeMinute <= 0 && timeSecond <= 0){
        second.textContent = 00;
        alert('A contagem chegou ao fim!!!')
        clearInterval(interval);
        return;
    }
    else if(timeSecond <= 0){
        timeSecond = 60;
        decrementMinute()
    }
    timeSecond = timeSecond - 1;
    second.textContent = timeSecond
}

let interval = setInterval(() => {decrementSecond()}, 1000)
