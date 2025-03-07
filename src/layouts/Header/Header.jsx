import Logo from '../../assets/img/Logo-TS-Branco.png';
import StarsBackground from '../../components/StarsBackground';
import styles from './Header.module.scss';  

function Header() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles['header-container']}> 
      <StarsBackground section="header" />
      <div className={styles.logo}>  
        <img src={Logo} alt='logo header' width="220px" height="78px" />
      </div>
      <div className={styles.links}> 
        <a
          href="#hero"
          className={styles.link}
          onClick={(e) => {
            e.preventDefault(); // Evita o comportamento padrão do link
            handleScroll('hero');
          }}
        >
          Home
        </a>
        <a
          href="#quem-sou"
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();
            handleScroll('quem-sou');
          }}
        >
          Quem Sou
        </a>
        <a
          href="#serviços"
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();
            handleScroll('serviços');
          }}
        >
          Serviços
        </a>
        <a
          href="#portifolio"
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();
            handleScroll('portifolio');
          }}
        >
          Portifólio
        </a>
        <a
          href="#faq"
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();
            handleScroll('faq');
          }}
        >
          FAQ
        </a>
        <a
          href="#depoimentos"
          className={styles.link}
          onClick={(e) => {
            e.preventDefault();
            handleScroll('depoimentos');
          }}
        >
          Depoimentos
        </a>
      </div>
    </div>
  );
}

export default Header;