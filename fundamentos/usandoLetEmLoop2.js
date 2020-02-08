const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })

}

funcs[2]()
funcs[6]()
funcs[8]()

/* Foi criando uma const funcs com array vazio, depois foi criado um laço for
definindo a variável let i = 0 e enquanto i for menor que 10 eu acrescento 
+1 toda vez { ai foi chamado funcs e adicionado valor nela com .push foi adicionado
uma function sem nome com a funçao sendo console.log(i)} dessa forma foram gerados
vários valores para i, cada vez que executa o for ele puxa o valor de i definido
pelo let i e atualizado pela function() até que i >= 10 quando ele sai do
laço for.
Depois eu executeio funcs() e defini quais os valores que eu queria saber dentro do array
valor 2 denro do array de funcs() 
Lembrando que com var não da pra fazer isso, pq o var nao tem memória dos valores de i */ 