function criarProduto (nome, preco) {
    return {
        nome,
        preco, // nao usei preco: preco pq ja foi definido preco como atributo la emcima
        desconto: 0.1 // aqui foi colocado dessa forma pq nao foi definido como atributo la no (). Quando já foi definido nao precisa usar esse tipo
    }    
}

console.log(criarProduto("Notebook", 2199.49))
console.log(criarProduto("Ipad", 1199,99))