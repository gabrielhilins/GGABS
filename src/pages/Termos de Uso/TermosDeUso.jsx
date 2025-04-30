import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import styles from "./TermosDeUso.module.scss";
import ChangeLanguage from "../../components/ChangeLanguage";

function TermosDeUso() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo ao carregar
  }, []);

  // Lista de chaves das seções
  const sectionKeys = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
    "section8",
  ];

  return (
    <div className={styles.termsContainer}>
      <div className={styles.contentWrapper}>
        <button onClick={() => navigate("/")} className={styles.goBackButton}>
          <IoMdArrowBack className={styles.goBackIcon} /> {t("back")}
        </button>
        <ChangeLanguage />
        <h1 className={styles.title}>{t("termsOfUse.title")}</h1>
        <p className={styles.lastUpdated}>{t("termsOfUse.lastUpdated")}</p>

        <section className={styles.intro}>
          <Trans i18nKey="termsOfUse.intro.text" components={{ a: <a /> }} />
        </section>

        {sectionKeys.map((key, index) => {
          const items = t(`termsOfUse.sections.${key}.items`, {
            returnObjects: true,
          });
          const hasItems = Array.isArray(items) && items.length > 0;
          const hasContact = t(`termsOfUse.sections.${key}.contact`, {
            returnObjects: true,
          })?.email;

          return (
            <section key={index} className={styles.section}>
              <h2>{t(`termsOfUse.sections.${key}.title`)}</h2>
              {hasItems ? (
                <ul>
                  {items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              ) : (
                !hasContact && (
                  <Trans
                    i18nKey={`termsOfUse.sections.${key}.text`}
                    components={{ a: <a /> }}
                  />
                )
              )}
              {hasContact && (
                <div>
                  <Trans
                    i18nKey={`termsOfUse.sections.${key}.text`}
                    components={{ a: <a /> }}
                  />
                  <p>
                    <strong>
                      {t(`termsOfUse.sections.${key}.contact.emailLabel`)}
                    </strong>
                    :{" "}
                    <a
                      href={`mailto:${t(`termsOfUse.sections.${key}.contact.email`)}`}
                      className={styles.contactLink}
                    >
                      {t(`termsOfUse.sections.${key}.contact.email`)}
                    </a>
                  </p>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default TermosDeUso;