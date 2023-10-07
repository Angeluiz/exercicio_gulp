const somar = require('./soma');
const menos = require('./subtracao');
const vezes = require('./multiplicacao');

console.log('A soma de 20+20 é: ', somar(20, 20));

console.log('A subtração de 70-50 é: ', menos(70, 50));

console.log('A multiplicação de 50*90 é: ', vezes(50, 90));