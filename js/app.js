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
document.write("<br>");

// Ejercicio 7
let nro1 = parseFloat(prompt("Comparación de 3 números / Ingrese el primer número"));
let nro2 = parseFloat(prompt("Comparación de 3 números / Ingrese el segundo número"));
let nro3 = parseFloat(prompt("Comparación de 3 números / Ingrese el tercer número"));

if (nro1 < nro3 && nro2 < nro3) {
  document.write("El (" + nro3 + ") es el número más grande.");
} else if (nro1 < nro2 && nro3 < nro2) {
  document.write("El (" + nro2 + ") es el número más grande.");
} else if (nro2 < nro1 && nro3 < nro1) {
  document.write("El (" + nro1 + ") es el número más grande.");
} else {
  document.write("Los números son iguales.");
}
document.write("<br>");

// Ejercicio 8
let numero = prompt("¿Es divisible por dos? Introduce un número");

if (numero % 2 === 0) {
    document.write("El número " + numero + " es divisible por 2.");
} else {
    document.write("El número " + numero + " no es divisible por 2.");
}
document.write("<br>");

// Ejercicio 10
let nmero = prompt("¿Es divisible por 2, 3, 5 o 7? Ingresa un número");

if (nmero % 2 === 0) {
    document.write(nmero + " es divisible por 2.");
} else if (nmero % 3 === 0) {
    document.write(nmero + " es divisible por 3.");
} else if (nmero % 5 === 0) {
    document.write(nmero + " es divisible por 5.");
} else if (numero % 7 === 0) {
    document.write(nmero + " es divisible por 7.");
} else {
    document.write(nmero + " no es divisible por 2, 3, 5 ni 7.");
}
document.write("<br>");

