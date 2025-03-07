import styles from './Hero.module.scss';
import StarsBackground from "../../components/StarsBackground";
import { HiRocketLaunch } from "react-icons/hi2";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <StarsBackground section="hero" /> {/* Passa section="hero" */}
      <div className={styles.title}>
        <h1>O que faltava para seu negócio está aqui!</h1>
      </div>
      <div className={styles.subtitle}>
        <p>Design e tecnologia que conectam sua visão ao sucesso.</p>
      </div>
      <div className={styles.botoes}>
        <button className={styles.act}>
          <HiRocketLaunch className={styles.icon} />
          <span>CONECTE-SE AO FUTURO AGORA!</span>
        </button>
        <button className={styles.saibamais}>
          <IoIosArrowDropdownCircle className={styles.icon2} />
          <p>Saiba mais</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;