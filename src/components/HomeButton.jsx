import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import styles from "./HomeButton.module.scss";

function HomeButton({ textKey = "home_button.text" }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className={styles.homeButton}>
      <FaHome className={styles.homeIcon} /> {t(textKey)}
    </button>
  );
}

export default HomeButton;