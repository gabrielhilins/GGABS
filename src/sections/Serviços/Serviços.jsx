import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./Serviços.module.scss";
import { servicesData } from "../../data/services";

function Servicos() {
  const [selectedCategory, setSelectedCategory] = useState("Tech");

  // Flatten the data: Create a single array of all service items with their category info
  const allServices = useMemo(() => {
    return servicesData.flatMap((category) =>
      category.exemplos.map((exemplo) => ({
        ...exemplo,
        categoryTitle: category.title,
        icon: category.icon,
        route: category.route,
      }))
    );
  }, []);

  // Filter based on selection
  const filteredServices = useMemo(() => {
    return allServices.filter((service) => service.categoryTitle === selectedCategory);
  }, [selectedCategory, allServices]);

  return (
    <section className={styles["servicos-container"]}>
      <h1 className={styles.title}>Serviços</h1>
      <p className={styles.subtitle}>
        Aqui você encontra alguns dos serviços que oferecemos
      </p>

      {/* Filter Controls */}
      <div className={styles.filterContainer}>
        {[
          { id: "Tech", label: "Tech" },
          { id: "Design", label: "Design" },
        ].map((option) => (
          <label
            key={option.id}
            className={`${styles.filterButton} ${
              selectedCategory === option.id ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              name="category"
              value={option.id}
              checked={selectedCategory === option.id}
              onChange={() => setSelectedCategory(option.id)}
            />
            {option.label}
          </label>
        ))}
      </div>

      {/* Services List */}
      <div className={styles.servicesList}>
        {filteredServices.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.imageContainer}>
                <div className={styles.iconWrapper}>
                  <IconComponent />
                </div>
              </div>
              <div className={styles.contentContainer}>
                <span className={styles.categoryTag}>{service.categoryTitle}</span>
                <h2 className={styles.serviceTitle}>{service.nome}</h2>
                <p className={styles.serviceDescription}>{service.descricao}</p>
                <Link to={service.route} className={styles.saibaMaisBtn}>
                  {service.buttonText}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Servicos;
