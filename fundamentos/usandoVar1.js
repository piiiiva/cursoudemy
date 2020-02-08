{ 
    { 
        { 
            { 
                var sera = 'Será ???' 
                console.log(sera)
            } 
            /* Essa Var sera pode ser acessa fora do escopo da seçao
                sendo que {} teoricamente definem o escopo, entretanto para variavel var
                só exitem dois escopos, global e funçao
                SEMPRE QUE CRIAR UMA VARIAVEL var FORA DE UMA FUNÇAO ELA SERÁ GLOBAL
                logoooo todos podem acessar essa variável e alterar ela, até mesmo eu posso alterar sem querer
                e gerar possíveis bugs*/
            /* Evitar criar variáveis var que vão par o escopo global */
        } 
    
    }    
    
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) // ERRO! nao consigo acessar a variável fora do escopo dela

