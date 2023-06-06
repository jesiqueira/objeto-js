console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(4 + 4)); //false

console.log("+----------------------+");
console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(20.6)); //false

console.log("+----------------------+");
console.log(parseFloat("99.50")); //Mesma função sem o number
console.log(Number.parseFloat("99.50")); //99.5
console.log(Number.parseFloat("100 reais")); //100
console.log(Number.parseFloat("R$ 99.50")); //NaN

console.log(parseInt("99.50", 10)); //99
console.log(parseInt(5.43434355555, 10)); //5
console.log(Number.parseInt("100 Reais", 10)); //100

console.log("+----------------------+");
const preco = 10.32323;

console.log(preco.toFixed());
console.log(preco.toFixed());
console.log("+----------------------+");

let valor = 48.49;
let valor1 = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
let valor2 = valor.toLocaleString("en-US", { style: "currency", currency: "BRL" });
console.log(valor1);
console.log(valor2);

console.log("+----------MATH------------+");

console.log(Math.PI);

const aleatorio = Math.floor(Math.random()* 100)
const aleatorio1 = Math.floor(Math.random() * (40 - 20 + 1))  + 20
console.log(aleatorio);
console.log(aleatorio1);