//selecione cada curso e retorne um array
// com objetos contendo o titulo, descricao aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(objetosCurso);

// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter((numero) => numero > 100);
console.log(maioresQue100);

// Verifique se Baixo  faz parte da lista de instrumento e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const possuiBaixo = instrumentos.some((item) => {
  return item === "Baixo";
});
console.log(possuiBaixo);

// Retorne o valor total de compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Queijo",
    preco: "R$ 10,60",
  },
];

let totalCompras = 0;

compras.forEach((compra) => {
  totalCompras += +compra.preco.replace("R$", "").replace(",", ".");
});

console.log(
  totalCompras.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$", "").replace(",", ".")
  return acumulador + precoLimpo
}, 0);

console.log(valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
