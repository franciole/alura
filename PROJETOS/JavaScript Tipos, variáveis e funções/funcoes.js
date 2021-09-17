let x = "";
console.log(x);
x = "oi";

// 1) Declara a função
function imprimeTexto(texto) {
  console.log(texto);
}

// 2) Executa a função (1 ou + vezes)

// imprimeTexto("Oi");
// imprimeTexto("Outro texto");
imprimeTexto(soma());

function soma() {
  return 2 + 2;
}


let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

const exibeLista = (lista, descricao) => {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
        }
        return e;
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))