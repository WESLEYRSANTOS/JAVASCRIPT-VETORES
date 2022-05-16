function calcular(){

   
    let vetor = [] //cria um vetor --> lista --> array 
    let mult2 = []
    let mult3= []
    let mult2e3= []
    
    //vetor.push para acrescentar elemento no vetor
    // vetor.length para saber quanto numeros estao dentro do vetor
    // indexOF para mostra a posicao pesquisada pelo nome ou numero digitado
    // 
    
    
    for(let i = 0; i < 6; i ++){
        vetor.push(Number(prompt(`Informe a idade ${i + 1}`)))    
        }
        
    // processamento percorrer o vetor

    for(let i = 0; i < 6; i ++){
        if(vetor[i] % 2 == 0){ //par
        mult2.push(vetor[i])
        }

        if(vetor[i] % 3 == 0){
            mult3.push(vetor[i])
        }

        if(vetor[i] % 2 == 0 && vetor[i] % 3 == 0){
            mult2e3.push(vetor[i])
        }

    }
    //saida
    document.getElementById(`result`).innerHTML=`Numeros Digitados = ${vetor} <br> 
    Numeros multiplos de 2 = ${mult2} <br>
    Quantidade numeros multiplos de 2 ${mult2.length} <br> 
    Numeros multiplos de 3 = ${mult3} <br>
    Quantidade numeros multiplos de 3 ${mult3.length} <br> 
    Numeros multiplos de 2 e 3= ${mult2e3} <br>
    Quantidade numeros multiplos de 2 e 3 ${mult2e3.length} <br> `
}