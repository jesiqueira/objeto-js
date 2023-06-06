//crie uma função construtora de Pessoa
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome} ${this.idade}`;
};

const edmar = new Pessoa("edmar", "siqueira", 32);

// liste os métodos acessados por
// dados criados com Nodelist,
// HTMCollection, Document
console.log(NodeList.prototype);

console.log(HTMLAllCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// liste os construturoes dos dados abaixo

const li = document.querySelector("li");
li;
li.click;
li.innerHTML;
li.value;
li.hidden;
li.offsetLeft;
li.click();

//qual o construtor do dado abaixo
li.hidden.constructor.name;
