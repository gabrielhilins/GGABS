import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.scss";
import StarsBackground from "../../components/StarsBackground";
import { HiRocketLaunch } from "react-icons/hi2";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const onTitleComplete = () => {
    setSubtitleVisible(true);
  };

  const onSubtitleComplete = () => {
    setButtonsVisible(true);
  };

  const handleSaibaMaisClick = () => {
    document.getElementById("diferenciais").scrollIntoView({ behavior: "smooth" });
  };
  const handleOrçamentoClick = () => {
    navigate("/solicitar-orcamentos")
  };

  return (
    <div className={styles["hero-container"]}>
      <StarsBackground section="hero" />
      <div className={styles.title}>
        <h1>
          <ReactTyped
            strings={["O que faltava para seu negócio está aqui!"]}
            typeSpeed={40}
            backSpeed={30}
            showCursor={false}
            onComplete={onTitleComplete}
          />
        </h1>
      </div>

      {subtitleVisible && (
        <div className={styles.subtitle}>
          <p>
            <ReactTyped
              strings={["Design e tecnologia que conectam sua visão ao sucesso."]}
              typeSpeed={60}
              backSpeed={30}
              showCursor={false}
              onComplete={onSubtitleComplete}
            />
          </p>
        </div>
      )}

      {buttonsVisible && (
        <div className={styles.botoes} data-aos="fade-up">
          <button className={styles.act} onClick={handleOrçamentoClick}>
            <HiRocketLaunch className={styles.icon} />
            <span>CONECTE-SE AO FUTURO AGORA!</span>
          </button>
          <button className={styles.saibamais} onClick={handleSaibaMaisClick}>
            <IoIosArrowDropdownCircle className={styles.icon2} />
            <p className={styles.text}>Saiba mais</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Hero;
