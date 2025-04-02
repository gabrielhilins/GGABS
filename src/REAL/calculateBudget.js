function calculateBudget(formData, pricingModels, serviceNames){
    const { service, details, deadline } = formData;
    const pricing = pricingModels[service];
    const multiplicadoresPrazo = { "1-semana": 1.5, "2-semanas": 1.3, "1-mes": 1.1, "2-meses": 1.0, flexivel: 0.9 };
    let total = pricing.basePrice;
    const budgetDetails = [{ desc: `Serviço base (${serviceNames[service]})`, qty: "1", unit: pricing.basePrice, total: pricing.basePrice }];

    switch (service) {
      case "cardapio":
        { const itens = parseInt(details.itens) || 0;
        total += itens > pricing.factors.itens.threshold ? (itens - pricing.factors.itens.threshold) * pricing.factors.itens.pricePerExtra : 0;
        total += details.digital === "Sim, quero cardápio digital" ? pricing.factors.digital.price : 0;
        budgetDetails.push({ desc: `Itens extras (${itens})`, qty: itens, unit: pricing.factors.itens.pricePerExtra, total: itens > pricing.factors.itens.threshold ? (itens - pricing.factors.itens.threshold) * pricing.factors.itens.pricePerExtra : 0 });
        budgetDetails.push({ desc: "Cardápio digital", qty: details.digital === "Sim, quero cardápio digital" ? 1 : 0, unit: pricing.factors.digital.price, total: details.digital === "Sim, quero cardápio digital" ? pricing.factors.digital.price : 0 });
        break; }
      case "ecommerce":
        { const produtos = parseInt(details.produtos) || 0;
        total += produtos > pricing.factors.products.threshold ? (produtos - pricing.factors.products.threshold) * pricing.factors.products.pricePerExtra : 0;
        total += ["Mercado Pago", "PagSeguro", "Outro gateway"].includes(details.integracao) ? pricing.factors.paymentGateway.price : 0;
        budgetDetails.push({ desc: `Produtos extras (${produtos})`, qty: produtos, unit: pricing.factors.products.pricePerExtra, total: produtos > pricing.factors.products.threshold ? (produtos - pricing.factors.products.threshold) * pricing.factors.products.pricePerExtra : 0 });
        budgetDetails.push({ desc: "Integração de pagamento", qty: ["Mercado Pago", "PagSeguro", "Outro gateway"].includes(details.integracao) ? 1 : 0, unit: pricing.factors.paymentGateway.price, total: ["Mercado Pago", "PagSeguro", "Outro gateway"].includes(details.integracao) ? pricing.factors.paymentGateway.price : 0 });
        break; }
      case "gestaoEmpresarial":
        { const modulosCount = details.modulos.split(",").length || 1;
        total += modulosCount * pricing.factors.modulos.pricePerModule;
        total += pricing.factors.mobilidade[details.mobilidade] || 0;
        total += pricing.factors.integracao[details.integracao_existente] || 0;
        budgetDetails.push({ desc: `Módulos (${modulosCount})`, qty: modulosCount, unit: pricing.factors.modulos.pricePerModule, total: modulosCount * pricing.factors.modulos.pricePerModule });
        budgetDetails.push({ desc: `Mobilidade (${details.mobilidade})`, qty: 1, unit: pricing.factors.mobilidade[details.mobilidade] || 0, total: pricing.factors.mobilidade[details.mobilidade] || 0 });
        budgetDetails.push({ desc: `Integração (${details.integracao_existente})`, qty: 1, unit: pricing.factors.integracao[details.integracao_existente] || 0, total: pricing.factors.integracao[details.integracao_existente] || 0 });
        break; }
      case "gestaoPedidos":
        { const volume = parseInt(details.volume) || 0;
        total += volume > pricing.factors.volume.threshold ? (volume - pricing.factors.volume.threshold) * pricing.factors.volume.pricePerExtra : 0;
        total += details.canais === "Vários" ? pricing.factors.canais.Vários : pricing.factors.canais.default;
        total += details.relatorios.trim() ? pricing.factors.relatorios.base : 0;
        total += pricing.factors.notificacoes[details.notificacoes] || 0;
        budgetDetails.push({ desc: `Volume extra (${volume})`, qty: volume, unit: pricing.factors.volume.pricePerExtra, total: volume > pricing.factors.volume.threshold ? (volume - pricing.factors.volume.threshold) * pricing.factors.volume.pricePerExtra : 0 });
        budgetDetails.push({ desc: "Relatórios personalizados", qty: details.relatorios.trim() ? 1 : 0, unit: pricing.factors.relatorios.base, total: details.relatorios.trim() ? pricing.factors.relatorios.base : 0 });
        budgetDetails.push({ desc: `Notificações (${details.notificacoes})`, qty: 1, unit: pricing.factors.notificacoes[details.notificacoes] || 0, total: pricing.factors.notificacoes[details.notificacoes] || 0 });
        break; }
      case "design":
        { const elementosCount = details.elementos.split(",").length || 1;
        total += elementosCount * pricing.factors.elementos.pricePerElement;
        total += pricing.factors.cores[details.cores] || 0;
        budgetDetails.push({ desc: `Elementos (${elementosCount})`, qty: elementosCount, unit: pricing.factors.elementos.pricePerElement, total: elementosCount * pricing.factors.elementos.pricePerElement });
        budgetDetails.push({ desc: `Cores (${details.cores})`, qty: 1, unit: pricing.factors.cores[details.cores] || 0, total: pricing.factors.cores[details.cores] || 0 });
        break; }
      case "landingPage":
        {
        total += pricing.factors.conteudo[details.conteudo] || 0;
        total += pricing.factors.referencias[details.referencias] || 0;
        budgetDetails.push({ desc: `Conteúdo (${details.conteudo})`, qty: 1, unit: pricing.factors.conteudo[details.conteudo] || 0, total: pricing.factors.conteudo[details.conteudo] || 0 });
        budgetDetails.push({ desc: `Referências (${details.referencias})`, qty: 1, unit: pricing.factors.referencias[details.referencias] || 0, total: pricing.factors.referencias[details.referencias] || 0 });
        break; }
      case "materialPromocional":
        { const tiposCount = details.tipos.split(",").length || 1;
        total += tiposCount * pricing.factors.tipos.pricePerType;
        total += pricing.factors.prazos[details.prazos] || 0;
        budgetDetails.push({ desc: `Tipos (${tiposCount})`, qty: tiposCount, unit: pricing.factors.tipos.pricePerType, total: tiposCount * pricing.factors.tipos.pricePerType });
        break; }
      case "portfolio":
        { const projetos = parseInt(details.projetos) || 0;
        total += projetos * pricing.factors.projetos.pricePerProject;
        total += pricing.factors.destaque[details.destaque] || 0;
        total += pricing.factors.atualizacao[details.atualizacao] || 0;
        total += pricing.factors.interatividade[details.interatividade] || 0;
        budgetDetails.push({ desc: `Projetos (${projetos})`, qty: projetos, unit: pricing.factors.projetos.pricePerProject, total: projetos * pricing.factors.projetos.pricePerProject });
        budgetDetails.push({ desc: `Destaque (${details.destaque})`, qty: 1, unit: pricing.factors.destaque[details.destaque] || 0, total: pricing.factors.destaque[details.destaque] || 0 });
        budgetDetails.push({ desc: `Atualização (${details.atualizacao})`, qty: 1, unit: pricing.factors.atualizacao[details.atualizacao] || 0, total: pricing.factors.atualizacao[details.atualizacao] || 0 });
        budgetDetails.push({ desc: `Interatividade (${details.interatividade})`, qty: 1, unit: pricing.factors.interatividade[details.interatividade] || 0, total: pricing.factors.interatividade[details.interatividade] || 0 });
        break; }
      case "siteInstitucional":
        { const paginasCount = details.paginas.split(",").length || 1;
        total += paginasCount * pricing.factors.paginas.pricePerPage;
        total += pricing.factors.idiomas[details.idiomas] || 0;
        budgetDetails.push({ desc: `Páginas (${paginasCount})`, qty: paginasCount, unit: pricing.factors.paginas.pricePerPage, total: paginasCount * pricing.factors.paginas.pricePerPage });
        budgetDetails.push({ desc: `Idiomas (${details.idiomas})`, qty: 1, unit: pricing.factors.idiomas[details.idiomas] || 0, total: pricing.factors.idiomas[details.idiomas] || 0 });
        break; }
      case "outro":
        total += pricing.factors.complexidade[details.complexidade] || 0;
        total += pricing.factors.prazos[details.prazos] || 0;
        total += pricing.factors.orcamento[details.orcamento] || 0;
        budgetDetails.push({ desc: `Complexidade (${details.complexidade})`, qty: 1, unit: pricing.factors.complexidade[details.complexidade] || 0, total: pricing.factors.complexidade[details.complexidade] || 0 });
        budgetDetails.push({ desc: `Prazos (${details.prazos})`, qty: 1, unit: pricing.factors.prazos[details.prazos] || 0, total: pricing.factors.prazos[details.prazos] || 0 });
        budgetDetails.push({ desc: `Orçamento (${details.orcamento})`, qty: 1, unit: pricing.factors.orcamento[details.orcamento] || 0, total: pricing.factors.orcamento[details.orcamento] || 0 });
        break;
      default:
        break;
    }

    const multiplicador = multiplicadoresPrazo[deadline] || 1.0;
    const finalTotal = total * multiplicador;
    budgetDetails.push({ desc: `Ajuste por prazo (${deadline})`, qty: "-", unit: "-", total: finalTotal - total });

    return { service, deadline, details: budgetDetails, total: finalTotal };
  };

  export default calculateBudget;