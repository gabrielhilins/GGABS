import PropTypes from "prop-types";
import styles from "./REAl.module.scss";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import LogoReal from "../assets/img/Logo Preto Simulador.png";

const Receipt = ({ budget, formData, handleEnviarWhatsApp, resetForm, generatedTimestamp, serviceNames }) => {
  // Obtém o nome legível do serviço usando o serviceNames recebido como prop
  const serviceDisplayName = serviceNames[budget.service] || budget.service;

  // Formata a data e horário a partir do timestamp recebido
  const formattedDate = generatedTimestamp.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedTime = generatedTimestamp.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className={styles.receiptContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src={LogoReal} alt="Logo REAL" />
          <p>© 2025 REAL. Todos os direitos reservados</p>
          <a href="https://real-iota-ivory.vercel.app/" className={styles.knowREAL}>
            Conheça o REAL - Simulador de Orçamentos
          </a>
        </div>
      </div>
      <h3>Orçamento Gerado - {serviceDisplayName}</h3>
      <div className={styles.timestamp}>
        <p>
          <strong>Gerado em:</strong> {formattedDate} às {formattedTime}
        </p>
      </div>
      <hr />
      <div className={styles.receiptInfos}>
        <p><strong>Cliente:</strong> {formData.name} {formData.lastname}</p>
        <p><strong>Serviço:</strong> {serviceDisplayName}</p>
        <p><strong>Prazo Desejado:</strong> {budget.deadline}</p>
        <p><strong>Descrição inicial do Projeto:</strong> {budget.briefingSummary}</p>
      </div>
      <hr />
      <h4>Detalhamento do Orçamento</h4>
      <table role="table" aria-label="Detalhamento do Orçamento">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Preço Unitário</th>
            <th>Total (R$)</th>
          </tr>
        </thead>
        <tbody>
          {budget.details.map((item, index) => (
            <tr key={index}>
              <td data-label="Descrição">{item.desc}</td>
              <td data-label="Quantidade">{item.qty}</td>
              <td data-label="Preço Unitário">{item.unit === "-" ? "-" : `R$${item.unit.toFixed(2)}`}</td>
              <td data-label="Total (R$)">R${item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className={styles.total}>Total do Orçamento: R${budget.total.toFixed(2)}</h4>
      <p className={styles.observacao}>Observações:</p>
      <ul>
        <li>Orçamento sujeito à alteração após análise detalhada do Briefing.</li>
        <li>Validade do orçamento: 7 dias.</li>
        <li>Quer ajustar algo? Refaça a simulação ou entre em contato!</li>
      </ul>
      <hr />
      <div className={styles.contactSection}>
        <p style={{ color: "black" }}>Clique em &quot;Solicitar Orçamento via WhatsApp&quot; para fechar negócio!</p>
        <button onClick={handleEnviarWhatsApp} className={styles.whatsappButton}>
          <FaWhatsapp className={styles.whatsappIcon} /> Solicite seu orçamento via WhatsApp
        </button>
      </div>
      <button onClick={resetForm} className={styles.resetButton}>
        <FaArrowsRotate className={styles.icon} /> Simular Outro Orçamento
      </button>
    </div>
  );
};

Receipt.propTypes = {
  budget: PropTypes.shape({
    service: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    briefingSummary: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        desc: PropTypes.string.isRequired,
        qty: PropTypes.string.isRequired,
        unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        total: PropTypes.number.isRequired,
      })
    ).isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  }).isRequired,
  handleEnviarWhatsApp: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  generatedTimestamp: PropTypes.instanceOf(Date).isRequired,
  serviceNames: PropTypes.object.isRequired, // Adiciona propType para serviceNames
};

export default Receipt;