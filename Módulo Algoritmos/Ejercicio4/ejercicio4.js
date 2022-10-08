/* 4. Generar un número aleatorio comprendido entre 0 y 1000. Pedir, a continuación, al
usuario adivinar el número escogido por el ordenador. Para ello, debe introducir un
número comprendido entre 0 y 1000. Se compara el número introducido con el
calculado por el ordenador y se muestra en la consola "es mayor" o "es menor" en
función del caso. Se repite la operación hasta que el usuario encuentra el número.+
 */
var boton = document.getElementById("boton");
var divresultado = document.getElementById("divresultado");
var pista = document.createElement("h3");
divresultado.appendChild(pista);
var numeroAleatorio = Math.floor((Math.random() * (1000 - 0 + 1)) + 0);



boton.addEventListener("click", function () {
  var numeroUsuario = document.getElementById("numeroUsuario").value;
  if (numeroUsuario===numeroAleatorio) {
    pista.innerHTML = "Es el numero correcto"
  } else {
    if (numeroUsuario<numeroAleatorio) {
      pista.innerHTML = "Es mayor"
      console.log("Es mayor")
    } else {
      pista.innerHTML = "Es menor";
      console.log("Es menor")
    }
  }
});



