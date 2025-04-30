import { useTranslation } from "react-i18next";
import Carousel from "../../../components/Carousel";
import styles from "./Design.module.scss";

function Design() {
  const { t } = useTranslation();

  const slidesData = t("design.slides", { returnObjects: true });

  return (
    <div className={styles.designContainer}>
      <Carousel slides={slidesData} sectionTitle={t("design.sectionTitle")} />
    </div>
  );
}

export default Design;