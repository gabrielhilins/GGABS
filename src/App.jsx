import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Compartilha from './sections/Compartilha/Compartilha';
import Depoimentos from './sections/Depoimentos/Depoimentos';
import Diferenciais from './sections/Diferenciais/Diferenciais';
import Estatisticas from './sections/Estatisticas/Estatisticas';
import Faq from './sections/Faq/Faq';
import Hero from './sections/Hero/Hero';
import Historia from './sections/historia/Historia';
import Orçamento from './sections/Orçamento/Orçamento';
import Portifolio from './sections/Portifolio/Portifolio';
import QuemSou from './sections/QuemSou/QuemSou';
import DevWeb from './sections/DesenvolvimentoWeb/DevWeb';
import Serviços from './sections/Serviços/Serviços';
import './styles/App.scss';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="diferenciais">
        <Diferenciais />
      </div>
      <div id="historia">
        <Historia />
      </div>
      <div id="estatisticas">
        <Estatisticas />
      </div>
      <div id="quem-sou">
        <QuemSou />
      </div>
      <div id="serviços">
        <Serviços />
      </div>  
      <div id="devweb">
        <DevWeb />
      </div>
      <div id="portifolio">
        <Portifolio />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="orçamento">
        <Orçamento />
      </div>
      <div id="depoimentos">
        <Depoimentos />
      </div>
      <div id="compartilha">
        <Compartilha />
      </div>
      <Footer />
    </div>
  );
}

export default App;