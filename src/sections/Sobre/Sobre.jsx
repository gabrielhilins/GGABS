import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Sobre.module.scss";
import Logo from "../../assets/img/Logo-T-Branco-FundoAzul.png";
import profilePhoto from "../../assets/img/DSC_5656.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation, Trans } from "react-i18next";

function Sobre() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-out" });
  }, []);

  return (
    <div className={styles["sobre-container"]}>
      <h1 className={styles.title}>{t("sobre.title")}</h1>
      <div className={styles["profile-card"]} data-aos="fade-up">
        <div className={styles["logo-wrapper"]}>
          <img src={Logo} alt={t("sobre.logoAlt")} className={styles.logo} />
          <img
            src={profilePhoto}
            alt={t("sobre.profilePhotoAlt")}
            className={styles["profile-photo"]}
          />
        </div>
        <h2 className={styles.name}>{t("sobre.name")}</h2>
        <div className={styles.founder}>
          <p>{t("sobre.founder")}</p>
        </div>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/gabriel-henrique-lins/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            data-tooltip-id="linkedin-tooltip"
            data-tooltip-content={t("sobre.linkedinTooltip")}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GabrielHenriqueLins"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            data-tooltip-id="github-tooltip"
            data-tooltip-content={t("sobre.githubTooltip")}
          >
            <FaGithub />
          </a>
        </div>
        <Tooltip id="linkedin-tooltip" place="bottom" />
        <Tooltip id="github-tooltip" place="bottom" />
        <hr className={styles.hr}></hr>
        <p className={styles.description}>
          <Trans
            i18nKey="sobre.description1"
            components={{ strong: <strong /> }}
          />
        </p>
        <p className={styles.description}>
          <Trans
            i18nKey="sobre.description2"
            components={{ strong: <strong /> }}
          />
        </p>
        <p className={styles.description}>{t("sobre.description3")}</p>
        <p className={styles.description}>
          <Trans
            i18nKey="sobre.description4"
            components={{ strong: <strong /> }}
          />
        </p>
        
      </div>
    </div>
  );
}

export default Sobre;