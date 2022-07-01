/* ### transformar notas escolares

*90 para cima  - A
*entre 80 - 89 - B
*entre 70 - 79 - C
*entre 60 - 69 - D
*menor que 60  - F
*/

let nota = 78;

class Note{
    constructor(nota){
        return this.nota = nota;
    }

    get notas(){
        return this.#verificarNota();
    }

    #verificarNota(){
        if(this.nota >= 90){
            return 'Sua nota é A'
        }
        else if(this.nota >= 80){
            return 'Sua nota é B'
        }
        else if(this.nota >= 70){
            return 'Sua nota é C'
        }
        else if(this.nota >= 60){
            return 'Sua nota é D'
        }else{
            return 'Sua nota é F'
        }
        
    }
}


const notaFinal = new Note(nota)
console.log(notaFinal.notas)