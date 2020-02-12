// Posso armazenar uma function em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, 0, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' } // quando eu chamo um atributo que nao existe em um objeto eu posso criar e atribuir valor. Nesse caso uma função
console.log(obj.falar())

// Passar function como parametro de uma function
function run (fun) {
    fun()
}

// Uma function pode retornar/conter uma function
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(1) // primeiro ( valores para a e b) segundo (valor de c)
const somadafuncdesoma = soma(2, 3)
somadafuncdesoma(1)
