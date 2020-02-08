// e, ou, ou exclusivo e negaçao lógica !lógica

/* 2 trabalhos, terça e quinta trabalho 1 e trabalho 2
se trabalho 1 e 2 derem certos = comprar tv 50pol e tomar sorvete
se apenas 1 trabalho der certo = comprar tv 32pol e tomar sorvete
se nenhum trabalho der certo = nada, fica mais saudável
e = comprar tv 50 --> &&
ou exclusivo = tv 32 --> ||
ou = sorvete
!negacao = saudável
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const materSaudavel = !comprarSorvete
    return { comprarSorvete, comprarTv50, comprarTv32, materSaudavel } 
    /* return volta 1 valor só entao foi criado um objeto pra ele voltar o objeto. 
    Nota: nao preciso fazer comprarSorvete: comprarSorvete .... pq é redundante,
    o Js deixa criar direto
    */
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))