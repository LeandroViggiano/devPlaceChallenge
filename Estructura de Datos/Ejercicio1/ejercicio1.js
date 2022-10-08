/*1)Implementar una función que recibe una lista de enteros L y un número entero n de forma
que modifique la lista mediante el borrado de todos los elementos de la lista que tengan este
valor*/

var L = [1, 2, 2,2,2,2,2, 2, 2, 2, 2, 3, 4, 5, 3];
var n = 2;

function reemplazar(L, n) {
  for (let i = 0; i < L.length; i++) {
    for (let j = 0; j < L.length; j++) {
      if (L[i] == n) {
        L.splice(i, 1);
        console.log("eliminado");
      }
    }
  }
}
reemplazar(L, n);
console.log(L);
