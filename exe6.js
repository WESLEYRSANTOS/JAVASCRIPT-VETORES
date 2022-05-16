function calcular(){
let vetVendas = []
let vetNomes = []
let vetComissoes = []
let vetReceber = []
// entrada de dados
for(let i=0;i<5;i++){
    vetNomes.push(prompt(`Informe nome do vendedor`))
    vetVendas.push(Number(prompt(`Informe total de vendas de ${vetNomes[i]}`)))
    vetComissoes.push(Number(prompt(`Informe valor de comissão de ${vetNomes[i]}`)))
     // calcula valor a receber
     vetReceber[i] = vetVendas[i] * vetComissoes[i] / 100
}
// processamento
let totalVendas = 0
let maiorReceber = vetReceber[0]
let menorReceber = vetReceber[0]
let nomeMaior = vetNomes[0]
let nomeMenor = vetNomes[0]

for(let i=0;i<5;i++){
    // acumulando o valor das vendas
    totalVendas = totalVendas + vetVendas[i]
    if (vetReceber[i] > maiorReceber){
        maiorReceber = vetReceber[i]
        nomeMaior = vetNomes[i]
    }    
    if (vetReceber[i] < menorReceber){
        menorReceber = vetReceber[i]
        nomeMenor = vetNomes[i]
    }
}
alert(`Maior valor a receber ${maiorReceber} e quem receberá ${nomeMaior}`)
alert(`Menor valor a receber ${menorReceber} e quem receberá ${nomeMenor}`)
alert(`Total de vendas ${totalVendas}`)
alert(` Valores a receber ${vetNomes} - ${vetReceber}`)
}