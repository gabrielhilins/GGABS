import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import styles from "./HomeButton.module.scss";

function HomeButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className={styles.homeButton}>
      <FaHome className={styles.homeIcon} /> Voltar para o Início
    </button>
  );
}

export default HomeButton;