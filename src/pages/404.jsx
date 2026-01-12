import styles from './404.module.scss';
import Logo from '../assets/img/Wordmark Branco.png';
import { FaHome } from "react-icons/fa";
import StarsBackground from '../components/StarsBackground';

function NotFound404() {
  return (
    <div className={styles.notFoundContainer}>
      <StarsBackground section="hero" />
      <div className={styles.overlay}></div>
      
      <img src={Logo} alt="GGABS Logo" className={styles.logo} />
      
      <div className={styles.content}>
        <h1 className={styles.title}>404 - Página não encontrada</h1>
        <p className={styles.message}>
          Parece que você se perdeu no espaço profundo...
        </p>
        <p className={styles.subMessage}>
          A página que você está procurando não existe ou foi movida para outra galáxia.
        </p>
        <button
          className={styles.backButton}
          onClick={() => (window.location.href = "/")}
        >
          <FaHome className={styles.buttonIcon} />
          Voltar para Home
        </button>
      </div>
    </div>
  );
}

export default NotFound404;