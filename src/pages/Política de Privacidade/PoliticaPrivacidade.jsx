import { IoMdArrowBack } from 'react-icons/io';
import styles from './PoliticaPrivacidade.module.scss';
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';

function PoliticaPrivacidade() {
  const navigate = useNavigate();
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className={styles.privacyContainer}>
      <div className={styles.contentWrapper}>
        <button onClick={() => navigate("/")} className={styles.goBackButton}>
          <IoMdArrowBack className={styles.goBackIcon} /> Voltar
        </button>
        <h1 className={styles.title}>Política de Privacidade da GGABS Tech & Design</h1>
        <p className={styles.lastUpdated}>Última atualização: 09 de abril de 2025</p>

        <section className={styles.intro}>
          <p>
            A GGABS Tech & Design valoriza a privacidade dos visitantes do site <a href="https://ggabstechdesign.com.br" target="_blank" rel="noopener noreferrer">ggabstechdesign.com.br</a>. Esta Política de Privacidade da GGABS Tech & Design explica como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais ao acessar ou utilizar nosso site oficial. Ao navegar no ggabs.com, você concorda com as práticas descritas nesta política. Caso não concorde, recomendamos que não utilize o site.
          </p>
        </section>

        <section className={styles.section}>
          <h2>1. Informações que Coletamos</h2>
          <ul>
            <li><strong>Informações fornecidas por você</strong>: Dados como nome, e-mail, telefone ou outras informações pessoais que você nos envia voluntariamente ao preencher formulários, solicitar orçamentos, enviar e-mails ou entrar em contato com a GGABS Tech & Design por outros meios.</li>
            <li><strong>Informações coletadas automaticamente</strong>: Dados técnicos como endereço IP, tipo de navegador, sistema operacional, páginas visitadas, horário e duração da visita no ggabs.com, captados por cookies e tecnologias similares para melhorar sua experiência e analisar o desempenho do site.</li>
            <li><strong>Informações de terceiros</strong>: Dados recebidos de plataformas como redes sociais ou serviços integrados (ex.: Instagram, LinkedIn), caso você interaja com a GGABS Tech & Design por meio dessas ferramentas, conforme suas políticas de privacidade.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. Como Usamos Suas Informações</h2>
          <ul>
            <li>Responder às suas perguntas, solicitações de orçamento ou suporte enviados à GGABS Tech & Design.</li>
            <li>Melhorar a funcionalidade, o design e o conteúdo do site ggabs.com, bem como dos serviços e produtos oferecidos.</li>
            <li>Enviar comunicações, como newsletters, atualizações sobre projetos ou promoções da GGABS Tech & Design, caso você opte por recebê-las.</li>
            <li>Cumprir obrigações legais aplicáveis ou proteger os direitos, a propriedade e a segurança da GGABS Tech & Design, de nossos usuários ou do público.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Compartilhamento de Informações</h2>
          <ul>
            <li>A GGABS Tech & Design não vende, aluga nem comercializa suas informações pessoais com terceiros para fins de marketing.</li>
            <li>Podemos compartilhar dados com parceiros ou prestadores de serviços (ex.: hospedagem de sites, ferramentas de análise, serviços de e-mail) que auxiliam a GGABS Tech & Design, sempre sob acordos que garantem confidencialidade e segurança.</li>
            <li>Em situações exigidas por lei, para responder a processos judiciais ou para proteger a integridade do site ggabs.com e de nossos usuários.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Cookies e Tecnologias Semelhantes</h2>
          <p>O site ggabs.com utiliza cookies e tecnologias similares para personalizar sua experiência, lembrar preferências e analisar o tráfego. Você pode gerenciar ou desativar cookies nas configurações do seu navegador, mas isso pode limitar algumas funcionalidades do site da GGABS Tech & Design.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Segurança dos Dados</h2>
          <p>A GGABS Tech & Design implementa medidas técnicas e organizacionais robustas para proteger suas informações pessoais contra acesso não autorizado, perda, alteração ou uso indevido. No entanto, reconhecemos que nenhum sistema conectado à internet é 100% seguro, e não podemos garantir segurança absoluta dos dados transmitidos.</p>
        </section>

        <section className={styles.section}>
          <h2>6. Seus Direitos</h2>
          <ul>
            <li>Você pode solicitar acesso, correção ou exclusão de seus dados pessoais entrando em contato com a GGABS Tech & Design.</li>
            <li>Optar por cancelar o recebimento de comunicações promocionais a qualquer momento, utilizando o link de descadastramento ou nos contatando diretamente.</li>
            <li>Em algumas jurisdições, você pode ter direitos adicionais sob leis de proteção de dados (ex.: LGPD no Brasil), que respeitaremos conforme aplicável.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Links para Sites de Terceiros</h2>
          <p>O site ggabs.com pode conter links para plataformas externas, como redes sociais ou portfólios de projetos. A GGABS Tech & Design não se responsabiliza pelas políticas de privacidade ou pelo conteúdo desses sites de terceiros.</p>
        </section>

        <section className={styles.section}>
          <h2>8. Alterações nesta Política</h2>
          <p>A GGABS Tech & Design pode atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou em requisitos legais. As alterações serão publicadas nesta página com a data de atualização revisada. Recomendamos que você revise a Política de Privacidade da GGABS Tech & Design regularmente para se manter informado.</p>
        </section>

        <section className={styles.section}>
          <h2>9. Contato</h2>
          <p>Para dúvidas, solicitações ou mais informações sobre esta Política de Privacidade da GGABS Tech & Design, entre em contato:</p>
          <p><strong>E-mail</strong>: <a href="mailto:contato@ggabstechdesign.com.br" className={styles.contactLink}>contato@ggabstechdesign.com.br</a></p>
        </section>
      </div>
    </div>
  );
}

export default PoliticaPrivacidade;