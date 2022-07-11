
const myModule = require('./exports.js')



class Person{
    constructor(pessoa){
        this.name = pessoa.name;
        this.idade = pessoa.idade;
    }

    mostrarPessoa(){
        return this.name
    }
}

const aluno = new Person(myModule)

//console.log(aluno)

console.log(process.argv)