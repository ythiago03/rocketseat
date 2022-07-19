console.log('Pedindo uber...');
let aceito = false;
const promessa = new Promise((resolve,
     reject) => {//primeiro argumento é o caso sem erro e o segundo com erro

        if(aceito){
            return resolve('Seu carro chegou!')
        }

        return reject('Sua corrida foi cancelada!')

     })

console.log('aguardando...');


    promessa
    .then(result => console.log(result)) //quando deu tudo certo na promise
    .catch(erro => console.log(erro)) // quando deu erro na promise
    .finally(() => console.log('finalizado!'))// quando a promise terminou(seja com erro ou nao)
