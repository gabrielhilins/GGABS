import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Depoimentos from "./sections/Depoimentos/Depoimentos";
// import Diferenciais from "./sections/Diferenciais/Diferenciais";
import Faq from "./sections/Faq/Faq";
import Hero from "./sections/Hero/Hero";
// import Historia from "./sections/historia/Historia";
import Portifolio from "./sections/Portifolio/Portifolio";
import Serviços from "./sections/Serviços/Serviços";
// import Sobre from "./sections/Sobre/Sobre";
import Orçamento from "./pages/Orçamento/Orçamento";
import NotFound404 from "./pages/404";
// import Pacotes from "./sections/Pacotes/Pacotes";
import PoliticaPrivacidade from "./pages/Política de Privacidade/PoliticaPrivacidade";
import TermosDeUso from "./pages/Termos de Uso/TermosDeUso";
import CTA from "./sections/Compartilha/CTA";
import DevWeb from "./pages/DesenvolvimentoWeb/DevWeb";
import Design from "./pages/Design/Design";
import useScrollRestoration from "./hooks/useScrollRestoration";
import Links from "./pages/Links/Links";

function App() {
  const location = useLocation();
  useScrollRestoration(); 

  // Routes where Header should be hidden
  const isHeaderExcludedRoute = [
    "/solicitar-orcamentos",
    "/tech",
    "/design",
    "/links" // Header will be hidden on /links
  ].includes(location.pathname);

  const isFooterExcludedRoute = 
    location.pathname.startsWith("/solicitar-orcamentos") || 
    location.pathname === "/links";

  const validRoutes = [
    "/",
    "/solicitar-orcamentos",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/tech",
    "/design",
    "/links"
  ];

  const is404Route = !validRoutes.includes(location.pathname);

  return (
    <div className="app-container">

      {!isHeaderExcludedRoute && !is404Route && <Header />}
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="hero">
                <Hero />
              </div>
              {/*
              <div id="historia">
                <Historia />
              </div>
              */}
              {/*
              <div id="diferenciais">
                <Diferenciais />
              </div>
              */}
              <div id="services">
                <Serviços />
              </div>
              <div id="portfolio">
                <Portifolio />
              </div>
              <div id="feedback">
                <Depoimentos />
              </div>
              <div id="faq">
                <Faq />
              </div>
              {/*}
              <div id="packages">
                <Pacotes />
              </div>
              */}
              {/*}
              <div id="about">
                <Sobre />
              </div>
              */}
              <div id="cta">
                <CTA />
              </div>
            </>
          }
        />
        <Route path="/solicitar-orcamentos" element={<Orçamento />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/tech" element={<DevWeb />} />
        <Route path="/design" element={<Design />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      
      {/* Hide footer on excluded routes */}
      {!isFooterExcludedRoute && <Footer />}
    </div>
  );
}

export default App;