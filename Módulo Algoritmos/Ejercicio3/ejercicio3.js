/* 3. Por teclado se ingresa el valor hora de un empleado. Posteriormente se ingresa el
nombre del empleado, la antigüedad y la cantidad de horas trabajadas en el mes. Se
pide calcular el importe a cobrar teniendo en cuenta que al total que resulta de
multiplicar el valor hora por la cantidad de horas trabajadas. Además, si el empleado
tiene más de 10 años de antigüedad hay que sumarle la cantidad de años trabajados
multiplicados por $30. Imprimir en pantalla el nombre, la antigüedad y el total a cobrar.
 */
var boton = document.getElementById("boton");
var divresultado = document.getElementById("divresultado");
var sueldo
var sueldoMostrar = document.createElement("h3");
var nombreMostrar = document.createElement("h3");

boton.setAttribute(
  "onclick",
  "document.getElementById('contrasena').value = ''"
);

boton.addEventListener("click", function () {
  var valorHora = document.getElementById("valorHora").value
  var nombreEmpleado = document.getElementById("nombreEmpleado").value
  var antiguedadEmpleado = document.getElementById("antiguedadEmpleado").value
  var horasEmpleado = document.getElementById("horasEmpleado").value

  if (antiguedadEmpleado>10) {
    sueldo=valorHora*horasEmpleado+antiguedadEmpleado*30
  } else {
    sueldo=valorHora*horasEmpleado
  }
  sueldoMostrar.innerHTML = sueldo;
  nombreMostrar.innerHTML = nombreEmpleado;
  divresultado.appendChild(nombreMostrar)
  divresultado.appendChild(sueldoMostrar)
  

});



