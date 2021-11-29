var metros = 1000;

var transporte = '';

if (metros > 0 && metros <= 1000) {

    transporte = 'a pie';

} else if (metros > 1000 && metros <= 10000) {

    transporte = 'en bicicleta';

} else if (metros > 10000 && metros <= 30000) {

    transporte = 'en auto';

} else if (metros > 30000 && metros <= 100000) {

    transporte = 'en avión';

}

console.log('Para ' + metros + ' metros se recomienda ir ' + transporte);