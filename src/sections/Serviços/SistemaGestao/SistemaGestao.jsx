import Carousel from "../../../components/Carousel";
import styles from "./SistemaGestao.module.scss";

const slidesData = [
  {
    title: "Gestão de Pedidos",
    description: "Desenvolva um sistema completo de pedidos para sua loja, com fácil gestão, controle de estoque e integração com pagamentos online.",
    features: ["Processamento Eficiente", "Gestão de Inventário", "Notificações de Pedidos", "Integração com Pagamentos"],
    cta: { title: "Otimize seus Pedidos", buttonText: "Solicite já" },
  },
  {
    title: "Gestão Empresarial (ERP)",
    description: "Automatize e centralize a gestão do seu negócio, com ferramentas avançadas para controlar finanças, inventário e equipes de forma integrada.",
    features: ["Gestão Financeira", "Controle de Estoque", "Relatórios em Tempo Real", "Integração Multicanal"],
    cta: { title: "Transforme sua Gestão", buttonText: "Saiba Mais" },
  },
  {
    title: "Gestão de Agendamentos",
    description: "Facilite seus agendamentos com um sistema eficiente e simples de usar, tanto para clientes quanto para gestores.",
    features: ["Agendamento Online", "Notificações de Lembretes", "Acesso ao Histórico de Consultas", "Interface Intuitiva"],
    cta: { title: "Gerencie Agendamentos com Facilidade", buttonText: "Comece Agora" },
  },
];

function SistemaGestao() {
  return (
    <div className={styles["sistema-gestao-container"]}>
      <Carousel slides={slidesData} sectionTitle="Sistema de Gestão" />
    </div>
  );
}

export default SistemaGestao;
