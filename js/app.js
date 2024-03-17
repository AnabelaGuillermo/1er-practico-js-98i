"Use strict"

// Ejercicio 1
alert("un mensaje");

// Ejercicio 2
document.write("Hello World");

// Ejercicio 3
document.write("<br>");
document.write("3 + 5 = ", 3+5 + "<br>");

// Ejercicio 4
let respuesta4 = prompt("Ingrese usuario");
document.write ("Hola " + respuesta4 + "<br>");

// Ejercicio 5
let num1 = parseInt(prompt("Suma / Introduce el primer número"));
let num2 = parseInt(prompt("Suma / Introduce el segundo número"));
document.write("La suma es: ", num1 + num2 + "<br>");

// Ejercicio 6
let numero1 = parseFloat(prompt("Comparación de números / Ingrese el primer número"));
let numero2 = parseFloat(prompt("Comparación de números / Ingrese el segundo número"));

if (numero1 > numero2) {
  document.write("El (" + numero1 + ") es el número más grande.");
} else if (numero2 > numero1) {
  document.write("El (" + numero2 + ") es el número más grande.");
} else {
  document.write("Los números son iguales.");
}
