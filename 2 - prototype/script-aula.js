function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  console.log("Pessoa andou");
};

const edmar = new Pessoa("Edmar", 32);

console.log(Pessoa.prototype);
console.log(edmar.prototype);

const lista = document.querySelector("li");

//Transforma em array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar(){
    return 'oi'
  }
};
