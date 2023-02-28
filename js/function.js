/** 
// Definimos la funcion holaMundo
function holaMundo() {
    console.log("Hola Mundo!");
}

//Invocamos la funcion holaMundo
holaMundo();
*/

function sumar(a,b) {
    return (parseInt(a) + parseInt(b));
}

// /**

// console.log(sumar(3,4));
// */

// /**
// document.getElementById('boton').onclick = function () {
//     console.log("Capturamos el elemento click");
//     document.getElementById('demo').innerHTML = "Probando eventos en JS";
// }
// */

// /** A traves del evento EventListener (Siempre escuchando), al hacer click en 
// cualquier parte del documento imprimira en consola y cambiara el texto del id "demo"


// document.addEventListener('click', function(){
//     console.log("Hola mundo! AGREGADO DESDE EVENTO EVENTLISTENER");
//     document.getElementById('demo').innerHTML = "Probando eventos en JS";
// })

// Mismo ejemplo que el anterior pero busca unicamente eventos dentro del elemento con id "boton"

// */

// document.getElementById('boton').addEventListener('click', function(){
//     console.log("Hola mundo! AGREGADO DESDE EVENTO EVENTLISTENER");
//     document.getElementById('demo').innerHTML = "Probando eventos en JS";
// })

// // Agregamos un boton con el cual cambiamos el backgroundColor

// document.getElementById('b_bgc').addEventListener('click',function(){
//     console.log("Cambiando el color del BackGround!")
//     document.body.style.backgroundColor = 'red';
// })

// // Agregamos otro boton mas para reestablecer el color del backgroundColor



// document.getElementById('b_bgc_default').addEventListener('click',function(){
//     console.log("Reestableciendo el color del BackGround!")
//     document.body.style.backgroundColor = 'white';
// })

// // Agregamos un boton para modificar el estilo de la fuente a italic

// document.getElementById('b_italic').addEventListener('click',function(){
//     console.log("Se aplica estilo 'italic' ");
//     document.getElementById('demo').style.fontStyle = "italic";
// })

// // Agregamos un boton para reestablecer el estilo de fuente

// document.getElementById('b_italic_default').addEventListener('click',function(){
//     console.log("Reestableciendo el estilo de fuente!")
//     document.getElementById('demo').style.fontStyle = "normal";
// })

// const collection = document.getElementsByClassName('test');
// for ( let i = 0; i < collection.length; i++ ){
//     console.log("Cambiando backgroundColor de los parrafos con clase 'test'...");
//     collection[i].style.backgroundColor = "red";
// }

document.getElementById('sumar').addEventListener('click', function(){
    let numero_1 = document.getElementById('numero_1').value;
    console.log("El valor del numero A es: " + numero_1);

    let numero_2 = document.getElementById('numero_2').value;
    console.log("El valor del numero B es: " + numero_2);

    let resultado = sumar(numero_1,numero_2);
    console.log("El resultado de la suma es" + resultado);
    
    document.getElementById('resultado').innerHTML = resultado;

    document.getElementById('contenedor_resultado').style.display = "block";

})