import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/img/Wordmark Branco.png";
import StarsBackground from "../../components/StarsBackground";
import styles from "./Header.module.scss";

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    "services",
    "portfolio",
    "feedback",
    "faq",
  ];

  return (
    <header className={styles.header}>
      <StarsBackground section="header" />
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt={t("header.logoAlt")} loading="lazy" />
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={t("header.toggleMenu")}
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
              {t(`header.nav.${section}`)}
            </a>
          ))}

        </nav>
      </div>
      <nav className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOpen : ""}`}>

        <div className={styles.sidebarNav}>
          {navItems.map((section, index) => (
            <div key={section} className={styles.sidebarItem}>
              <a
                href={`#${section}`}
                className={styles.sidebarLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(section);
                }}
              >
                {t(`header.nav.${section}`)}
              </a>
              {index !== navItems.length - 1 && <div className={styles.sidebarDivider} />}
            </div>
          ))}
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
}

export default Header;