//Funções de ativações.
const ArcTan = valor => Math.atan(valor)
const BentIdentity = valor => ((Math.sqrt((valor ** 2) + 1) - 1) / 2) + valor
const BinaryStep = valor => ((valor < 0) ? 0 : 1)
const Gaussian = valor => Math.exp(-(valor ** 2))
const Identity = valor => valor
const LeakyReLU = valor => PReLU(valor, 0.01)
const ReLU = valor => ((valor < 0) ? 0 : valor)
const SELU = valor => 1.0507 * ELU(valor, 1.67326)
const Sigmoid = valor => 1.0 / (1.0 + Math.exp(-valor))
const SigmoidRcional = valor => valor / (1.0 + Math.sqrt(1.0 + valor * valor))
const SiLU = valor => valor * Sigmoid(valor)
const Sinc = valor => (valor = 0) ? 1 : (Math.sin(valor) / valor)
const Sinusoid = valor => Math.sin(valor)
const SoftSign = valor => valor / (1 + Math.abs(valor))
const SoftPlus = valor => Math.log(1 + Math.exp(valor))
const TanH = valor => (Math.exp(valor) - Math.exp(-valor)) + (Math.exp(valor) + Math.exp(-valor))
const PReLU = (valor, arg) => ((valor < 0) ? (arg * valor) : valor)
const ELU = (valor, arg) => PReLU(arg, Math.expm1(valor))
const Pipe = (valor, ...fns) => fns.reduce((acc, current) => acc = current(valor))
/*
    Gaussian_Derivative: valor => -2.0 * valor * Gaussian(valor),
    Sigmoid_Derivative: valor => Sigmoid(valor) * (1 - Sigmoid(valor)),
    SigmoidRcional_Derivative: valor => 1.0 / (Math.sqrt(1.0 + valor * valor) * (1 + Math.sqrt(1.0 + valor * valor)))
*/ 

//Função interna
const calcular = (pesos, entradas, vies = 0) => {
    const result = pesos.map((peso, i) => entradas[i] * peso + vies)
    return result.reduce((acc, current) => acc + current)
}

//Função interna
const randpesos = (...entradas) => {
    const min = Math.ceil(-1000)
    const max = Math.floor(1000)
    return entradas[0].map(entrada => entrada = Math.floor(Math.random() * (max - min + 1)) + min)
}

const Softmax = genoma => {
    const gens = genoma.map(x => Math.exp(x - Math.max(...genoma)))
    return gens.map(y => y / gens.reduce((acc, current) => acc + current))
}

const entradas = entradas => {
    let pesos = randpesos(entradas) || [0]
    let vies = 0
    return {
        vies: {
            get: () => vies,
            set: (valor) => vies = valor || 0
        },
        pesos: {
            get: () => pesos,
            set: (valores) => pesos = valores || [0]
        },
        saida: callback => {
            if (!callback) return calcular(pesos, entradas, vies)
            if (typeof callback === 'function') return callback(calcular(pesos, entradas, vies))
        }
    }
}

//console.log(mutar([1,2,3,4,5,6,7,8,9], 1))
const mutar = (genoma, vezes = 1) => {
    if (vezes <= 0) vezes = 1

    const indexList = Array(vezes).fill(0).map(vez => Math.floor(Math.random()*genoma.length)) 
    const filho = genoma.map((gen, index) => indexList.includes(index) ? randpesos([0])[0] : gen)
    return filho
}

//console.log(crossover([1,2,8,9,10], [6,7,3,4,5], 2))
const crossover = (genoma1, genoma2, index) => [
    genoma1.slice(0, index).concat(genoma2.slice(index)),
    genoma2.slice(0, index).concat(genoma1.slice(index))
]

const neuronios = (entrada, contia) => Array(contia).fill(0).map(_ => entradas(entrada))
const saidas = (neuronios, fn, contia) => {
    return Array(contia).fill(0).map(_ => entradas(neuronios.map(entrada => entrada.saida(fn))))
}

const setPesos = (neuronio, pesos) => neuronio.map((neuro, index) => neuro.pesos.set(pesos[index]))

//console.log(genConcat(neuronio, oculta))
const genConcat = (...neuronios) => {
    return neuronios.map(gen => gen.map(g => g.pesos.get()))
        .reduce((acc, current) => acc.concat(current))
        .reduce((acc, current) => acc.concat(current))
}

const splitGen = (genoma, neuronioQuantia, entradaQuantia) => Array(neuronioQuantia).fill().map(_ => genoma.splice(0, entradaQuantia))

module.exports = {
    entradas,
    mutar,
    crossover,
    Softmax,
    calcular,
    neuronios,
    saidas,
    setPesos,
    genConcat,

    fn: {
        ArcTan,
        BentIdentity,
        BinaryStep,
        Gaussian,
        Identity,
        LeakyReLU,
        ReLU,
        SELU,
        Sigmoid,
        SigmoidRcional,
        SiLU,
        Sinc,
        Sinusoid,
        SoftSign,
        SoftPlus,
        TanH,
        PReLU,
        ELU,
        Pipe
    }
}
