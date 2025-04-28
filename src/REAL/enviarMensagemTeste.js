function enviarWhatsApp(nome, sobrenome, servico, prazo, briefingSummary, generatedDate, generatedTime) {
    const mensagem =
      "Olá! Gostaria de solicitar um orçamento pela GGabs Design e Tech.\n\n" +
      `- Cliente: ${nome} ${sobrenome}\n` +
      `- Tipo de Serviço: ${servico}\n` +
      `- Prazo Desejado: ${prazo}\n` +
      `- Detalhes do Briefing:\n${briefingSummary}\n` +
      `- Solicitação Gerada em: ${generatedDate} às ${generatedTime}\n\n` +
      "Agradeço a atenção!";
  
    const url = `https://wa.me/5581999034034?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }
  
  export default enviarWhatsApp;