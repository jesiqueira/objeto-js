//crie uma função que verifique o tipo corretamente do dado

function verificarDados(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(verificarDados([]));

// crie um objeto do tipo quadrado com a propriedade lados  e torne ela imutavel

const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  },
});

quadrado.lados = 10; // não vai mudade por que writable é false
console.log(quadrado);

// Previna qual quer mudança no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao); //conjela o objeto não permite remover nem editar objeto
console.log(delete configuracao.width);


// Liste o nome de todas as propriedades do  protótipo de string  e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));