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

// [].find() e [].findIndex()
// [].find(), retorna o valor atual da primeira iteração que retornar um valor thuthy. Já o [].findindex(), ao invés  de retornar o valor, retorna o index deste valor no array

const frutas = ["Banana", "Pêra", "Uva", "Maçã"];

const buscaUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
});

console.log(buscaUva);

const numeros2 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros2.find((x) => x > 45);
console.log(buscaMaior45);

// [].filter()
// [].filter(), retorna uma array com a lista  de valores que durante a sua iteração  retornaram um valor verdade
const frutaS = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];

const arrayLimpa = frutaS.filter((fruta) => {
  return fruta;
});

console.log(arrayLimpa);

const numeroS = [1, 63, 22, 88, 101, 29, 47];
const buscarMaior47 = numeroS.filter((x) => x > 46);
console.log(buscarMaior47);
