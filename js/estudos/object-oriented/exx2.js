class Parafuso{
    constructor(){
        if(this.constructor === Parafuso){
            throw new Error('Classe abstrata não pode ser instanciada')
        };
    }

    get tipo(){
        throw new Error('Metodo "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso{
    constructor(){super()}

    get tipo(){
        return 'Fenda'
    }
}

class Philips extends Parafuso{
    constructor(){super()}

    get tipo(){
        return 'Philips'
    }
}

class Inglesa extends Parafuso{}

const fenda = new Fenda()
const philips = new Philips()
const inglesa = new Inglesa()

console.log(fenda.tipo, philips.tipo)
 console.log(inglesa);