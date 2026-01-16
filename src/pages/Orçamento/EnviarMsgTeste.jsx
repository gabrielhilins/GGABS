function enviarWhatsAppTeste(
  nome, 
  sobrenome, 
  isCompany, 
  companyName, 
  instagram, 
  servico, 
  prazo, 
  briefing,
  outroSummary, 
  generatedDate, 
  generatedTime
) {
  let mensagem = `*Novo Orçamento Solicitado*\n\n` +
                 `*Nome:* ${nome} ${sobrenome}\n`;

  if (isCompany === "sim") {
    mensagem += `*Empresa:* ${companyName}\n` +
                `*Instagram:* ${instagram}\n`;
  }

  mensagem += `*Serviços:* ${servico}\n` +
              `*Prazo:* ${prazo}\n`;

  // Campo opcional de briefing geral
  if (briefing && briefing.trim() !== "") {
    mensagem += `\n*Descrição do Projeto (Briefing):*\n${briefing}\n`;
  }

  // Resumo caso tenha selecionado o serviço "Outro"
  if (outroSummary && outroSummary !== "Múltiplos serviços selecionados") {
    mensagem += `\n*Detalhes do Serviço "Outro":*\n${outroSummary}\n`;
  }

  mensagem += `\n*Enviado em:* ${generatedDate} às ${generatedTime}`;

  const url = `https://wa.me/5581999034034?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

export default enviarWhatsAppTeste;