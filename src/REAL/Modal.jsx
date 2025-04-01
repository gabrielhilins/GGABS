import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./REAl.module.scss";

const Modal = ({
  showModal = false,
  setShowModal = () => {},
  navigate = () => {},
}) => {
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
        navigate("/");
        window.scrollTo(0, 0);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showModal, setShowModal, navigate]);

  if (!showModal) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Seu pedido está a caminho!</h3>
        <p>
          Agradecemos por escolher a GGABS TECH & DESIGN! Sua solicitação de
          orçamento foi enviada com sucesso via WhatsApp. Nossa equipe entrará
          em contato em breve.
        </p>
        <p className={styles.redirectNotice}>
          Redirecionando ao topo da página inicial em 10 segundos.
        </p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Modal;