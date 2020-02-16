const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00
// quando eu executo a falar() é como se eu estivesse pegando de outro escopo e nao da const pessoa,
// nesse caso o this é do escopo global e nele nao existe saudacao : 'Bom dia' da const pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) // o bind amarra o objeto para ser o escopo do this
falarDePessoa()

