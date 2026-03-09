// Calculadora só para teste para eu treinar subir e alterar. 

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicarSuper(a, b) {
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
console.log("Subtração: 9 - 4 =", subtrair(9, 4));
console.log("Multiplicação: 6 x 7 =", multiplicarSuper(S6, 7));
console.log("Divisão: 20 / 4 =", dividir(20, 4));
console.log("Divisão por zero:", dividir(10, 0));