function Pessoa() {
    this.idade = 0

    setInterval(() => {
    this.idade++
    console.log(this.idade)
    }, 1000)
}

new Pessoa

// this dentro de uma => é fixo, o contexto em que a funçao foi chamada nao importa, o this sempre vai ser do contexto da =>
