import { useLocation } from "react-router-dom";

function OutrosServicos() {
  const location = useLocation();
  
  // Verifica a categoria, seja "tech" ou "design"
  const isTechRoute = location.pathname.startsWith("/solicitar-orcamentos/tech");
  const isDesignRoute = location.pathname.startsWith("/solicitar-orcamentos/design");

  return (
    <div className="outros-servicos-container">
      {isTechRoute && (
        <div className="tech-content">
          <h2>Outros serviços em Tecnologia</h2>
          <p>Aqui você pode solicitar outros serviços relacionados a tecnologia.</p>
        </div>
      )}
      {isDesignRoute && (
        <div className="design-content">
          <h2>Outros serviços em Design</h2>
          <p>Aqui você pode solicitar outros serviços relacionados a design.</p>
        </div>
      )}
      
    </div>
  );
}

export default OutrosServicos;
