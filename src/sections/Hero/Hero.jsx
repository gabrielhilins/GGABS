import styles from './Hero.module.scss';
import StarsBackground from "../../components/StarsBackground";

const Hero = () => {
  
  return (
    <div className={styles["hero-container"]}>
      <StarsBackground />
      <h1>Hero</h1>
    </div>
  );
};

export default Hero;
