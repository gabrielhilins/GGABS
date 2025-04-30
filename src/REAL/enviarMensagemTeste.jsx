import { useTranslation } from "react-i18next";

function enviarWhatsApp(nome, sobrenome, servico, prazo, briefingSummary, generatedDate, generatedTime) {
  const { t } = useTranslation();
  const mensagem = t("enviarWhatsApp.message", {
    name: nome,
    lastname: sobrenome,
    service: servico,
    deadline: prazo,
    briefingSummary,
    date: generatedDate,
    time: generatedTime,
  });

  const url = `https://wa.me/5581999034034?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

export default enviarWhatsApp;