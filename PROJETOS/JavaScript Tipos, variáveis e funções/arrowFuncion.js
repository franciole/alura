function apresentar(nome) {
  return `Meu nome é ${nome}`;
}

const apresentarArrow = (nome) => `Meu nome é ${nome}`;
const soma = (n1, n2) => n1 + n2;

const somaNumerosPquenos = (n1, n2) => {
  if (n1 || n2 > 10) {
    return "somente número de 1 a 9";
  } else {
    return n1 + n2;
  }
};
