function calcular(){
let vetLogica = []
let vetLinguagem = []
let vetInterseccao = []

// entrada de dados
for(let i=0;i<10;i++){
    vetLogica.push(Number(prompt(`Informe código do aluno que faz disciplina de lógica`)))
}
for(let i=0;i<5;i++){
    vetLinguagem.push(Number(prompt(`Informe código do aluno que faz disciplina de linguagem`)))
}
// encontrar a intersecção
for(let i=0;i<10;i++){
    for(let j=0;j<5;j++){
        if (vetLogica[i] == vetLinguagem[j]){
            vetInterseccao.push(vetLogica[i])
        }
    }
}
alert(`O vetor intersecção é ${vetInterseccao}`)
}