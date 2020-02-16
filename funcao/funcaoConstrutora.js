// funçao construtora serve para criaçao de objetos, funciona como uma classe

function carro(velocidadeMaxima = 200, delta = 5) { // delta seria o indice de aceleracao do carro
    // atributo privado, pertence apenas ao escopo da func carro
    let velocidadeAtual = 0

    // método público usando o this
    this.acelar = function () { // com o this eu posso chamar o acelar fora da funçao
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
            
    }

    // método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new carro
uno.acelar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20) // setando os atributos de carro diferente do padrao velocidadeMaxima=200 e delta=5
ferrari.acelar()
ferrari.acelar()
ferrari.acelar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof carro)
console.log(typeof ferrari)