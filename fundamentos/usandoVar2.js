/* 
O problema de utilizar var em um escopo global!
Apesar de ser definido a var numero dentro e fora do {}, como ela não está dentro de uma  function
e eu atribui o valor 2 para var numero dentro de {} esse valor foi atribuido para todo o escopo global do código
por isso deve-se evitar de usar utilizar variaveis var quer estejam disponível no escopo global
Com as variaveis let funciona diferente
*/

var numero = 1
    {
        var numero = 2
        console.log('dentro =', numero)
    }
console.log('fora =', numero)