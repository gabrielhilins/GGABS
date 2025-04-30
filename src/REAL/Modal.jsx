import { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation} from "react-i18next";
import styles from "./REAl.module.scss";

const Modal = ({
  showModal = false,
  setShowModal = () => {},
  navigate = () => {},
}) => {
  const { t } = useTranslation();

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
        <h3>{t("modal.title")}</h3>
        <p>{t("modal.message")}</p>
        <p className={styles.redirectNotice}>{t("modal.redirect")}</p>
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