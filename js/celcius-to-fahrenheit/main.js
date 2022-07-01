const string = '50°F';

function verificarNumber(string){
    const itCelsius = string.endsWith('°C');

    if(itCelsius){
        return true;
    }
    return false;
}

function convertNumber(string){
    const verified = verificarNumber(string);

    if(verified){
        let celsius = Number(string.replace('°C',''));
        const toFahtenheit = (celsius * 9/5) + 32;

        return `A conversão de ${string} para fahrenheit é: ${toFahtenheit}°F`
    }

    let fahrenheit = Number(string.replace('°F',''));
    const toCelsius = (fahrenheit - 32) * 5/9;

    return `A conversão de ${string} para celsius é: ${toCelsius}°C`
}

console.log(convertNumber(string));

// function convert(number){
//     const graus = Number(number)

//     const toCelsius = (graus - 32) * 5/9;
//     const toFahtenheit = (graus * 9/5) + 32;
// }

//celsius to fahrenheit (0 °C × 9/5) + 32 = 32 °F
//fahrenheit to celsius (0 °F − 32) × 5/9 = -17,78 °C
