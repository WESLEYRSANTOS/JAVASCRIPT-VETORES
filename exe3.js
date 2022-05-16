function calcular(){
 // entrada de dados
 let vetCodigos = [] // declaração de vetor
 let vetEstoque = [] // declaração de vetor
 for(let i=0;i<5;i++){
     // insere o código no vetor
     vetCodigos.push(Number(prompt(`Informe código do produto ${i+1}`)))
     // insere a qtde no vetor
     vetEstoque.push(Number(prompt(`Informe qtde do produto ${i+1}`)))
 }

 // tentar realizar uma compra
 let cliente = Number(prompt(`Informe código do cliente`))
 do {
     let codigo = Number(prompt(`Informe código do produto comprado`))
     let qtde = Number(prompt(`Informe qtde do produto comprado`))
     // verifica se o produto existe -> vamos percorrer o vetor
     let achei = false // não achei
     let posicao // posição do produto encontado
     for(let i=0;i<vetCodigos.length;i++){
         if (codigo == vetCodigos[i]){
             achei = true
             posicao = i
             break // sai do for
         }
     }
     if (!achei){ // não achei
         alert(`Código inexistente`)
     }
     else {
         // vamos verificar o estoque
         if (vetEstoque[posicao] - qtde < 0){
             alert(`Não temos estoque suficiente desta mercadoria`)
         }
         else {
             vetEstoque[posicao] = vetEstoque[posicao] - qtde // atualiza estoque
             alert(`Pedido atendido. Obrigado, volte sempre`)
             alert(`Estoque atualizado ${vetEstoque}`)
         }
     }
     cliente = Number(prompt(`Informe código de outro cliente. Digite 0 para encerrar`))
 }
 while (cliente != 0)
}