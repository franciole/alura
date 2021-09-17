// tipo number

const meuNumero =  3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero / segundoNumero;
console.log(operacaoMatematica);

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao =  numeroPontoFlutuante / pontoFlutuanteSemZero;
console.log(novaOperacao);

// NaN -> Not A Number ( não é um número )
const alura = 'Alura';
console.log(alura * primeiroNumero);



function ganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes); 
  // return Math.round(salarioHora);
//   const total = salarioHora.toFixed(2);
//   return total;
  const formatado = salarioHora.toLocaleString('pt-BR', { style: 
    'currency', currency: 'BRL'});
  return formatado;
}
console.log(ganhoPorHora(3000, 176));