
function pessoa (nome) { // vai ter que usar o this em funcao construtora
    this.nome = nome
    this.falar = function() {
             console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new pessoa('João')
p1.falar()

