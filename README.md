# Repositório de um Modulo RNA(Rede neural artificial) com algorítimo genético.

[![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397007170568313/paypal.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)  [![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397005543178270/picpay.png)](https://app.picpay.com/user/smuu)

> Este modulo se trata de uma "forma prática" de criar uma RNA de forma simples e rápida usando javascript puro.
> Ainda não possui uma estrutura ou conversão de dataset usados em frameworks famoso, mas pretendo desenvolver.


#### Funções para a criação da Rede:
- [RNA.entradas(\<array de entradas>)]() ~ Cria um objeto representando um neurônio.
- [RNA.neuronios(\<array de entradas>, quantia)]() ~ Cria uma camada de neurônios de mesma entrada.
- [RNA.setPesos(\<array de neuronios>, \<array de pesos>)]() ~ Rescreve os pesos da cama especifica.
- [RNA.saidas(\<array de neuronios>, \<callback ou função de ativação>, quantia)]() ~ Retorna uma quantia de saídas de acordo com os neurônios de entradas.
- [RNA.genConcat(\<spreed de neuronios>)]() ~ Concatena os pesos para gerar o genoma.


#### Funções para a manipulação de genoma:
- [RNA.crossover(\<array de pesos>, \<array de pesos>, indice de deslocamento)]() ~ Junta dois genomas resultando em genomas semelhantes.
- [RNA.mutar(\<array de pesos>, quantia de mutação)]() ~ Altera uma quantia desejada de pesos em um genoma.
- [RNA.Softmax(\<array de pesos>)]() ~ Faz o tratamento do genoma para "treinar a rede".


#### Objeto neuronio:
- [Vies]() ~ Valor equivalente a bias.
- [Pesos]() ~ \<array de pesos>.
- [Saida]() ~ \<callback referente a função de ativação>.

---

Funções de ativação concluidas:
> As derivadas ainda estão em desenvolvimento.
- [ArcTan]()
- [BentIdentity]()
- [BinaryStep]()
- [Gaussian]()
- [Identity]()
- [LeakyReLU]()
- [ReLU]()
- [SELU]()
- [Sigmoid]()
- [SigmoidRcional]()
- [SiLU]()
- [Sinc]()
- [Sinusoid]()
- [SoftSign]()
- [SoftPlus]()
- [TanH]()
- [PReLU]()
- [ELU]()
- [Pipe]()

---
### Separei dois exemplos de uso:
- [Exemplo 1]() ~ Rede sem o uso de grupamentos internos.
- [Exemplo 2]() ~ Demonstração das funções de agruupamento.
