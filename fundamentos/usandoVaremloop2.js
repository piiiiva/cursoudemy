const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // funcs() eu estou chamando para executar a constante e [] estou solicitando o valor do item 2 dentro do array
funcs[8]()
/* nao entendi direito, mas quando usa var é como se funcs ficasse sem a 
memória de i, vai rodar toda a funcs com a function console.log(i) até atender
as condiçoes de var i e vai chegar em i = 10 quando sai do laço e como var
nao guarda memória, o i nessa parte do código vai ser sempre 10, nao consegue
puxar o valor de i na posiçao 2 ou 8 dentro do array */ 


/*
O loop funciona da seguinte forma:
1.Declara a variável let i = 0;
2. verifica a condição i < 10
3. executa o bloco de código se for verdade
4. incrementa a variável i
Então o valor fica 10, pois na execução do 9 ele verifica se 9 é 
menor que 10, executa o bloco de código e por fim incrementa a 
variável i que vira 10
*/