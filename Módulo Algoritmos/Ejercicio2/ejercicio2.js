/* Escribe una aplicación que solicite al usuario que ingrese una contraseña cualquiera.
Después se le pedirá que ingrese nuevamente la contraseña, con 3 intentos. Cuando
acierte ya no pedirá más la contraseña y mostrará un mensaje diciendo “Felicitaciones,
recordás tu contraseña”. Si falla luego de 3 intentos se mostrará el mensaje “Tenes que
ejercitar la memoria”. Los mensajes quedarán en pantalla a la espera que el usuario
presione una tecla, luego de esto se cerrará el programa.
 */

var center = document.getElementById("center");
var divresultado = document.getElementById("divresultado");
var titulo = document.getElementById("titulo");
var boton = document.getElementById("boton");
var contrasena = "2";
var contrasena1;
var intentos = 0;
var resultado;
var cerrar=false;


boton.addEventListener("click", function () {
  intentos++;
  if (contrasena == "2") {
    contrasena1 = document.getElementById("contrasena").value;
    resultado = document.createElement("h2");
    divresultado.appendChild(resultado);
    intentos = 0;
    document.getElementById('contrasena').value = ''
  }
  
  contrasena = document.getElementById("contrasena").value;
  if (intentos===0) {
    contrasena="1";
  }
  titulo.innerHTML = "Prueba de memoria. \n Volvé a ingresar tu contraseña";
  boton.innerHTML = "Ingresar intento";

  
  if (contrasena === contrasena1) {
    resultado.innerHTML = "Felicitaciones, recordás tu contraseña";
    center.removeChild(boton);
    cerrar=true
  }
  if (intentos === 3) {
    resultado.innerHTML = "Tenes que ejercitar la memoria";
    center.removeChild(boton);
    cerrar=true
  }
  boton.setAttribute(
  "onclick",
  "document.getElementById('contrasena').value = ''"
);

});
