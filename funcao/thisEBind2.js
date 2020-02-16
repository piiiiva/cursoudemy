/*function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // é bom usar pra fixar o this no objeto
}

new Pessoa */

/* function Pessoa() {
    Pessoa.idade = 0

    setInterval(function () {
        Pessoa.idade++
        console.log(Pessoa.idade)
    }, 1000) // nao consigo entender pq nao usar direto o nome da funcao e usar o this
}

new Pessoa */

function Pessoa() {
    this.idade = 0

    const self = this // posso criar uma const dentro do objeto para referenciar o this e chamar ele sem problemas sempre que quiser
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa