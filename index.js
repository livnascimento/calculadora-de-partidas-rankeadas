const { calcularSaldoVitorias, calcularNivel } = require('./utils/calculadora.utils');

const jogador = { vitorias: 50, derrotas: 23 };

const saldoVitorias = calcularSaldoVitorias(jogador.vitorias, jogador.derrotas);

const nivel = calcularNivel(saldoVitorias);

console.log(`O jogador tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);