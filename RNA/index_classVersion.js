class RNA {
    calcular(pesos, entradas, vies = false) {
        const result = pesos.map((peso, i) => entradas[i] * peso + (!vies ? 0 : vies[i]))
        return result.reduce((acc, current) => acc + current)
    }

    randpesos(...entradas) {
        const min = Math.ceil(-1000)
        const max = Math.floor(1000)
        return entradas[0].map(entrada => entrada = Math.floor(Math.random() * (max - min + 1)) + min)
    }

    entradas(_entradas) {
        return new Neuronio(_entradas)
    }

    createNeuronios(entrada, contia) {
        return Array(contia).fill(0).map(_ => this.entradas(entrada))
    }

    saidas(neuronios, fn, contia) {
        return Array(contia).fill(0).map(_ => this.entradas(neuronios.map(entrada => entrada.saida(fn))))
    }

    setPesos(neuronio, pesos) {
        return neuronio.map((neuro, index) => neuro.pesos = pesos[index])
    }

    genConcat(...neuronios) {
        return neuronios.map(gen => gen.map(g => g.pesos))
            .reduce((acc, current) => acc.concat(current))
            .reduce((acc, current) => acc.concat(current))
    }
    
    splitGen(genoma, neuronioQuantia, entradaQuantia) {
        return Array(neuronioQuantia).fill().map(_ => genoma.splice(0, entradaQuantia)) 
    }
}

class Neuronio extends RNA {
    constructor(entradas) {
        super()
        this._entradas = entradas
        this._pesos = this.randpesos(this._entradas) || [0]
    }

    get vies() {
        return this._vies
    }

    set vies(valor) {
        this._vies = valor || false
    }
     get pesos() {
        return this._pesos
    }

    set pesos(valor) {
        this._pesos = valor || []
    }

    saida(callback = value => value) {
        return callback(this.calcular(this._pesos, this._entradas, this._vies = false))
    }
}

class Genetica extends RNA {
    softmax(genoma) {
        const gens = genoma.map(x => Math.exp(x - Math.max(...genoma)))
        return gens.map(y => y / gens.reduce((acc, current) => acc + current))
    }

    mutar(genoma, vezes = 1) {
        if (vezes <= 0) vezes = 1

        const indexList = Array(vezes).fill(0).map(vez => Math.floor(Math.random()*genoma.length)) 
        const filho = genoma.map((gen, index) => indexList.includes(index) ? this.randpesos([0])[0] : gen)
        return filho
    }

    crossover(genoma1, genoma2, index) {
        return [
            genoma1.slice(0, index).concat(genoma2.slice(index)),
            genoma2.slice(0, index).concat(genoma1.slice(index))
        ]
    }
    
}

//funções de ativação
const ReLU = valor => ((valor < 0) ? 0 : valor)
const Sigmoid = valor => 1.0 / (1.0 + Math.exp(-valor))

//redes:
const entradas = [200, 15, 8]

const rede = new RNA()
const neuronios = rede.createNeuronios(entradas, 2)
rede.setPesos(neuronios, [[100, 1, 5], [-200, 5, 10]])

const ocultas = rede.saidas(neuronios, ReLU, 2)
rede.setPesos(ocultas, [[1, 500], [0, -500]])

console.log('Entradas:', entradas)
console.log('Pesos:', {
    'Neuronios 1': neuronios[0].pesos,
    'Neuronios 2': neuronios[1].pesos,
    'Ocultas 1': ocultas[0].pesos,
    'Ocultas 2': ocultas[1].pesos,
})
console.log('Saida 1:', ocultas[0].saida())
console.log('Saida 2:', ocultas[1].saida())

const genoma = rede.genConcat(neuronios, ocultas)
console.log('Genoma:', genoma)

console.log(rede)
console.log(neuronios)
console.log(ocultas)

//Algoritmio genetico
const genetica = new Genetica()
const filhos = genetica.crossover(genoma, [0, 99, 8, 101, 2, 11, 11, 800, 0, -7], 3)
console.log('Filhos:', filhos)

const mutante = genetica.mutar(genoma, 4)
console.log('Mutante:', mutante)

const softmax = genetica.softmax(genoma)
console.log(softmax)

