// src/pages/NotFound404.jsx
import styles from './404.module.scss';
import Logo from '../assets/img/Wordmark Branco.png';
import { FaHome } from "react-icons/fa";

function NotFound404() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/kvPHbLM16tc?autoplay=1&mute=1&controls=0&loop=1&playlist=kvPHbLM16tc&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
          title="Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoIframe}
        ></iframe>
      </div>
      <div className={styles.overlay}></div>
      
      <img src={Logo} alt="GGABS Logo" className={styles.logo} />
      
      {/* Conteúdo da página 404 */}
      <div className={styles.content}>
        <h1 className={styles.title}>404 - Tripulante Perdido!</h1>
        <p className={styles.message}>
          Parece que você foi ejetado da nave... Esta página não foi encontrada entre nós!
        </p>
        <p className={styles.subMessage}>
          &quot;Há um impostor por aí... ou talvez seja só um erro. Volte antes que o reator exploda!&quot;
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