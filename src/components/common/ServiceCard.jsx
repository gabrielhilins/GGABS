import PropTypes from "prop-types";
import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ icon: Icon, ariaLabel, title, exemplos }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon} aria-label={ariaLabel}>
        {Icon && <Icon />}
      </div>

      <h2 className={styles.cardTitle}>{title}</h2>

      <ul className={styles.exemplos}>
        {exemplos.map((exemplo, i) => (
          <li key={i}>
            <span className={styles.exemploTexto}>
              <strong>{exemplo.nome}:</strong> {exemplo.descricao}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.elementType,
  ariaLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
  exemplos: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServiceCard;
