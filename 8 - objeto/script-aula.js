/*
  Objeto.defineProperties()
  Object .defineProperties(alvo, propriedade) adiciona ao alvos novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
*/

// const moto = {};

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false, //impede deletar e mudança de valor
//     enumerable: true,
//   },
//   capacete: {
//     value: true,
//     configurable: true,
//     writable: false, //Impede mudança de valor
//   },
// });

/*
  get e set
  É possível definir diferentes comportamentos  para get e set de uma propriedade. 
  Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos  ob.propriedade = 'valor' a função de set é ativada.
*/

const moto = {};

Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = "Velocidade " + valor;
    },
  },
});

moto.velocidade = 200;

console.log(moto);

/*
  Object,getOwnPropertyDescriptors(obj)
  Lista todos os métodos e propriedades de um objeto,com as suas devidas configurações.

*/

Object.getOwnPropertyDescriptors(Array); //lista métodos e propriedade do array

Object.getOwnPropertyDescriptors(Array.prototype); // lista métodos e propriedade do protótipo de Array

Object.getOwnPropertyDescriptor(window, "innerHeight"); // Puxa de uma unica propriedade

/*
  Object.key(obj), Object.values(obj) Object.entries(obj)
*/

Object.keys(obj); // retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto.
Object.values(obj); // retorna um array com os valores do objeto
Object.entries(obj); // retorna um array com array's contendo a chave e o valor.

Object.keys(Array); // [] vazia, pois não possui  propriedades enumeraveis

const carro = {
  marca: "Ford",
  ano: 2018,
};

Object.keys(carro); // ['marca', 'ano']
Object.values(carro); // ['Ford', 2018]
Object.entries(carro); // [['marca', 'ford'], ['ano', 2018]]


/*
  Object.freeze(), Obeject.seal(), Object.preventExtensions()
  Object.freeze() -> impede qualquer mudanças nas propreidades.
  Object.seal() -> previne a adicao de novas propriedades e impede que as atuais sejam deletadas
  object.preventExtensions() -> previne a adiçào de novas propriedades.
*/

  Object.freeze(carro)
  Object.seal(carro)
  Object.preventExtensions(carro)

  Object.isFrozen(carro) // true
  Object.isSealed(carro) // true
  Object.isExtensible(carro) // true

