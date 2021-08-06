# Repositório de um Modulo RNA(Rede neural artificial) com algorítimo genético.

[![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397007170568313/paypal.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)  [![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397005543178270/picpay.png)](https://app.picpay.com/user/smuu)

> Este modulo se trata de uma "forma prática" de criar uma RNA de forma simples e rápida usando javascript puro.
> Ainda não possui uma estrutura ou conversão de dataset usados em frameworks famoso, mas pretendo desenvolver.

> Evitei class apenas por ser uma syntax sugar da qual não vejo necessidade de uso.

Este modulo foi desenvolvido para um [teste de AP(Aprendizado de máquina)  na game engine Construct](https://www.facebook.com/watch/?v=889808384919613).

#### Funções para a criação da Rede:
- [RNA.entradas(\<array de entradas>)](/RNA/index.js#L45) ~ Cria um objeto representando um neurônio.
- [RNA.neuronios(\<array de entradas>, quantia)](/RNA/index.js#L79) ~ Cria uma camada de neurônios de mesma entrada.
- [RNA.setPesos(\<array de neuronios>, \<array de pesos>)](/RNA/index.js#L84) ~ Rescreve os pesos da cama especifica.
- [RNA.saidas(\<array de neuronios>, \<callback ou função de ativação>, quantia)](/RNA/index.js#L80) ~ Retorna uma quantia de saídas de acordo com os neurônios de entradas.
- [RNA.genConcat(\<spreed de neuronios>)](/RNA/index.js#L87) ~ Concatena os pesos para gerar o genoma.


#### Funções para a manipulação de genoma:
- [RNA.crossover(\<array de pesos>, \<array de pesos>, indice de deslocamento)](/RNA/index.js#L74) ~ Junta dois genomas resultando em genomas semelhantes.
- [RNA.mutar(\<array de pesos>, quantia de mutação)](/RNA/index.js#L65) ~ Altera uma quantia desejada de pesos em um genoma.
- [RNA.Softmax(\<array de pesos>)](/RNA/index.js#L40) ~ Faz o tratamento do genoma para "treinar a rede".


#### Objeto neuronio:
- [Vies](/RNA/index.js#L49) ~ Valor equivalente a bias.
- [Pesos](/RNA/index.js#L53) ~ \<array de pesos>.
- [Saida](/RNA/index.js#L57) ~ \<callback referente a função de ativação>.

---

Funções de ativação concluidas:
> Neste projeto só possui funções de ativação sem suas derivaras.
- [RNA.fn.ArcTan](/RNA/index.js#L2)
- [RNA.fn.BentIdentity](/RNA/index.js#L3)
- [RNA.fn.BinaryStep](/RNA/index.js#L4)
- [RNA.fn.Gaussian](/RNA/index.js#L5)
- [RNA.fn.Identity](/RNA/index.js#L6)
- [RNA.fn.LeakyReLU](/RNA/index.js#L7)
- [RNA.fn.ReLU](/RNA/index.js#L8)
- [RNA.fn.SELU](/RNA/index.js#L9)
- [RNA.fn.Sigmoid](/RNA/index.js#L10)
- [RNA.fn.SigmoidRcional](/RNA/index.js#L11)
- [RNA.fn.SiLU](/RNA/index.js#L12)
- [RNA.fn.Sinc](/RNA/index.js#L13)
- [RNA.fn.Sinusoid](/RNA/index.js#L14)
- [RNA.fn.SoftSign](/RNA/index.js#L15)
- [RNA.fn.SoftPlus](/RNA/index.js#L16)
- [RNA.fn.TanH](/RNA/index.js#L17)
- [RNA.fn.PReLU](/RNA/index.js#L18)
- [RNA.fn.ELU](/RNA/index.js#L19)
- [RNA.fn.Pipe](/RNA/index.js#L20)

---
### SExemplos práticos:
- [Exemplo 1](/exemplo-1.js) ~ Rede sem o uso de grupamentos internos.
- [Exemplo 2](/exemplo-2.js) ~ Demonstração das funções de agrupamento.


##### Obrigado pela atençãp!
