// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaracion de variable tipo array, almacenara nombres
let amigos = [];

// Declaracion variable validacion
let validarCampo = '';



/*** FUNCIONES ***/
// funcion agregar nombres
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if(amigo == '') {
        alert('Error: Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo);
        limpiarCaja();
        lista(amigos);
        
    }
    return;
}

// funcion limpiar campo
/*Basado en clase en alura latam */
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

// funcion recorre array y agrega cada nombre como un elemento <li>
/*Para este codigo me base y ayude con los siguientes recursos:
 https://javascript.plainenglish.io/how-to-add-a-new-li-element-into-a-ul-on-click-of-an-element-with-javascript-d64c7143d9b8
 herramienta chatgpt
 */
function lista(amigos) {
   let lista = document.getElementById('listaAmigos');
   lista.innerHTML = ""; //Evitar que al colocar otro nombre se cree dos li uno con una copia del li anterior

   for(let amigo of amigos){
        let li = document.createElement("li");
        li.textContent =  amigo;
        lista.appendChild(li);
   }  
}

// funcion resultado sorteo

function sortearAmigo() {
    /*intente realizar condicion amigos.length == 0 pero habia error,
      asi que intente recorrer el array y en consola el error me decia no
      se puede iterar, asi que analise y es cierto estaba vacio, y al investigar
      mas obtuve que este objeto si esta vacio es undefined, asi que obtuve mi
      condicion para verificar que no este vacio el array 
      recursos: 
            https://trackjs.com/blog/debugging-cannot-read-property-length-of-undefined/
            https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/
            https://coreui.io/blog/how-to-check-if-an-array-is-empty-in-javascript/#:~:text=The%20most%20straightforward%20way%20to,length%20%3D%3D%3D%200)%20%7B%20console.
            https://ashallendesign.co.uk/blog/how-to-check-if-an-array-is-empty-in-javascript#:~:text=1.-,Using%20the%20length%20property%20with%20the%20%3D%3D%3D%20operator,the%20array%20as%20an%20integer.
            Se tuvo que utilizar recursividad como solucion de un proble entonces se baso en lo visto y aprendido :
                curso lógica de programación explorar funciones y listas
                    aula 04-Listas : video 3 Resolviendo la recursividad. 
      */
      let indice;
      let resultado = document.getElementById('resultado');
    if(!Array.isArray(amigos) || amigos.length === 0) {
        alert('No hay amigos');
        return; // Aqui corta la funcion, similar a un break en estructuras de repeticion.
    } 
    

        indice = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML =  `El amigo secreto sorteado es: ${amigos[indice]}`;

    // El siguiente codigo fue una solucion que me dio al investigar pero en consola me daba errores. Asi que lo cambie por el anterior, gracias a analizar.
    /* else if(Array.isArray(amigos)) {
        indice = Math.floor(Math.random() * amigos.length);
        
    }
    if (amigos.length > 0) {
        resultado.innerHTML = amigos[indice];
        return sortearAmigo(amigos); // Recursividad 
    } */

    let borrarLista = document.getElementById('listaAmigos'); // si hago la variable global me da error asi que la hice local.
    borrarLista.innerHTML = "";
    
}
