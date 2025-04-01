function enviarWhatsApp(nome, sobrenome, servico, prazo, briefingSummary, precoBase, ajustePrazo, custoBriefing, precoTotal, generatedDate, generatedTime) {
  const mensagem = "Olá! Gostaria de solicitar o orçamento gerado pela GGabs Design e Tech.\n\n" +
                  `- Cliente: ${nome} ${sobrenome}\n` +
                  `- Tipo de Serviço: ${servico}\n` +
                  `- Prazo Desejado: ${prazo}\n` +
                  `- Resumo do Briefing: ${briefingSummary}\n` +
                  `- Gerado em: ${generatedDate} às ${generatedTime}\n\n` +
                  "Detalhamento:\n" +
                  `- Serviço Base (${servico}): R$${precoBase.toFixed(2)}\n` +
                  `- Ajuste por Prazo: R$${ajustePrazo.toFixed(2)}\n` +
                  `- Complexidade do Briefing: R$${custoBriefing.toFixed(2)}\n\n` +
                  `- Total do Orçamento: R$${precoTotal.toFixed(2)}\n\n` +
                  "Agradeço a atenção!";

  const url = `https://wa.me/5581999034034?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

export default enviarWhatsApp;