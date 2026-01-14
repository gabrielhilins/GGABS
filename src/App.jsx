import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Depoimentos from "./sections/Depoimentos/Depoimentos";

import Faq from "./sections/Faq/Faq";
import Hero from "./sections/Hero/Hero";

import Portifolio from "./sections/Portifolio/Portifolio";
import Serviços from "./sections/Serviços/Serviços";
import LnkdPerfil from "./sections/LnkdPerfil/LnkdPerfil";

import Orçamento from "./pages/Orçamento/Orçamento";
import NotFound404 from "./pages/404";

import CTA from "./sections/CTA/CTA";
import useScrollRestoration from "./hooks/useScrollRestoration";
import Links from "./pages/Links/Links";

function App() {
  const location = useLocation();
  useScrollRestoration(); 

  const validRoutes = [
    "/",
    "/solicitar-orcamentos",
    "/links"
  ];

  const is404Route = !validRoutes.includes(location.pathname);

  
  const isHeaderExcludedRoute = [
    "/solicitar-orcamentos",
    "/links" 
  ].includes(location.pathname);

  const isFooterExcludedRoute = 
    location.pathname.startsWith("/solicitar-orcamentos") || 
    location.pathname === "/links" ||
    is404Route;

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
              <div id="services">
                <Serviços />
              </div>
              <div id="lnkd-perfil">
                <LnkdPerfil />
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
              <div id="cta">
                <CTA />
              </div>
            </>
          }
        />
        <Route path="/solicitar-orcamentos" element={<Orçamento />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      
      {!isFooterExcludedRoute && <Footer />}
    </div>
  );
}

export default App;