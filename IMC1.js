//Reto de la Seamana 5: IMC (Índice de Masa Corporal)
// el objetivo de este reto es crear un programa en java script que calcule el indice de masa corporal (IMC)
//de una persona y que muestre el rango en el que se encuentra segun la clasificacion de la OMS.
// Instrucciones:
// solciitar al usuario su peso en kilogramos y su altura en metros.
// calcular el IMC utilizando la formula: IMC = peso / (altura * altura)
// mostrar el IMC con dos decimales.
//calsificar el IMC segun los rangos establecidos por la OMS y mostrar el resultado.
//por debajo del peso normal: IMC<18.5 peso normal: 18.5<=IMC<24.9 sobrepeso: 25<=IMC<29.9 obesidad grado 1
//30<=IMC<34.9 obesidad grado 2: 35<=IMC<39.9 obesidad grado 3: IMC>=40
//al ejecutar el codigo, obtener directamente en consola este texto:
//por favor, ingrese su peso en kilogramos:70
//por favor, ingrese su altura en metros:1.75
//su IMC es: 22.86 
//su IMC se clasifica como: peso normal


let peso = parseFloat(prompt("Por favor, ingrese su peso en kilogramos:"));
let altura = parseFloat(prompt("Por favor, ingrese su altura en metros:"));
let imc = peso / (altura * altura);
let clasificacion = "";

switch (true) {
    case (imc < 18.5):
        clasificacion = "Por debajo del peso normal";
        break;
    case (imc >= 18.5 && imc < 24.9):
        clasificacion = "Peso normal";
        break;
    case (imc >= 25 && imc < 29.9):
        clasificacion = "Sobrepeso";
        break;
    case (imc >= 30 && imc < 34.9):
        clasificacion = "Obesidad grado 1";
        break;
    case (imc >= 35 && imc < 39.9):
        clasificacion = "Obesidad grado 2";
        break;
    default:
        clasificacion = "Obesidad grado 3";
}
// Mostrar el resultado en la consola
alert("Su IMC es: " + imc.toFixed(2) + "\nSu IMC se clasifica como: " + clasificacion);


