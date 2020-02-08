// Operadores relacionais resultado sempre será false || True
/* 
* == igual
* === estritamente igaual
* != diferente
* !== estritamente diferentes
*/

console.log('01)', '1' == 1) // true
console.log('02)', '1' === 1) // falso pq o primeiro é string
console.log('03)', '3' != 3) // false
console.log('04)', '3' !== 3) // true pq o tipo do '3' é string

console.log('05)', 3 < 2) // false
console.log('06)', 3 > 2) // true
console.log('07)', 3 <= 2) // false
console.log('08)', 3 >= 2) // true

const d1 = new Date(0) // 0 significa data de referencia 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // false ele nao esta comparando a data e sim o objeto criado e seu endereço de memória
console.log('10)', d1 == d2) // false
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false
