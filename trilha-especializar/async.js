
let num = '';

const organizeNum = (arr) => {
    num = parseInt(Math.random() * 906)
    return num
}
organizeNum()

console.log(num)

const img = document.querySelector('[data-js="data-img"]')
const p = document.querySelector('.name')
const peso = document.querySelector('.peso')
const altura = document.querySelector('.altura')
let div = document.querySelector('.div')
const abili = document.querySelector('.abili')

let teste = []


const get3pokemon = async () => {
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/' + num)
    const name = pokemon.data.name
    const urlImage = pokemon.data.sprites.front_default
    const weight = pokemon.data.weight
    const height = pokemon.data.height
    const ability = pokemon.data.abilities

    p.textContent = `Nome: ${name}`
    img.setAttribute('src', urlImage)
    peso.textContent = `Peso: ${weight} Kg`
    altura.textContent = `Altura: ${height}0 cm`



    // for(let i = 0; i < ability.length; i++){
       
    //     console.log(ability[i].ability.name);
    //     abili.textContent = ability[i].ability.name
       
    // }

    ability.forEach((element, i) => {
        teste.push(ability[i].ability.name)

        abili.textContent = teste.join('___')
    })

    console.log(ability);
    console.log(pokemon.data);
}

get3pokemon()

