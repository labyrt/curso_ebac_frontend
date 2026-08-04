// Classe-base: representa a abstração de um veículo.
class Veiculo {
    constructor(marca, modelo, ano) {
        if (new.target === Veiculo) {
            throw new Error('A classe Veiculo é abstrata e não pode ser instanciada diretamente.');
        }

        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    obterDescricao() {
        return `${this.marca} ${this.modelo}, ano ${this.ano}`;
    }

    exibirInformacoes() {
        return {
            tipo: this.constructor.name,
            marca: this.marca,
            modelo: this.modelo,
            ano: this.ano
        };
    }
}

// Primeira classe herdeira.
class Carro extends Veiculo {
    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano);
        this.quantidadePortas = quantidadePortas;
    }

    exibirInformacoes() {
        return {
            ...super.exibirInformacoes(),
            detalhe: `${this.quantidadePortas} portas`
        };
    }
}

// Segunda classe herdeira.
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    exibirInformacoes() {
        return {
            ...super.exibirInformacoes(),
            detalhe: `${this.cilindradas} cilindradas`
        };
    }
}

// Criação de três instâncias de objetos.
const carroPopular = new Carro('Volkswagen', 'Gol', 2020, 4);
const carroEsportivo = new Carro('Chevrolet', 'Camaro', 2023, 2);
const motoUrbana = new Moto('Honda', 'CG 160', 2024, 160);

const veiculos = [carroPopular, carroEsportivo, motoUrbana];

function criarCartao(veiculo) {
    const informacoes = veiculo.exibirInformacoes();

    return `
        <article class="veiculo">
            <h3>${informacoes.tipo}</h3>
            <dl>
                <dt>Marca</dt><dd>${informacoes.marca}</dd>
                <dt>Modelo</dt><dd>${informacoes.modelo}</dd>
                <dt>Ano</dt><dd>${informacoes.ano}</dd>
                <dt>Detalhe</dt><dd>${informacoes.detalhe}</dd>
            </dl>
        </article>
    `;
}

function apresentarVeiculos() {
    // Exibe os três objetos no console, mesmo ao executar o arquivo com Node.js.
    veiculos.forEach((veiculo) => console.log(veiculo.obterDescricao()));

    // Exibe os objetos na página quando o código é aberto no navegador.
    if (typeof document !== 'undefined') {
        const listaVeiculos = document.getElementById('lista-veiculos');
        listaVeiculos.innerHTML = veiculos.map(criarCartao).join('');
    }
}

apresentarVeiculos();

// Permite importar e testar as classes com Node.js.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Veiculo, Carro, Moto, veiculos };
}
