const timeOut = 1000;

//set time out

/*
console.log('inicio');

const finished = () => console.log('done!');

console.log('meio');

setTimeout(finished, timeOut)

console.log('final');
*/




// cleartimeout

/*
const finished = () => console.log('done!');

let timer = setTimeout(finished, timeOut);

clearTimeout(timer)//cancela o timeout
*/



// set interval
/*
const checking = () => console.log('checking!');

setInterval(checking, timeOut);// roda a função infinitamente no tempo de invervalo
*/



// clearinterval
/*
const checking = () => console.log('checking!');

let interval = setInterval(checking, timeOut);

setTimeout(() => clearInterval(interval), 5 * 1000)//cancela o interval
*/


//