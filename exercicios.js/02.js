function triangulo (a, b, c) {
    
        if (a == b && b == c) {
            console.log('O triangulo é Equilátero')
        } else if (a == b || a == c || b == c) {    
            console.log('O triangulo é Isosceles')
        } else
            console.log('O triangulo é Escaleno')
        }
    

    triangulo(3, 3, 3)

    
    
    
  