const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
//remova o primeiro valor de comida e coloque em uma variável
//remova o último valor de comida e coloque em uma variável
//adicione 'arroz' ao final da array
//adicione 'peixe' e 'batata' ao inicio da array


const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop()
comidas.push('Arroz')
comidas.unshift('Peixe', 'Batata')

console.log(primeiroValor);
console.log(ultimoValor);
console.log(comidas);


const estudante = ["Marcio", "Brenda", "Joana", "Kleber", "Juliana"];
// Arrume os estudantes em ordem alfabética
// inverta a ordem dos estudantes
// verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudante.sort()
estudante.reverse()
console.log(estudante.includes('Joana'));
console.log(estudante.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

// Substitua section por ul e div com  li,
// utilizando split e join

html = html.split('section')
html = html.join('ul')
html = html.split('div')
html = html.join('li')
console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover salve o array original em outra variável

const carrosCopia = carros.slice()
carros.pop()
console.log(carros);
console.log(carrosCopia);
