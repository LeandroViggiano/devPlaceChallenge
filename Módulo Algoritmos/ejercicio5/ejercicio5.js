/* 5. Pedir al usuario que ingrese un número repetidamente hasta que ingrese un -1 y en ese
caso se terminará el programa.
Al terminar, mostrará lo siguiente:
a. – mayor número introducido
b. – menor número introducido
c. – suma de todos los números
d. – suma de los números
 */
var boton = document.getElementById("boton");
var divresultado = document.getElementById("divresultado");

var numeros = 0;
var numeroMayor = Math.max();
var numeroMenor = Math.min();

var numero = 0;

var total = document.createElement("h3");
var mayor = document.createElement("h3");
var menor = document.createElement("h3");
divresultado.appendChild(total);
divresultado.appendChild(mayor);
divresultado.appendChild(menor);

//do {

boton.addEventListener("click", function () {
  numero = document.getElementById("numero").value;
  numeros = numeros + parseInt(numero);
  if (numero > numeroMayor) {
    numeroMayor = numero;
  }
  if (numero < numeroMenor) {
    numeroMenor = numero;
  }
  if(parseInt(parseInt(numero)===-1)){
    center.removeChild(boton);
    console.log("Me elimino");
    numeros++;
  }
  total.innerHTML = ("El total de la suma de los numeros es: " + numeros);
  mayor.innerHTML = ("El numero mayor de todos los numeros es: " + numeroMayor);
  menor.innerHTML = ("El numero menor de todos los numeros es: " + numeroMenor);
  
});

//} while (numero!=-1);
