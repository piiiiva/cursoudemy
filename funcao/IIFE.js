// IIFE -> Immediately Invoked Function Expression
// é uma função autoinvocada

(function() {
    console.log('Será executado na hora!')
    console.log('Fungindo do escopo mais abrangente')
})() // serve para fugir do escopo global

// Elas são utilizadas na criação de bibliotecas para evitar que suas variáveis não estejam presentes no escopo global de programação!
