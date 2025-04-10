import { IoMdArrowBack } from 'react-icons/io';
import styles from './TermosDeUso.module.scss';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function TermosDeUso() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo ao carregar
  }, []);

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

        <section className={styles.section}>
          <h2>1. Uso do Site</h2>
          <ul>
            <li>Você está autorizado a usar o site da GGABS Tech & Design exclusivamente para propósitos legítimos e de acordo com estes Termos de Uso.</li>
            <li>É estritamente proibido utilizar o site para ações que violem a legislação, prejudiquem terceiros ou interfiram na operação do site, como tentativas de hacking, disseminação de malware ou qualquer atividade ilícita.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. Propriedade Intelectual</h2>
          <ul>
            <li>Todos os elementos do site da GGABS Tech & Design, incluindo textos, designs, logotipos, imagens e códigos, pertencem exclusivamente à GGABS Tech & Design ou aos seus parceiros licenciados, sendo protegidos pelas leis de propriedade intelectual aplicáveis no Brasil.</li>
            <li>Você pode visualizar e utilizar o conteúdo do site para fins pessoais e não comerciais, mas não tem permissão para reproduzir, compartilhar, alterar ou comercializar qualquer material sem prévia autorização por escrito da GGABS Tech & Design.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Limitação de Responsabilidade</h2>
          <ul>
            <li>O site da GGABS Tech & Design é oferecido como está &quot;as is&quot;, sem garantias de qualquer tipo, sejam elas expressas ou implícitas. Não garantimos que o site estará sempre acessível, livre de falhas ou imune a problemas técnicos.</li>
            <li>A GGABS Tech & Design não será responsável por quaisquer danos diretos, indiretos, incidentais ou especiais decorrentes do uso ou da indisponibilidade do site, salvo quando a lei brasileira exigir responsabilidade específica.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Links para Sites Externos</h2>
          <p>O site da GGABS Tech & Design pode incluir links para plataformas ou serviços de terceiros. Não exercemos controle sobre esses sites externos e não nos responsabilizamos por seus conteúdos, práticas ou políticas de privacidade.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Atualizações dos Termos</h2>
          <p>A GGABS Tech & Design pode revisar ou alterar estes Termos de Uso a qualquer momento, conforme necessário. As mudanças passam a valer assim que publicadas nesta página. Continuar utilizando o site após tais atualizações implica na aceitação dos novos termos.</p>
        </section>

        <section className={styles.section}>
          <h2>6. Suspensão de Acesso</h2>
          <p>Reservamo-nos o direito de suspender ou bloquear seu acesso ao site da GGABS Tech & Design, a nosso critério, especialmente em casos de descumprimento destes Termos de Uso ou para proteger a segurança do site, de nossos usuários ou de nossos direitos.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Legislação Aplicável</h2>
          <p>Estes Termos de Uso são regidos pelas leis da República do Brasil. Qualquer controvérsia será submetida ao foro da comarca de Recife, PE, exceto quando a legislação determine outra jurisdição.</p>
        </section>

        <section className={styles.section}>
          <h2>8. Contato</h2>
          <p>Para perguntas, sugestões ou esclarecimentos sobre estes Termos de Uso da GGABS Tech & Design, entre em contato conosco:</p>
          <p><strong>E-mail</strong>: <a href="mailto:contato@ggabstechdesign.com.br" className={styles.contactLink}>contato@ggabstechdesign.com.br</a></p>
        </section>
      </div>
    </div>
  );
}

export default TermosDeUso;