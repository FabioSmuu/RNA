const RNA = require('./RNA')

const entrada = [200, 15, 8]

const neuronio = [
    RNA.entradas(entrada),
    RNA.entradas(entrada)
]

//neuronio[0].vies.set(3)
neuronio[0].pesos.set([100, 1, 5])
neuronio[1].pesos.set([-200, 5, 10])

const oculta = [
    RNA.entradas([
        neuronio[0].saida(RNA.fn.ReLU),
        neuronio[1].saida(RNA.fn.ReLU)
    ]),
    RNA.entradas([
        neuronio[0].saida(RNA.fn.ReLU),
        neuronio[1].saida(RNA.fn.ReLU)
    ])
]

oculta[0].pesos.set([1, 500])
oculta[1].pesos.set([0, -500])

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

/*
const genoma = [
    neuronio[0].pesos.get(),
    neuronio[1].pesos.get(),
    oculta[0].pesos.get(),
    oculta[1].pesos.get()
].reduce((a, b) => a.concat(b))
*/

console.log('Genoma:', genoma)

const genoma2 = RNA.mutar(genoma, 2)
console.log('Mutação:', genoma2)

console.log('Cross Over:', RNA.crossover(genoma, genoma2, 3))