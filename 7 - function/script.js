const perimetro = new Function("lado", "return lado * 4");

// function.call()
/* function.call(this, arg1, arg2, arg3, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.  */

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };
// function descricaoCarro(){
//   console.log(this);
//   console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro() // undefined undefined
// descricaoCarro.call() //undefined undefined
// descricaoCarro.call(carro) // Ford 2018

// const carros = ["Ford", "Fiat", "WV"];

// carros.forEach.call(carros, (carro) => {
//   console.log(carro);
// });

// const frutas = ["Laranja", "Banana", "Uva"];

// frutas.forEach.call(carros, (item) => {
//   console.log(item);
// });

// console.log("+------------------+");
// Exemplo real

/* O objeto atibuido a lista será o subtituído pelo primeiro argumento de call() */

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   this.element.classList.add(classe);
// };

// const ul = new Dom("ul");

// const li = {
//   element: document.querySelector("li"),
// };

// Dom.prototype.ativo.call(li, "ativo");

// function apply()
/* O apply(this, [arg1, arg2, arg3, ...]) funciona como a call, a única diferença é que os argumentos da funções são passadas como Array*/

// const numeros = [3, 4, 8, 6, 7, 9];
// Math.max.apply(null, numeros);
// Math.max.call(null, 2, 3, 4, 5, 7);
//Podemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar

//apply vs call
// a unica diferença é a array como segundo argumento

// const li = document.querySelector("li");
// function itemPossuiAtivo(item) {
//   return item.classList.contains("ativo");
// }

// const filtro1 = Arrray.prototype.filter.call(li, itemPossuiAtivo);
// const filtro2 = Arrray.prototype.filter.apply(li, [itemPossuiAtivo]);

/* 
function.bind()
A diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função e sim retornar a mesma com o novo contexto de this.
*/
const li = document.querySelectorAll('li')
const arrayLi = Array.from(li);

const filtro = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains("ativo");
});

console.log(filtro());
