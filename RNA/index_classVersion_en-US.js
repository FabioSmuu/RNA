class RNA {
    calc(weight, inputs, bias = []) {
        const result = weight.map((w, i) => inputs[i] * w  + (bias[i] || 0))
        return result.reduce((acc, current) => acc + current)
    }

    randWeight(...inputs) {
        const min = Math.ceil(-1000)
        const max = Math.floor(1000)
        return inputs[0].map(input => input = Math.floor(Math.random() * (max - min + 1)) + min)
    }

    inputs(_inputs) {
        return new Neuron(_inputs)
    }

    createNeuron(input, count) {
        return Array(count).fill(0).map(_ => this.inputs(input))
    }

    outputs(neuron, fn, count) {
        return Array(count).fill(0).map(_ => this.inputs(neuron.map(input => input.output(fn))))
    }

    setWeight(neuron, weight) {
        return neuron.map((n, index) => n.weight = weight[index])
    }

    genConcat(...neuron) {
        return neuron.map(gen => gen.map(g => g.weight))
            .reduce((acc, current) => acc.concat(current))
            .reduce((acc, current) => acc.concat(current))
    }

    splitGen(genome, neuronCount, inputCount) {
        return Array(neuronCount).fill().map(_ => genome.splice(0, inputCount)) 
    }
}

class Neuron extends RNA {
    constructor(inputs) {
        super()
        this._inputs = inputs
        this._bias = []
        this._weight = this.randWeight(this._inputs) || [0]
    }

    get bias() {
        return this._bias
    }

    set bias(value) {
        this._bias = value || []
    }
     get weight() {
        return this._weight
    }

    set weight(value) {
        this._weight = value || []
    }

    output(callback = value => value) {
        return callback(this.calc(this._weight, this._inputs, this._bias))
    }
}

class Genetics extends RNA {
    softmax(genome) {
        const gens = genome.map(x => Math.exp(x - Math.max(...genome)))
        return gens.map(y => y / gens.reduce((acc, current) => acc + current))
    }

    mutation(genome, count = 1) {
        if (count <= 0) count = 1

        const indexList = Array(count).fill(0).map(vez => Math.floor(Math.random() * genome.length)) 
        const children = genome.map((gen, index) => indexList.includes(index) ? this.randWeight([0])[0] : gen)
        return children
    }

    crossover(genome1, genome2, index) {
        return [
            genome1.slice(0, index).concat(genome2.slice(index)),
            genome2.slice(0, index).concat(genome1.slice(index))
        ]
    }
    
}

//funções de ativação
const ReLU = value => ((value < 0) ? 0 : value)
const Sigmoid = value => 1.0 / (1.0 + Math.exp(-value))

//redes:
const inputs = [200, 15, 8]

const rede = new RNA()
const neuron = rede.createNeuron(inputs, 2)
rede.setWeight(neuron, [[100, 1, 5], [-200, 5, 10]])

const hiddens = rede.outputs(neuron, ReLU, 2)
rede.setWeight(hiddens, [[1, 500], [0, -500]])

console.log('inputs:', inputs)
console.log('weight:', {
    'neuron 1': neuron[0].weight,
    'neuron 2': neuron[1].weight,
    'hiddens 1': hiddens[0].weight,
    'hiddens 2': hiddens[1].weight,
})
console.log('output 1:', hiddens[0].output())
console.log('output 2:', hiddens[1].output())

const genome = rede.genConcat(neuron, hiddens)
console.log('genome:', genome)

console.log(rede)
console.log(neuron)
console.log(hiddens)

//Algoritmio genetico
const genetics = new Genetics()
const childrens = genetics.crossover(genome, [0, 99, 8, 101, 2, 11, 11, 800, 0, -7], 3)
console.log('childrens:', childrens)

const mutante = genetics.mutation(genome, 4)
console.log('Mutante:', mutante)

const softmax = genetics.softmax(genome)
console.log(softmax)

