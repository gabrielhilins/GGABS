import styles from "./Compartilha.module.scss";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import CTA from "./CTA";

function Compartilha() {
  const siteURL = "https://www.ggabstechdesign.com.br";

  const copiarLink = () => {
    navigator.clipboard.writeText(siteURL);
    alert("Link copiado para a área de transferência!");
  };

  const compartilhar = (rede) => {
    let url = "";
    let mensagem = "";

    switch (rede) {
      case "whatsapp":
        mensagem = encodeURIComponent(
          "Conheça a GGABS TECH & DESIGN! Transforme seus sonhos digitais em realidade: " + siteURL
        );
        url = `https://wa.me/?text=${mensagem}`;
        break;
      case "twitter":
        mensagem = encodeURIComponent(
          "Transformando sonhos em realidade com a GGABS TECH & DESIGN! 🚀 Confira: " + siteURL
        );
        url = `https://twitter.com/intent/tweet?text=${mensagem}`;
        break;
      case "facebook":
        mensagem = encodeURIComponent(
          "A GGABS TECH & DESIGN cria soluções digitais incríveis! Conheça o trabalho deles: " + siteURL
        );
        url = `https://www.facebook.com/sharer/sharer.php?u=${siteURL}&quote=${mensagem}`; // Corrigido "e=" para "&quote="
        break;
      case "linkedin":
        mensagem = encodeURIComponent(
          "Inovação e design caminham juntos na GGABS TECH & DESIGN. Veja como eles transformam ideias em realidade: " + siteURL
        );
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${siteURL}&summary=${mensagem}`;
        break;
      case "instagram":
        url = `https://www.instagram.com/`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  return (
    <div className={styles["compartilha-container"]}>
      <h1 className={styles.title}>Compartilha pra geral!</h1>
      <p className={styles.subtitle}>
        Manda pra quem você conhece que tá querendo transformar seu sonho
        digital em realidade!
      </p>

      <div className={styles["compartilha-card"]}>
        {/* Imagem no topo do card */}
        <div className={styles["image-container"]}>
          <img
            src="/images/passo-a-passo-stories.jpg"
            alt="Tutorial de compartilhamento GGABS TECH & DESIGN"
            className={styles.image}
            loading="lazy"
          />
        </div>

        {/* Passo a passo escrito */}
        <div className={styles["passo-a-passo"]}>
          <h2 className={styles["passo-titulo"]}>
            Passo a passo para compartilhar meu trabalho nos Stories
          </h2>
          <ol className={styles["passo-lista"]}>
            <li>
              <strong>Passo 1: Copiar o link do site</strong>
              <p>Copie o link abaixo para usar no seu storie:</p>
              <div className={styles["link-box"]}>
                <span>{siteURL}</span>
                <button onClick={copiarLink}>Copiar</button>
              </div>
            </li>
            <li>
              <strong>Passo 2: Baixar o panfleto</strong>
              <p>Baixe nosso panfleto digital para usar como imagem:</p>
              <button className={styles.panfleto}>
                <MdOutlineFileDownload className={styles.icon} /> Baixar Panfleto.png
              </button>
            </li>
            <li>
              <strong>Passo 3: Abrir o Instagram</strong>
              <p>Abra o Instagram para criar seu storie:</p>
              <button
                className={styles.instagram}
                onClick={() => compartilhar("instagram")}
              >
                <FaInstagram className={styles.icon} /> Abrir Instagram
              </button>
            </li>
            <li>
              <strong>Passo 4: Criar um novo storie</strong>
              <p>
                Use o panfleto baixado como imagem no storie, adicione o link
                copiado usando a opção de link e poste!
              </p>
            </li>
            <li>
              <strong>Pronto!</strong>
              <p>
                Dessa forma você ajudou imensuravelmente o meu trabalho ser divulgado e chegar para mais pessoas!
                Muito obrigado!
              </p>
            </li>
          </ol>
        </div>

        {/* Botões de redes sociais existentes */}
        <div className={styles["texto-e-botoes"]}>
          <p className={styles.textoExplicativo}>
            <strong className={styles.destaque}>
              Clique nos botões abaixo e compartilhe diretamente nas suas redes
              sociais!
            </strong>
            <br />
            <span className={styles["texto-secundario"]}>
              Compartilhe com quem precisa e ajude a divulgar nosso trabalho!
            </span>
          </p>

          <div className={styles["botoes-redes"]}>
            <button
              className={styles.whatsapp}
              onClick={() => compartilhar("whatsapp")}
            >
              <FaWhatsapp className={styles.icon} />{" "}
              <span>Compartilhe no WhatsApp</span>
            </button>
            <button
              className={styles.twitter}
              onClick={() => compartilhar("twitter")}
            >
              <FaXTwitter className={styles.icon} />{" "}
              <span>Compartilhe no X (ex-Twitter)</span>
            </button>
            <button
              className={styles.facebook}
              onClick={() => compartilhar("facebook")}
            >
              <FaFacebook className={styles.icon} />{" "}
              <span>Compartilhe no Facebook</span>
            </button>
            <button
              className={styles.linkedin}
              onClick={() => compartilhar("linkedin")}
            >
              <FaLinkedin className={styles.icon} />{" "}
              <span>Compartilhe no LinkedIn</span>
            </button>
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}

export default Compartilha;