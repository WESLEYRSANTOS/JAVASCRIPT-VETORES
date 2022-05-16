function calcular(){
    let vet = [] // vetor contendo os números
    let vetPosicoes = [] // vetor contendo as posições do número 30
    // entrada de dados
    for(let i=0;i<10;i++){
        vet.push(Number(prompt(`Informe um número`)))
    }
    // percorre vetor para encontrar o 30
    for(let i=0;i<10;i++){
        if (vet[i] == 30){
            vetPosicoes.push(i) // guarda no vetor a posição i
        }
    }
    if (vetPosicoes.length == 0){
        alert(`Nenhum número 30 foi encontrado`)
    }
    else {
        alert(`Foram encontrados números 30 nas posições ${vetPosicoes}`)
    }
}