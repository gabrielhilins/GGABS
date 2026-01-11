import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './PoliticaPrivacidade.module.scss';

function PoliticaPrivacidade() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Informações que Coletamos",
      items: [
        {
          title: "Informações fornecidas por você",
          description: "Dados como nome, e-mail, telefone ou outras informações pessoais que você nos envia voluntariamente ao preencher formulários, solicitar orçamentos, enviar e-mails ou entrar em contato com a GGABS Tech & Design por outros meios."
        },
        {
          title: "Informações coletadas automaticamente",
          description: "Dados técnicos como endereço IP, tipo de navegador, sistema operacional, páginas visitadas, horário e duração da visita no ggabs.com, captados por cookies e tecnologias similares para melhorar sua experiência e analisar o desempenho do site."
        },
        {
          title: "Informações de terceiros",
          description: "Dados recebidos de plataformas como redes sociais ou serviços integrados (ex.: Instagram, LinkedIn), caso você interaja com a GGABS Tech & Design por meio dessas ferramentas, conforme suas políticas de privacidade."
        }
      ]
    },
    {
      title: "2. Como Usamos Suas Informações",
      items: [
        "Responder às suas perguntas, solicitações de orçamento ou suporte enviados à GGABS Tech & Design.",
        "Melhorar a funcionalidade, o design e o conteúdo do site ggabs.com, bem como dos serviços e produtos oferecidos.",
        "Enviar comunicações, como newsletters, atualizações sobre projetos ou promoções da GGABS Tech & Design, caso você opte por recebê-las.",
        "Cumprir obrigações legais aplicáveis ou proteger os direitos, a propriedade e a segurança da GGABS Tech & Design, de nossos usuários ou do público."
      ]
    },
    {
      title: "3. Compartilhamento de Informações",
      items: [
        "A GGABS Tech & Design não vende, aluga nem comercializa suas informações pessoais com terceiros para fins de marketing.",
        "Podemos compartilhar dados com parceiros ou prestadores de serviços (ex.: hospedagem de sites, ferramentas de análise, serviços de e-mail) que auxiliam a GGABS Tech & Design, sempre sob acordos que garantem confidencialidade e segurança.",
        "Em situações exigidas por lei, para responder a processos judiciais ou para proteger a integridade do site ggabs.com e de nossos usuários."
      ]
    },
    {
      title: "4. Cookies e Tecnologias Semelhantes",
      text: "O site ggabs.com utiliza cookies e tecnologias similares para personalizar sua experiência, lembrar preferências e analisar o tráfego. Você pode gerenciar ou desativar cookies nas configurações do seu navegador, mas isso pode limitar algumas funcionalidades do site da GGABS Tech & Design."
    },
    {
      title: "5. Segurança dos Dados",
      text: "A GGABS Tech & Design implementa medidas técnicas e organizacionais robustas para proteger suas informações pessoais contra acesso não autorizado, perda, alteração ou uso indevido. No entanto, reconhecemos que nenhum sistema conectado à internet é 100% seguro, e não podemos garantir segurança absoluta dos dados transmitidos."
    },
    {
      title: "6. Seus Direitos",
      items: [
        "Você pode solicitar acesso, correção ou exclusão de seus dados pessoais entrando em contato com a GGABS Tech & Design.",
        "Optar por cancelar o recebimento de comunicações promocionais a qualquer momento, utilizando o link de descadastramento ou nos contatando diretamente.",
        "Em algumas jurisdições, você pode ter direitos adicionais sob leis de proteção de dados (ex.: LGPD no Brasil), que respeitaremos conforme aplicável."
      ]
    },
    {
      title: "7. Links para Sites de Terceiros",
      text: "O site ggabs.com pode conter links para plataformas externas, como redes sociais ou portfólios de projetos. A GGABS Tech & Design não se responsabiliza pelas políticas de privacidade ou pelo conteúdo desses sites de terceiros."
    },
    {
      title: "8. Alterações nesta Política",
      text: "A GGABS Tech & Design pode atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou em requisitos legais. As alterações serão publicadas nesta página com a data de atualização revisada. Recomendamos que você revise a Política de Privacidade da GGABS Tech & Design regularmente para se manter informado."
    },
    {
      title: "9. Contato",
      text: "Para dúvidas, solicitações ou mais informações sobre esta Política de Privacidade da GGABS Tech & Design, entre em contato:",
      contact: {
        emailLabel: "E-mail",
        email: "contato@ggabstechdesign.com.br"
      }
    }
  ];

  return (
    <div className={styles.privacyContainer}>
      <div className={styles.contentWrapper}>
        <button onClick={() => navigate('/')} className={styles.goBackButton}>
          <IoMdArrowBack className={styles.goBackIcon} /> Voltar
        </button>
        <h1 className={styles.title}>Política de Privacidade</h1>
        <p className={styles.lastUpdated}>Última atualização: 09 de abril de 2025</p>

        <section className={styles.intro}>
          <p>
            A GGABS Tech & Design valoriza a privacidade dos visitantes do site <a href="https://ggabstechdesign.com.br" target="_blank" rel="noopener noreferrer">ggabstechdesign.com.br</a>. Esta Política de Privacidade da GGABS Tech & Design explica como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais ao acessar ou utilizar nosso site oficial. Ao navegar no ggabs.com, você concorda com as práticas descritas nesta política. Caso não concorde, recomendamos que não utilize o site.
          </p>
        </section>

        {sections.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2>{section.title}</h2>
            {section.items ? (
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.title ? (
                      <>
                        <strong>{item.title}</strong>: {item.description}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{section.text}</p>
            )}
            {section.contact && (
              <div>
                <p>{section.text}</p>
                <p>
                  <strong>{section.contact.emailLabel}</strong>: {' '}
                  <a href={`mailto:${section.contact.email}`} className={styles.contactLink}>
                    {section.contact.email}
                  </a>
                </p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default PoliticaPrivacidade;