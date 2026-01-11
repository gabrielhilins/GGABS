import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./TermosDeUso.module.scss";

function TermosDeUso() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo ao carregar
  }, []);

  const sections = [
    {
      title: "1. Uso do Site",
      items: [
        "Você está autorizado a usar o site da GGABS Tech & Design exclusivamente para propósitos legítimos e de acordo com estes Termos de Uso.",
        "É estritamente proibido utilizar o site para ações que violem a legislação, prejudiquem terceiros ou interfiram na operação do site, como tentativas de hacking, disseminação de malware ou qualquer atividade ilícita."
      ]
    },
    {
      title: "2. Propriedade Intelectual",
      items: [
        "Todos os elementos do site da GGABS Tech & Design, incluindo textos, designs, logotipos, imagens e códigos, pertencem exclusivamente à GGABS Tech & Design ou aos seus parceiros licenciados, sendo protegidos pelas leis de propriedade intelectual aplicáveis no Brasil.",
        "Você pode visualizar e utilizar o conteúdo do site para fins pessoais e não comerciais, mas não tem permissão para reproduzir, compartilhar, alterar ou comercializar qualquer material sem prévia autorização por escrito da GGABS Tech & Design."
      ]
    },
    {
      title: "3. Limitação de Responsabilidade",
      items: [
        "O site da GGABS Tech & Design é oferecido como está, sem garantias de qualquer tipo, sejam elas expressas ou implícitas. Não garantimos que o site estará sempre acessível, livre de falhas ou imune a problemas técnicos.",
        "A GGABS Tech & Design não será responsável por quaisquer danos diretos, indiretos, incidentais ou especiais decorrentes do uso ou da indisponibilidade do site, salvo quando a lei brasileira exigir responsabilidade específica."
      ]
    },
    {
      title: "4. Links para Sites Externos",
      text: "O site da GGABS Tech & Design pode incluir links para plataformas ou serviços de terceiros. Não exercemos controle sobre esses sites externos e não nos responsabilizamos por seus conteúdos, práticas ou políticas de privacidade."
    },
    {
      title: "5. Atualizações dos Termos",
      text: "A GGABS Tech & Design pode revisar ou alterar estes Termos de Uso a qualquer momento, conforme necessário. As mudanças passam a valer assim que publicadas nesta página. Continuar utilizando o site após tais atualizações implica na aceitação dos novos termos."
    },
    {
      title: "6. Suspensão de Acesso",
      text: "Reservamo-nos o direito de suspender ou bloquear seu acesso ao site da GGABS Tech & Design, a nosso critério, especialmente em casos de descumprimento destes Termos de Uso ou para proteger a segurança do site, de nossos usuários ou de nossos direitos."
    },
    {
      title: "7. Legislação Aplicável",
      text: "Estes Termos de Uso são regidos pelas leis da República do Brasil. Qualquer controvérsia será submetida ao foro da comarca de Recife, PE, exceto quando a legislação determine outra jurisdição."
    },
    {
      title: "8. Contato",
      text: "Para perguntas, sugestões ou esclarecimentos sobre estes Termos de Uso da GGABS Tech & Design, entre em contato conosco:",
      contact: {
        emailLabel: "E-mail",
        email: "contato@ggabstechdesign.com.br"
      }
    }
  ];

  return (
    <div className={styles.termsContainer}>
      <div className={styles.contentWrapper}>
        <button onClick={() => navigate("/")} className={styles.goBackButton}>
          <IoMdArrowBack className={styles.goBackIcon} /> Voltar
        </button>
        <h1 className={styles.title}>Termos de Uso da GGABS Tech & Design</h1>
        <p className={styles.lastUpdated}>Última atualização: 09 de abril de 2025</p>

        <section className={styles.intro}>
          <p>
            Bem-vindo ao site da GGABS Tech & Design. Estes Termos de Uso da GGABS Tech & Design estabelecem as regras para o acesso e a utilização do nosso site oficial, disponível em <a href="https://ggabstechdesign.com.br" target="_blank" rel="noopener noreferrer">ggabstechdesign.com.br</a>. Ao acessar ou navegar neste site, você aceita cumprir plenamente estas condições. Se você não concordar com estes Termos de Uso, sugerimos que interrompa o uso do site imediatamente.
          </p>
        </section>

        {sections.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2>{section.title}</h2>
            {section.items ? (
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.text}</p>
            )}
            {section.contact && (
              <p>
                <strong>{section.contact.emailLabel}</strong>:{" "}
                <a
                  href={`mailto:${section.contact.email}`}
                  className={styles.contactLink}
                >
                  {section.contact.email}
                </a>
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default TermosDeUso;