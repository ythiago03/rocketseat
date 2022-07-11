const myModule = require('./export')

console.log(`Olá ${myModule('--name')}. ${myModule('--greetings')}`);