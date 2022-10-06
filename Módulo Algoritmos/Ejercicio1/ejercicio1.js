var divresultado = document.getElementById("divresultado");
var boton = document.getElementById("boton");
var numero;
function esPrimo(numero) {
  var b = true;
  if (numero > 1) {
    for (let i = 2; i <= numero - 1; i++) {
      if (numero % i == 0) {
        b = false;
      }
    }
  } else {
    b = true;
  }
  return b;
}

boton.addEventListener("click", function () {
  numero = parseInt(document.getElementById("numero").value);
  var h = esPrimo(numero);
  if (h) {
    var resultado = document.createElement("p");
    resultado.innerHTML = "El numero " + numero + " es primo";
    divresultado.appendChild(resultado);
    resultado.className = "text";
  } else {
    var resultado = document.createElement("p");
    resultado.innerHTML = "El numero " + numero + " no es primo";
    divresultado.appendChild(resultado);
    resultado.className = "text";
  }
});
