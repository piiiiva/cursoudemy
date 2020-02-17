function exponenciacao (a, b) { 
    return (console.log(a ** b))   
} 

exponenciacao(2, 3)

function exponenciacao2(a, b) {
    return console.log(Math.pow(a, b))    
}

exponenciacao2(3, 3)



function exponenciacao3 (base, expoente) {
    this.base = 1
    this.expoente = 1    
    return console.log(base ** expoente)
}

exponenciacao3(2, 4)