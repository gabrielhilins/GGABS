import { useTranslation } from "react-i18next";
import Carousel from "../../components/Carousel";
import styles from "./DevWeb.module.scss";

function DevWeb() {
  const { t } = useTranslation();

  const slidesData = t("dev_web.slides", { returnObjects: true });

  return (
    <div className={styles.devWebContainer}>
      
      <Carousel slides={slidesData} sectionTitle={t("dev_web.sectionTitle")} />
    </div>
  );
}

export default DevWeb;