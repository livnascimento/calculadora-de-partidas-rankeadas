# Calculadora de Partidas Ranqueadas

## Visão Geral

Este projeto é uma calculadora de nível para jogadores de partidas ranqueadas em jogos online. Foi desenvolvido como parte do bootcamp Programação do Zero na [DIO](dio.me) em parceria com o [Potência Tech](https://potenciatech.com.br/) e destaca a aplicação de conceitos fundamentais de programação em JavaScript. A Calculadora de Partidas Ranqueadas é uma ferramenta simples, porém valiosa, para determinar o nível de um jogador com base em seu desempenho em partidas competitivas.

## Objetivo

O objetivo deste projeto é demonstrar a capacidade de utilizar variáveis, operadores, laços de repetição, estruturas de decisões e funções em JavaScript para criar uma aplicação funcional. A calculadora avalia a quantidade de vitórias e derrotas de um jogador e determina seu nível de acordo com critérios predefinidos.

## Funcionalidades Principais

- Calcula o saldo de partidas ranqueadas com base na diferença entre vitórias e derrotas.
- Atribui um nível ao jogador com base em seu saldo de vitórias, seguindo uma escala de classificação predefinida.

## Como Utilizar

Para usar a Calculadora de Partidas Ranqueadas, siga estes passos simples:

1. Clone o repositório do projeto para o seu ambiente local.

2. Abra o terminal na pasta raiz do projeto.

3. Execute o seguinte comando:

```
node calculadoraDePartidas.js
```

4. Altere as vitórias e derrotas do objeto jogador no arquivo [`index.js`](./index.js).

5. O resultado será exibido no console, o saldo de vitórias e o nível do jogador.

## Escala de Classificação

A Calculadora de Partidas Ranqueadas segue a seguinte escala de classificação:

- Vitórias < 10: Ferro
- 10 ≤ Vitórias ≤ 20: Bronze
- 21 ≤ Vitórias ≤ 50: Prata
- 51 ≤ Vitórias ≤ 80: Ouro
- 81 ≤ Vitórias ≤ 90: Diamante
- 91 ≤ Vitórias ≤ 100: Lendário
- Vitórias ≥ 101: Imortal

## Contribuição

Este projeto está aberto para contribuições. Se você deseja melhorar ou adicionar recursos à calculadora, sinta-se à vontade para abrir issues ou enviar pull requests. Sua contribuição é valorizada e pode ajudar a aprimorar esta ferramenta.
