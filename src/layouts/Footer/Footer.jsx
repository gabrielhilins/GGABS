import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.scss";
import SocialLinks from "../../components/common/SocialLinks";

function Footer() {
  const location = useLocation();
  const isBudgetPage = location.pathname === "/solicitar-orcamentos";

  return (
    <footer className={`${styles.footerContainer} ${isBudgetPage ? styles.transparentFooter : ""}`}>
      <div className={styles.copyright}>
        <div className={styles.copyrightText}>
          <p>
            © 2025. Todos os direitos reservados <a href="/">GGABS</a>
          </p>
        </div>
        <div className={styles.copyrightLinks}>
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>
          <Link to="/termos-de-uso">Termos de Uso</Link>
        </div>
      </div>

      <div className={styles.verticalLine}></div>

      <div className={styles.redesSociais}>
        <p>Acompanhe nas Redes Sociais</p>
        <SocialLinks
          containerClass={styles.icons}
          itemClass={styles.socialBox}
          iconClass={styles.icon}
        />
      </div>
    </footer>
  );
}

export default Footer;