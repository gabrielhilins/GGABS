function enviarWhatsApp(
    nome,
    sobrenome = "",
    servico,
    prazo = "Não especificado",
    briefingSummary = "",
    generatedDate,
    generatedTime,
    pacote = null
  ) {
    let mensagem = "Olá! Gostaria de solicitar um pacote de serviço da GGabs Design e Tech.\n\n" +
      `- Cliente: ${nome}${sobrenome ? ` ${sobrenome}` : ""}\n`
  
    if (pacote) {
      mensagem += `- Pacote Selecionado: ${pacote.title}\n` +
        `- Preço Base: ${pacote.price}\n`
    } else {
      mensagem += `- Prazo Desejado: ${prazo}\n` +
        `- Detalhes do Briefing:\n${briefingSummary || "Nenhum detalhe fornecido"}\n`;
    }
  
    mensagem += `- Solicitação Gerada em: ${generatedDate} às ${generatedTime}\n\n` +
      "Agradeço a atenção!";
  
    const url = `https://wa.me/5581999034034?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }
  
  export default enviarWhatsApp;