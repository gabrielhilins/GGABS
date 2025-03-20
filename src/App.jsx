import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Compartilha from "./sections/Compartilha/Compartilha";
import Depoimentos from "./sections/Depoimentos/Depoimentos";
import Diferenciais from "./sections/Diferenciais/Diferenciais";
import Estatisticas from "./sections/Estatisticas/Estatisticas";
import Faq from "./sections/Faq/Faq";
import Hero from "./sections/Hero/Hero";
import Historia from "./sections/historia/Historia";
import Portifolio from "./sections/Portifolio/Portifolio";
import ServicoDevWeb from "./sections/Serviços/DesenvolvimentoWeb/DevWeb";
import ServicoDesign from "./sections/Serviços/Design/Design";
import Serviços from "./sections/Serviços/Serviços";
import ServicoSistemaGestao from "./sections/Serviços/SistemaGestao/SistemaGestao";
import Sobre from "./sections/Sobre/Sobre";

// Pagina de orçamento
import Orçamento from "./pages/Orçamento/Orçamento";

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

        <Route path="/solicitar-orcamentos" element={<Orçamento />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
