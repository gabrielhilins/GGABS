import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Compartilha from "./sections/Compartilha/Compartilha";
import Depoimentos from "./sections/Depoimentos/Depoimentos";
import Diferenciais from "./sections/Diferenciais/Diferenciais";
import Estatisticas from "./sections/Estatisticas/Estatisticas";
import Faq from "./sections/Faq/Faq";
import Hero from "./sections/Hero/Hero";
import Historia from "./sections/historia/Historia";
import Orçamento from "./pages/Orçamento/Orçamento";
import Portifolio from "./sections/Portifolio/Portifolio";
import ServicoDevWeb from "./sections/Serviços/DesenvolvimentoWeb/DevWeb";
import ServicoDesign from "./sections/Serviços/Design/Design";
import Serviços from "./sections/Serviços/Serviços";
import ServicoSistemaGestao from "./sections/Serviços/SistemaGestao/SistemaGestao";
import Sobre from "./sections/Sobre/Sobre";

// TECH
import Ecommerce from "./pages/OrçamentoPersonalizado/tech/Ecommerce/Ecommerce";
import LandingPage from "./pages/OrçamentoPersonalizado/tech/LandingPage/LandingPage";
import SiteInstitucional from "./pages/OrçamentoPersonalizado/tech/SiteInstitucional/SiteInstitucional";
import SistemaPedidos from "./pages/OrçamentoPersonalizado/tech/SistemaPedidos/SistemaPedidos";
import SistemaAgendamentos from "./pages/OrçamentoPersonalizado/tech/SistemaAgendamentos/SistemaAgendamentos";
import ERP from "./pages/OrçamentoPersonalizado/tech/ERP/ERP";

// DESIGN
import IdentidadeVisual from "./pages/OrçamentoPersonalizado/design/IdentidadeVisual/IdentidadeVisual";
import MateriaisPromocionais from "./pages/OrçamentoPersonalizado/design/MateriaisPromocionais/MateriaisPromocionais";
import Cardapio from "./pages/OrçamentoPersonalizado/design/Cardapio/Cardapio";
import OutrosServicos from "./pages/OrçamentoPersonalizado/OutrosServiços";

function App() {
  const location = useLocation();
  const isOrcamentoRoute = location.pathname.startsWith(
    "/solicitar-orcamentos"
  );

  return (
    <div className="app-container">
      {!isOrcamentoRoute && <Header />}
      <Routes>
        {/* Rota principal */}
        <Route
          path="/"
          element={
            <>
              <div id="hero">
                <Hero />
              </div>
              <div id="diferenciais">
                <Diferenciais />
              </div>
              <div id="estatisticas">
                <Estatisticas />
              </div>
              <div id="sobre">
                <Sobre />
              </div>
              <div id="historia">
                <Historia />
              </div>
              <div id="serviços">
                <Serviços />
              </div>
              <div id="desenvolvimento-web">
                <ServicoDevWeb />
              </div>
              <div id="sistemas-de-gestão">
                <ServicoSistemaGestao />
              </div>
              <div id="design">
                <ServicoDesign />
              </div>
              <div id="portifolio">
                <Portifolio />
              </div>
              <div id="faq">
                <Faq />
              </div>
              <div id="depoimentos">
                <Depoimentos />
              </div>
              <div id="compartilha">
                <Compartilha />
              </div>
            </>
          }
        />
        {/* Rotas personalizadas para orçamentos/*}
        {/* Tech */}
        <Route path="/solicitar-orcamentos" element={<Orçamento />}></Route>
        <Route
          path="/solicitar-orcamentos/tech/ecommerce"
          element={<Ecommerce />}
        />
        <Route
          path="/solicitar-orcamentos/tech/landing-page"
          element={<LandingPage />}
        />
        <Route
          path="/solicitar-orcamentos/tech/site-institucional"
          element={<SiteInstitucional />}
        />
        <Route
          path="/solicitar-orcamentos/tech/sistema-pedidos"
          element={<SistemaPedidos />}
        />
        <Route
          path="/solicitar-orcamentos/tech/sistema-agendamentos"
          element={<SistemaAgendamentos />}
        />
        <Route path="/solicitar-orcamentos/tech/erp" element={<ERP />} />
        <Route
          path="/solicitar-orcamentos/tech/outros-servicos"
          element={<OutrosServicos />}
        />
        {/* Design */}
        <Route
          path="/solicitar-orcamentos/design/identidade-visual"
          element={<IdentidadeVisual />}
        />
        <Route
          path="/solicitar-orcamentos/design/cardapio"
          element={<Cardapio />}
        />
        <Route
          path="/solicitar-orcamentos/design/materiais-promocionais"
          element={<MateriaisPromocionais />}
        />
        <Route
          path="/solicitar-orcamentos/design/outros-servicos"
          element={<OutrosServicos />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
