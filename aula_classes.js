// Calculadora

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero. Você precisa refazer a operação!";
  }
  return a / b;
}

// Testando as funções
console.log("Soma: 5 + 3 =", somar(5, 3));
console.log("Subtração: 10 - 4 =", subtrair(10, 4));
console.log("Multiplicação: 6 x 7 =", multiplicar(6, 7));
console.log("Divisão: 20 / 4 =", dividir(20, 4));
console.log("Divisão por zero:", dividir(10, 0));