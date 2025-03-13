import styles from "./Compartilha.module.scss";
import { FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

function Compartilha() {
  const siteURL = "https://www.ggabssoftwaredesign.com.br";

  const copiarLink = () => {
    navigator.clipboard.writeText(siteURL);
    alert("Link copiado para a área de transferência!");
  };

  const compartilhar = (rede) => {
    let url = "";
    const mensagem = encodeURIComponent(
      "Transforme sonhos em realidade com a GGabs Software & Design! Acesse: " +
        siteURL
    );

    switch (rede) {
      case "whatsapp":
        url = `https://wa.me/?text=${mensagem}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${mensagem}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${siteURL}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${siteURL}`;
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
        <div className={styles["link-container"]}>
          <p className={styles["link-text"]}>
            Copia esse link e mande pra quem quiser!
          </p>
          <div className={styles["link-box"]}>
            <span>{siteURL}</span>
            <button onClick={copiarLink}>Copiar</button>
          </div>
        </div>

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

        <p className={styles.textoExplicativo}>
          <span className={styles["texto-secundario"]}>
            Você também pode compartilhar nosso{" "}
          </span>
          <strong className={styles.destaque}>“panfleto digital”</strong>
          <span className={styles["texto-secundario"]}>
            {" "}
            nas redes sociais e até nos{" "}
          </span>
          <strong className={styles.destaque}>Stories do Instagram</strong>
        </p>

        <button className={styles.panfleto}>
          <MdOutlineFileDownload className={styles.icon} /> Baixar Panfleto.png
        </button>
        <p className={styles["panfleto-instrucao"]}>
          Baixe nosso panfleto e espalhe a novidade nos Stories do Instagram!
        </p>
      </div>

      <div className={styles.fim}>
        <div className={styles.agradecimento}>
            <p>Muito obrigado por tirar esse tempinho e olhar meu trabalho!</p>
        </div>
        <div className={styles["voltar-para-topo"]}>
          <a href="/">Voltar para o topo</a>
        </div>
      </div>
    </div>
  );
}

export default Compartilha;
