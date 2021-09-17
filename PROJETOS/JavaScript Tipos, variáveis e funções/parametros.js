// parametros na função

function soma(numero1, numero2) {
  return numero1 + numero2;
}

// console.log(soma(2, 2));
// console.log(soma(245, 20));
// console.log(soma(-500, 60));

// function nomeIdade(nome, idade) {
//   return `Menu nome é ${nome} e miha idade é ${idade}`;
// }

// console.log(40, "Juliana");

function multiplica(n1, n2) {
  return n1 * n2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));


function comParametro(param) {
  console.log(param)
}
comParametro()