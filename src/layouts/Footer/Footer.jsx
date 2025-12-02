import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { SiThreads } from "react-icons/si";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.copyright}>
        <div className={styles.copyrightText}>
          <p>
            © 2025. {t("footer.copyright")} <a href="/">{t("footer.brand")}</a>
          </p>
        </div>
        <div className={styles.copyrightLinks}>
          <Link to="/politica-de-privacidade">{t("footer.privacyPolicy")}</Link>
          <Link to="/termos-de-uso">{t("footer.termsOfUse")}</Link>
        </div>
      </div>

      <div className={styles.verticalLine}></div>

      <div className={styles.redesSociais}>
        <p>{t("footer.followSocialMedia")}</p>
        <div className={styles.icons}>
          <div className={styles.socialBox} data-tooltip={t("footer.social.instagram")}>
            <a href="https://www.instagram.com/ggabstechdesign/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
          </div>
          <div className={styles.socialBox} data-tooltip={t("footer.social.tiktok")}>
            <a href="https://tiktok.com/@ggabs.tech.design" target="_blank" rel="noopener noreferrer">
              <FaTiktok className={styles.icon} />
            </a>
          </div>
          <div className={styles.socialBox} data-tooltip={t("footer.social.facebook")}>
            <a href="https://www.facebook.com/share/1AMxWY2jNe/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.icon} />
            </a>
          </div>
          <div className={styles.socialBox} data-tooltip={t("footer.social.linkedin")}>
            <a href="https://linkedin.com/company/ggabs-tech-design" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
          <div className={styles.socialBox} data-tooltip={t("footer.social.threads")}>
            <a href="https://www.threads.net/@ggabstechdesign" target="_blank" rel="noopener noreferrer">
              <SiThreads className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;