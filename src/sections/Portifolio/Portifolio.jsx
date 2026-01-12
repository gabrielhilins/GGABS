import { useState, useEffect, useMemo } from "react";
import styles from "./Portifolio.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { portfolioData } from "../../data/portfolio";
import ProjectCard from "../../components/common/ProjectCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Portifolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sortProjects = (projects) => {
    return [...projects].sort((a, b) => {

      const dateDiff = new Date(b.date) - new Date(a.date);
      if (dateDiff !== 0) return dateDiff;
      
      const statusOrder = { finalizado: 0, "em desenvolvimento": 1, "em concepção": 2 };
      return statusOrder[a.status] - statusOrder[b.status];
    });
  };

  const filteredProjects = useMemo(() => {
    const projects = selectedCategory === "all"
      ? portfolioData
      : portfolioData.filter(p => p.sector === selectedCategory);
    return sortProjects(projects);
  }, [selectedCategory]);

  return (
    <div className={styles["portifolio-container"]}>
      <div className={styles.title} data-aos="fade-down">
        <h1>Portfólio</h1>
      </div>
      <div className={styles.subtitle} data-aos="fade-up">
        <p>Veja nosso trabalho: O que criamos e já fizemoz para nossos clientes!</p>
      </div>

      <div className={styles["portifolio-nav"]} data-aos="fade-up">
        {[
          { id: "all", label: "Tudo" },
          { id: "tech", label: "Tecnologia" },
          { id: "design", label: "Design" },
        ].map(category => (
          <label
            key={category.id}
            className={`${styles["nav-button"]} ${selectedCategory === category.id ? styles.active : ""}`}
          >
            <input
              type="radio"
              name="category"
              value={category.id}
              checked={selectedCategory === category.id}
              onChange={() => setSelectedCategory(category.id)}
            />
            {category.label}
          </label>
        ))}
      </div>

      <div className={styles["portifolio-carousel"]} data-aos="zoom-in">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 12000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.swiper}
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.id} className={styles.swiperSlide}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Portifolio;