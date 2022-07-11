
const family = {
    receitas: [120.00,240.50,30.20],
    despesas: [50.00,178.90, 99.99],
};

function calcularReceita(family){
    const receita = family.receitas.reduce((a,b) => a + b, 0)
    const gastos = family.despesas.reduce((a,b) => a + b, 0)
    const receitaFinal = receita - gastos;
    
    const positivo = receitaFinal >= 0;
    let message = 'negativo';
    if(positivo){
        message = 'positivo'
    }
    
    return `O seu saldo final foi ${message}: R$${receitaFinal.toFixed(2)}`
}
console.log(calcularReceita(family))

// const receitaFinal = family.receitas.reduce((a,b) => a = a + b, 0) - family.despesas.reduce((a,b) => a = a + b, 0)


