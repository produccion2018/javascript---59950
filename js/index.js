
//console.log("Hola mundo");

//let letra = 'a';

//console.log(letra);

// clase 01

// declaracion de variable - Reservo espacio de Moemoria

// empezamos usar lef para declarar variable

let nombreDeUsuario = "Mauro"
console.log ("nombreDeUsuario");

// valores primitivos


// hago la  declaración y Asignación
let miPrimerString ="pongo lo que quiera, si quiero usar 24682468";
console.log("miPrimerString");

//como hago declaración de Variable
let  nombreDeVariable;

//hago la asignación
nombreDeLaVariable = "lo que quiera";
// se pueden reasignar 


//declaramos nuestro primer Numero

//variables Primitivas
// del Tipo Constante
// constante nunca se le cambia el valor

const PI = 3.14;
const LETRA = 'A';
const ESPACIO ="";
const CARACTER = '@';


console.log (PI);
console.log (LETRA);
console.log (ESPACIO);
console.log (CARACTER);

//No se pueden reasignar 

// contante NO primitiva
// un estrin no es una variable primitiva
const StringContaste = " este es un estring  constante  y no me pueden reasignar ";




//Operaciones Variables y/o Contaste
// concatenación: (cadenas) sumas eslabones

let variablesConcatenadas = miPrimerString  + ESPACIO  +  StringContaste;
console.log (variablesConcatenadas);

// Concateno dentro de una funcion 
console.log (miPrimerString + ESPACIO + StringContaste);
console.log (miPrimerString + ' ' + StringContaste);
console.log (miPrimerString , StringContaste);




//operaciones matematicas
const CUATRO= 4;
const CINCO = 5;
const DIEZ = 10;

// Suma
let resultado = CUATRO + CINCO;
console.log (resultado)

// resta
resultado = DIEZ - CUATRO;
console.log (resultado)

// Multiplicación
resultado = DIEZ * CUATRO;
console.log (resultado)

// División
resultado = DIEZ / CINCO;
console.log (resultado)


/// prompt y Alert
const textoPrevioALprompt = "Ingrese su nombre"
const textoPosteriorALprompt = "No se olvide de ningun Nombre ! ";
const textoPrevio = " el nombre ingresado es ";

// El Prompt no admite la COMA para concatenar 

let nombreCompleto = prompt(textoPrevioALprompt + textoPosteriorALprompt );
console.log(nombreCompleto);

// El alert no acepta COMA para concatenar 
alert (textoPrevio + ESPACIO + nombreCompleto);


// prompt de Numeros
let numeroIngresado = prompt (" Ingrese un número ")

