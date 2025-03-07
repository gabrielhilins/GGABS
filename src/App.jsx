import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Compartilha from './sections/Compartilha/Compartilha';
import Depoimentos from './sections/Depoimentos/Depoimentos';
import Diferenciais from './sections/Diferenciais/Diferenciais';
import Faq from './sections/Faq/Faq';
import Hero from './sections/Hero/Hero';
import Orçamento from './sections/Orçamento/Orçamento';
import Portifolio from './sections/Portifolio/Portifolio';
import QuemSou from './sections/QuemSou/QuemSou';
import Serviços from './sections/Serviços/Serviços';
import './styles/App.scss'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Hero />
      <Diferenciais />
      <QuemSou />
      <Serviços />
      <Portifolio />
      <Faq />
      <Orçamento />
      <Depoimentos />
      <Compartilha />
      <Footer />
    </div>
  )
}

export default App;