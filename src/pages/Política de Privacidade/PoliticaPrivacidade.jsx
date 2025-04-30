import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styles from './PoliticaPrivacidade.module.scss';
import ChangeLanguage from '../../components/ChangeLanguage';

function PoliticaPrivacidade() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Acessa as seções da política de privacidade
  const sections = t('privacyPolicy.sections', { returnObjects: true });

  return (
    <div className={styles.privacyContainer}>
      <div className={styles.contentWrapper}>
        <button onClick={() => navigate('/')} className={styles.goBackButton}>
          <IoMdArrowBack className={styles.goBackIcon} /> {t('back')}
        </button>
        <ChangeLanguage />
        <h1 className={styles.title}>{t('privacyPolicy.title')}</h1>
        <p className={styles.lastUpdated}>{t('privacyPolicy.lastUpdated')}</p>

        <section className={styles.intro}>
          <Trans i18nKey="privacyPolicy.intro.text" components={{ a: <a /> }} />
        </section>

        {sections.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2>{section.title}</h2>
            {section.items ? (
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.title ? (
                      <>
                        <strong>{item.title}</strong>: {item.description}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <Trans i18nKey={`privacyPolicy.sections[${index}].text`} components={{ a: <a /> }} />
            )}
            {section.contact && (
              <div>
                <Trans i18nKey={`privacyPolicy.sections[${index}].text`} components={{ a: <a /> }} />
                <p>
                  <strong>{section.contact.emailLabel}</strong>: {' '}
                  <a href={`mailto:${section.contact.email}`} className={styles.contactLink}>
                    {section.contact.email}
                  </a>
                </p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default PoliticaPrivacidade;