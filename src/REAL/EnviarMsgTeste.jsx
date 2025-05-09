function enviarWhatsAppTeste(nome, sobrenome, servico, prazo, briefingSummary, generatedDate, generatedTime) {
  const mensagem = `*Novo Orçamento Solicitado*\n\n` +
                   `*Nome:* ${nome} ${sobrenome}\n` +
                   `*Serviço:* ${servico}\n` +
                   `*Prazo:* ${prazo}\n\n` +
                   `*Detalhes:*\n${briefingSummary}\n\n` +
                   `*Enviado em:* ${generatedDate} às ${generatedTime}`;

  const url = `https://wa.me/5581999034034?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

export default enviarWhatsAppTeste;