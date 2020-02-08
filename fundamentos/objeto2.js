console.log(typeof Object) // function
console.log(typeof new Object) // Object - quando uso new eu instancio a minha funçao Object e se torna um objeto
// instanciar uma funçao é o mesmo que criar um object, e para instanciar usa new por exemplo

const Cliente = function() {}
console.log(typeof Cliente) // Function
console.log(typeof new Cliente) // Object

class Produto {}  // ES 2015 (ES6)
console.log(typeof Produto) // Function
console.log(typeof new Produto) // Object

/* Object, Function e class são funçoes, atribuidos valores a eles passam
a ser considerados como object */

/* Uma instância de uma função é um objeto cujos atributos e comportamentos 
são definidos por essa função. Fazendo um paralelo com a vida real uma função 
em javascript seria como uma fôrma de bolo e cada bolo que é feito com ela 
seria uma instância dessa fôrma, entendeu?

Trazendo novamente para a programação, se eu tenho uma classe (que em 
javascript é uma função) chamada Carro. Essa classe tem como atributos, 
modelo, ano, velocidade máxima. E à partir dessa função eu crio um carro     
cujo modelo é gol, ano 2019, velocidade máxima 160 km/h, e também crio um     
carro cujo modelo é logan, ano é 2018, velocidade máxima 150 km/h. O gol     
é uma instância de carro e o Logan é outra instância de carro. */       

