const carros = ["Ford", "Fiat", "Honda"];

carros.forEach((item, index, array) => {
  console.log(`${index} - ${item}`);
});

console.log("----------------Map--------------");

//Map mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

const newCarros = carros.map((item) => {
  return "Carro " + item;
});

const numeros = [1, 2, 3, 4, 5, 6];
const numeroX2 = numeros.map((numero) => numero * 2);
console.log(newCarros);
console.log(numeros);
console.log(numeroX2);

console.log("----------------Reduce--------------");

// Reeduce executa a função de callbrack para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador,
// mas é na verdade apenas o retorno da iteração anterior
// [].reduce(callback(acumulador, valor, index, array), valorInicial)

const aulas = [10, 25, 30];

const tatal1 = aulas.reduce((acumulador, atual) => {
  return acumulador + atual;
});

console.log(tatal1);

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
console.log(total2);

const numeros1 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros1.reduce((anterior, atual) => {
  if (anterior > atual) return anterior;
  else return atual;
}, 0);

console.log(maiorNumero);
