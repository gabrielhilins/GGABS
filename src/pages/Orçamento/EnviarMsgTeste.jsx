function enviarWhatsAppTeste(nome, sobrenome, isCompany, companyName, servico, prazo, briefingSummary, generatedDate, generatedTime) {
  let mensagem = `*Novo Orçamento Solicitado*\n\n` +
                 `*Nome:* ${nome} ${sobrenome}\n`;

  if (isCompany === "sim") {
    mensagem += `*Empresa:* ${companyName}\n`;
  }

  mensagem += `*Serviço:* ${servico}\n` +
              `*Prazo:* ${prazo}\n\n` +
              `*Detalhes:*\n${briefingSummary}\n\n` +
              `*Enviado em:* ${generatedDate} às ${generatedTime}`;

  const url = `https://wa.me/5581999034034?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

export default enviarWhatsAppTeste;