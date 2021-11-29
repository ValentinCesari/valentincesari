var numeros = [25, 50, 300, 17, 31, 68]

var mayor = 0;

for (var i = 0; i < numeros.length; i++) {

    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }

}

console.log('El mayor de ' + numeros + ' es ' + mayor);