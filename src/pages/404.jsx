// src/pages/NotFound404.jsx
import ChangeLanguage from '../components/ChangeLanguage';
import styles from './404.module.scss';

function NotFound404() {
  return (
    <div className={styles.notFoundContainer}>
      {/* Conteúdo da página 404 */}
      <ChangeLanguage />
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
          Voltar para a Nave GGABS(Página Inicial)
        </button>
      </div>
    </div>
  );
}

export default NotFound404;