// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaracion de variable tipo array, almacenara nombres
let amigos = [];

// Declaracion variable validacion
let validarCampo = '';

/*** FUNCIONES ***/
// Funcion agregar nombres
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if(amigo == '') {
        alert('Error: Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo);
        limpiarCaja();
    }
    console.log(amigos);
    console.log(amigo);
    return;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}