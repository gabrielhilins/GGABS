import { useEffect } from 'react';
import styles from "./Serviços.module.scss";
import { FaCode, FaLayerGroup, FaPaintBrush } from "react-icons/fa";

const servicosData = [
  {
    icon: <FaCode />,
    ariaLabel: "Ícone de Desenvolvimento Web",
    title: "Desenvolvimento Web",
    exemplos: [
      { nome: "E-commerce", descricao: "lojas online com integração de pagamentos" },
      { nome: "Landing Pages", descricao: "páginas de conversão para capturar leads" },
      { nome: "Portfólios", descricao: "páginas personalizadas para exibir projetos, habilidades e conquistas de forma profissional" },
      { nome: "Sites Institucionais", descricao: "presença digital para empresas" }
    ]
  },
  {
    icon: <FaLayerGroup />,
    ariaLabel: "Ícone de Sistemas de Gestão",
    title: "Sistemas de Gestão",
    exemplos: [
      { nome: "Gestão de Pedido", descricao: "controle de pedidos e estoque para restaurantes" },
      { nome: "Gestão Empresarial (ERP)", descricao: "gestão de processos internos para empresas" },
      { nome: "Gestão de Agendamentos", descricao: "sistemas para reservas e marcações" }
    ]
  },
  {
    icon: <FaPaintBrush />,
    ariaLabel: "Ícone de Design",
    title: "Design",
    exemplos: [
      { nome: "Identidade Visual", descricao: "logotipos, paleta de cores e tipografia" },
      { nome: "Cardápios", descricao: "menus bonitos e funcionais para restaurantes" },
      { nome: "Material Promocional", descricao: "banners, flyers e postagens para redes sociais" }
    ]
  }
];

function Servicos() {
  useEffect(() => {
    // Adiciona smooth scroll para os links internos
    const handleSmoothScroll = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const saibaMaisLinks = document.querySelectorAll(`.${styles['saiba-mais']}`);
    saibaMaisLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      saibaMaisLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <section className={styles["servicos-container"]}>
      <h1 className={styles.title}>Serviços</h1>
      <p className={styles.subtitle}>Aqui você encontra alguns dos serviços que ofereço</p>
      <div className={styles["cards-container"]}>
        {servicosData.map((servico, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon} aria-label={servico.ariaLabel}>
              {servico.icon}
            </div>
            <h2>{servico.title}</h2>
            <ul className={styles.exemplos}>
              {servico.exemplos.map((exemplo, i) => (
                <li key={i}>
                  <span className={styles.exemploTexto}>
                    <strong>{exemplo.nome}:</strong> {exemplo.descricao}
                  </span>
                </li>
              ))}
            </ul>
            <a 
              href={`#${servico.title.replace(/\s+/g, '-').toLowerCase()}`} 
              className={styles["saiba-mais"]}
              aria-label={`Saiba mais sobre ${servico.title}`}
            >
              Saiba Mais
            </a>
          </div>
        ))}
      </div>
      <p className={styles.notice}></p>
    </section>
  );
}

export default Servicos;