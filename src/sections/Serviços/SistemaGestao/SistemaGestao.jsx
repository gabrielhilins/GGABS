import { useTranslation } from "react-i18next";
import Carousel from "../../../components/Carousel";
import styles from "./SistemaGestao.module.scss";

function SistemaGestao() {
  const { t } = useTranslation();

  const slidesData = t("sistema_gestao.slides", { returnObjects: true });

  return (
    <div className={styles["sistema-gestao-container"]}>
      <Carousel
        slides={slidesData}
        sectionTitle={t("sistema_gestao.sectionTitle")}
      />
    </div>
  );
}

export default SistemaGestao;