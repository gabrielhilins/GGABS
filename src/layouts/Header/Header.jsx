import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Wordmark Branco.png";
import StarsBackground from "../../components/StarsBackground";
import styles from "./Header.module.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const handleOrçamentoClick = () => {
    navigate("/solicitar-orcamentos");
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "services", label: "Serviços" },
    { id: "portfolio", label: "Portfólio" },
    { id: "feedback", label: "Depoimentos" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <header className={styles.header}>
      <StarsBackground section="header" />
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logotipo GGabs Design e Tech" loading="lazy" />
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Alternar menu"
          aria-expanded={isMenuOpen}
        >
          <IoMenu size={30} color="white" />
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={styles.link}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <button className={styles.ctaButton} onClick={handleOrçamentoClick}>
            Solicitar Orçamento
          </button>
        </nav>
      </div>
      <nav className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOpen : ""}`}>

        <div className={styles.sidebarNav}>
          {navItems.map((item, index) => (
            <div key={item.id} className={styles.sidebarItem}>
              <a
                href={`#${item.id}`}
                className={styles.sidebarLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.id);
                }}
              >
                {item.label}
              </a>
              {index !== navItems.length - 1 && <div className={styles.sidebarDivider} />}
            </div>
          ))}
          <div className={styles.sidebarItem} style={{ marginTop: '1rem' }}>
             <button className={styles.sidebarCtaButton} onClick={handleOrçamentoClick}>
                Solicitar Orçamento
             </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
}

export default Header;