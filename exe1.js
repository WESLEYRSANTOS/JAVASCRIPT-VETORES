function calcular(){

   
    let vetor = [] //cria um vetor --> lista --> array 
    let par = []
    let impar = []
    
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
        par.push(vetor[i])
        }

        else{   // impar
            impar.push(vetor[i])
        }

    }
    //saida
    document.getElementById(`result`).innerHTML=`Numeros Digitados = ${vetor} <br> 
    Numeros Pares = ${par} <br>
    Quantidade numeros Pares ${par.length} <br> 
    Numeros Impares = ${impar} <br>
    Quantidade numeros Impares ${impar.length} <br>`
}