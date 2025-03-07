import { FaLinkedin } from "react-icons/fa";
import styles from './QuemSou.module.scss';
import Logo from '../../assets/img/Logo-T-Branco-FundoAzul.png';
import profilePhoto from '../../assets/img/fotoGabriel.png';
import LogoPortifolio from '../../assets/img/Logo-PortifolioPessoal.png'

function QuemSou() {
  return (
    <div className={styles["quemsou-container"]}>
      <h1 className={styles.title}>QUEM SOU?</h1>
      <div className={styles["profile-card"]}>
        <div className={styles["logo-wrapper"]}>
          <img src={Logo} alt="Logo GABS" className={styles.logo} />
          <img src={profilePhoto} alt="Foto de Gabriel Henrique Lins" className={styles["profile-photo"]} />
        </div>
        <h2 className={styles.name}>Gabriel Henrique Lins</h2>
        <p className={styles.description}>
          Lorem ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem ipsum has been the industrys standard dummy text ever since the 1500s.
        </p>
        <div className={styles["button-container"]}>
          <a href="#portifolio" className={`${styles.button} ${styles["portfolio-button"]}`}>
            <img src={LogoPortifolio} alt="Logo Portifolio pessoal" className={styles["portfolio-photo"]} />
            Portfólio
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles["linkedin-button"]}`}>
            <FaLinkedin className={styles["linkedin-icon"]} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default QuemSou;
