/* eslint-disable no-unused-vars */
import styles from './ChangeLanguage.module.scss';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import "../locales/118n";
import { FaArrowDown } from "react-icons/fa";
import UsaFlag from '../assets/svg/flag-us-svgrepo-com.svg'
import BrazilFlag from '../assets/svg/flag-for-flag-brazil-svgrepo-com (1).svg'

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('pt');

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const changeLanguage = (lng) => {
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };


  return (
    <div className={styles.dropdownContainer} >
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.dropdownButton}
        >
          {selectedLanguage === 'pt' && (
            <img src={BrazilFlag} alt="Português" width={48} height={48} className={styles.flagImage} />
          )}
          {selectedLanguage === 'en' && (
            <img src={UsaFlag}alt="English" width={48} height={48} className={styles.flagImage} />
          )}
          
          <FaArrowDown className={`${styles.arrowIcon} ${isOpen ? styles.rotated : ''}`} />
        </button>
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className="py-1">
            <button onClick={() => changeLanguage('en')} className={styles.languageButton}>
              <img src={UsaFlag} alt="English" width={48} height={48} className={styles.flagImage} />
              <span className={styles.languageText}>EN-US</span> 
            </button>
            <button onClick={() => changeLanguage('pt')} className={styles.languageButton}>
              <img src={BrazilFlag} alt="Português" width={48} height={48} className={styles.flagImage} />
              <span className={styles.languageText}>PT-BR</span> 
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;