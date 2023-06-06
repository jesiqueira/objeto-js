// Utilize o foreach na string abaixo
// some os valores de taxa e os valores de recebimentos

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 39",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", ""); // + para converter em número
  if (item.descricao.slice(0, 4) === "Taxa") {
    taxaTotal += numeroLimpo;
  } else {
    recebimentoTotal += numeroLimpo;
  }
});

console.log(`Taxa Total: ${taxaTotal}`);
console.log(`Recebimento Total: ${recebimentoTotal}`);

// Retorne um array com a lista abaixo.
const transporte = "Carro; Avião; Trem; Ônibus; Bicicleta";

const arrayTransporte = transporte.split(";");
console.log(arrayTransporte);

//substitua todas as span's por a's

let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a");
console.log(html);

//Retorne o ultimo caracter da frase
const frase = "Melhor do ano!";

console.log(frase[frase.length - 1]);
console.log(frase.slice(-1));

//retorne o tatal de taxas
const transporte2 = [
  "Taxa do Banco",
  "TAXA DO PÂO",
  " taxa do mercado",
  "depósuto Bancário",
  "TARIFAS especial",
];

let taxasTotal = 0;
transporte2.forEach((item) => {
  item = item.toLocaleLowerCase();
  item = item.trim();
  item = item.slice(0, 4);
  if(item === 'taxa'){
    taxasTotal++
  }
});
console.log(taxasTotal);
