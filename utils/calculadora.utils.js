const calcularSaldoVitorias = (vitorias, derrotas) => {
    return vitoriasTotal = vitorias - derrotas;
}

const calcularNivel = (saldoVitorias) => {
    if (vitoriasTotal < 10) return "Ferro";
    else if (vitoriasTotal > 10 & vitoriasTotal <= 20) return "Bronze";
    else if (vitoriasTotal > 20 & vitoriasTotal <= 50) return "Prata";
    else if (vitoriasTotal > 50 & vitoriasTotal <= 80) return "Ouro";
    else if (vitoriasTotal > 80 & vitoriasTotal <= 90) return "Diamante";
    else if (vitoriasTotal > 90 & vitoriasTotal <= 100) return "Lendário";
    else return "Imortal";
}

module.exports = { calcularSaldoVitorias, calcularNivel };