import Logo from "../../assets/img/Logo-TS-Branco.png";
import StarsBackground from "../../components/StarsBackground";
import styles from "./Header.module.scss";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Fecha a sidebar ao clicar em um item
  };

  const navItems = [
    "início",
    "sobre",
    "serviços",
    "portifolio",
    "faq",
    "depoimentos",
  ];

  return (
    <header className={styles.header}>
      <StarsBackground section="header" />
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" loading="lazy" />
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <IoMenu size={30} color="white" />
        </button>

        {/* Navbar para telas maiores */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          {navItems.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={styles.link}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>

      {/* Sidebar para telas menores */}
      <nav className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOpen : ""}`}>
        {navItems.map((section, index) => (
          <div key={section}>
            <a
              href={`#${section}`}
              className={styles.sidebarLink}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
            {index !== navItems.length - 1 && <hr className={styles.sidebarHr} />}
          </div>
        ))}
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
}

export default Header;