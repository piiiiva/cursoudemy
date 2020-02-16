let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true, o this varia conforme o contexto em que a funcçao foi chamada, no caso no contexto global aqui

const obj = {}
comparaComThis = comparaComThis.bind(obj) // bind amarra o this ao objeto sempre
comparaComThis(global) // false, por causa do bind atribuido a comparaComThis
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param) // functions => sempre amarram o this nela, sempre que chama a funçao o contexto do this será o da funçao
comparaComThisArrow(global)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // nao adianta tentar usar o bind em uma => por que ela tem preferencia sobre o bind
comparaComThisArrow(module.exports)