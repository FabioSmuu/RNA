const RNA = require('./RNA')

const entrada = [200, 15, 8]

const neuronio = RNA.neuronios(entrada, 2)
RNA.setPesos(neuronio, [[100, 1, 5], [-200, 5, 10]])

const oculta = RNA.saidas(neuronio, RNA.fn.ReLU, 2)
RNA.setPesos(oculta, [[1, 500], [0, -500]])

console.log('Entradas:', entrada)
console.log('Pesos:', {
    'Neuronio 1': neuronio[0].pesos.get(),
    'Neuronio 2': neuronio[1].pesos.get(),
    'Oculta 1': oculta[0].pesos.get(),
    'Oculta 2': oculta[1].pesos.get(),
})
console.log('Saida 1:', oculta[0].saida())
console.log('Saida 2:', oculta[1].saida())

const genoma = RNA.genConcat(neuronio, oculta)
console.log('Genoma:', genoma)