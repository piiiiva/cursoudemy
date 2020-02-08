// nesse caso como usa o a variavel let e ela possui escopo de bloco além de funcao e global
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// FUJA DO ESCOPO GLOBAL

// var --> Escopo global e funcao --> Pode ser redeclarado e reatribuido
// let --> Escopo global, funcao e bloco {} --> nao pode ser redeclarado no mesmo escopo, mas pode ser reatribuido
// const --> Escopo global, funcáo e bloco {} nao pode ser redeclarado e nem reatribuido
