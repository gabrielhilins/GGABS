import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaBullhorn, FaCalendarCheck, FaClipboardList, FaCogs, FaPaintBrush, FaRocket, FaBuilding } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import AOS from "aos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import styles from "./Carousel.module.scss";

// Mapeamento de textos personalizados para o botão do portfolio
const portfolioButtonText = {
  "E-Commerce": "Conheça os E-commerces que já criei",
  "Landing Pages": "Conheça as Landing Pages que desenvolvi",
  "Portfólio": "Conheça os portfólios que já desenvolvi",
  "Sites Institucionais": "Conheça os Sites Institucionais que já desenvolvi",
  "Sistema de Pedidos": "Conheça os Sistemas de Pedidos que implementei",
  "Sistema de Gestão Empresarial (ERP)": "Conheça os ERPs que desenvolvi",
  "Sistema de Gestão de Consultas": "Conheça os Sistemas de Consultas que criei",
  "Identidade Visual": "Conheça as Identidades Visuais que produzi",
  "Cardápio Digital": "Conheça os Cardápios que já fiz",
  "Materiais Promocionais": "Conheça os Materiais Promocionais que criei",
};

// Mapeamento de públicos-alvo para cada serviço
const targetAudience = {
  "E-Commerce": [
    "- Este serviço é para você que tem uma <strong>loja online</strong> e quer expandir suas vendas de maneira estratégica.",
    "- Se você é um empreendedor em busca de otimização e potencializar seu resultados, esse serviço é para você.",
    "- Você que quer transformar sua loja em uma máquina de vendas, este serviço é para você.",
  ],
  "Landing Pages": [
    "- Para você que está lançando um produto ou serviço e precisa de uma landing page que converta!",
    "- Este serviço é ideal para startups e empreendedores que querem fazer um lançamento de sucesso.",
    "- Se você é um profissional de marketing e quer aumentar a conversão das suas campanhas, este serviço também é para você.",
  ],
  "Portfólio": [
    "- Se você é arquiteto, designer, fotógrafo ou profissional criativo, um portfólio digital é essencial para destacar seu trabalho.",
    "- Psicólogos, coaches e consultores podem se beneficiar de um site profissional para apresentar seus serviços e diferenciais.",
    "- Para artistas, escritores e freelancers que querem uma vitrine digital atrativa e funcional, esse serviço é para você."
  ],
  "Sites Institucionais": [
    "- Este serviço é para empresas que buscam estabelecer uma presença online sólida e profissional.",
    "- Se você tem uma instituição e precisa de um site informativo, temos a solução perfeita para você.",
    "- Você que quer gerar confiança com um site institucional que destaque a credibilidade do seu negócio, este serviço é para você.",
  ],
  "Gestão de Pedidos": [
    "- Se você tem um restaurante, lanchonete, padaria, loja de conveniência ou qualquer negócio que lida com pedidos, esse sistema ajuda a otimizar sua gestão",
    "- Para estabelecimentos que precisam de um sistema eficiente para gerenciar pedidos de forma ágil e organizada, estamos aqui para ajudar!",
    "- Este serviço é para você, empreendedor do ramo alimentício, varejista ou prestador de serviços, que busca uma plataforma de pedidos sem erros e mais produtividade",
  ],
  "Gestão Empresarial (ERP)": [
    "- Se sua empresa precisa de integração de processos e maior controle financeiro, este serviço é ideal para você.",
    "- Para negócios que buscam automatizar suas operações e melhorar a eficiência, esse sistema ERP vai transformar a sua gestão.",
    "- Você, que está em busca de uma solução completa para gerenciar seu negócio de forma inteligente, este ERP é para você.",
  ],
  "Gestão de Agendamentos": [
    "- Para clínicas, salões, barbearias, estúdios de tatuagem e outros negócios que dependem de agendamentos, esse sistema ajuda a organizar e otimizar sua rotina.",
    "- Este serviço é ideal para profissionais que precisam gerenciar horários de forma ágil e eficiente, garantindo praticidade para clientes e equipe",
    "- Se você quer transformar a gestão do seu consultório com um sistema eficiente de agendamento, esse serviço é para você.",
  ],
  "Identidade Visual": [
    "- Se você é dono de uma marca e quer se destacar no mercado, este serviço de identidade visual é para você.",
    "- Para startups que estão criando sua imagem no mercado, este serviço ajuda a construir uma identidade única e poderosa.",
    "- Você que busca uma renovação de imagem para sua empresa ou produto, esse serviço de identidade visual foi feito para você.",
  ],
  "Cardápio Digital": [
    "- Se você tem um restaurante, cafeteria ou food truck e quer modernizar o atendimento com um cardápio digital, este serviço é para você.",
    "- Este serviço é ideal para estabelecimentos de alimentação que buscam praticidade e inovação no atendimento ao cliente.",
    "- Para você, dono de restaurante, que quer oferecer um cardápio digital moderno e fácil de usar para seus clientes, estamos prontos para ajudar!",
  ],
  "Materiais Promocionais": [
    "- Este serviço é para empresas que estão em campanha e querem engajar seu público com materiais promocionais criativos.",
    "- Para profissionais de marketing que querem impactar seus clientes com materiais promocionais de alta qualidade.",
    "- Você que tem um negócio e quer atrair mais clientes com materiais promocionais personalizados, este serviço é para você.",
  ],
};

const Carousel = ({ slides, sectionTitle }) => {
  const [backgroundImage, setBackgroundImage] = useState(slides[0].image);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSlideChange = (swiper) => {
    setBackgroundImage(slides[swiper.realIndex].image);
  };

  // Ícones correspondentes aos serviços
  const serviceIcons = {
    "E-Commerce": <FaCartShopping className={styles.serviceIcon} />,
    "Landing Pages": <FaRocket className={styles.serviceIcon} />,
    "Portfólio": <BsFillGrid1X2Fill className={styles.serviceIcon} />,
    "Sites Institucionais": <FaBuilding className={styles.serviceIcon} />,
    "Gestão de Pedidos": <FaClipboardList className={styles.serviceIcon} />,
    "Gestão Empresarial (ERP)": <FaCogs className={styles.serviceIcon} />,
    "Gestão de Consultas": <FaCalendarCheck className={styles.serviceIcon} />,
    "Identidade Visual": <FaPaintBrush className={styles.serviceIcon} />,
    "Cardápio Digital": <BiSolidFoodMenu className={styles.serviceIcon} />,
    "Materiais Promocionais": <FaBullhorn className={styles.serviceIcon} />,
  };

  return (
    <section className={styles.carouselContainer} data-aos="fade-up">
      <div className={styles.overlay}></div>
      <h1 className={styles.sectionTitle}>{sectionTitle}</h1>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        navigation={{
          prevEl: `.${styles.swiperButtonPrev}`,
          nextEl: `.${styles.swiperButtonNext}`,
        }}
        pagination={{
          clickable: true,
        }}
        className={styles.carouselSwiper}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <div className={styles.leftSection}>
                <div className={styles.titleWrapper}>
                  {serviceIcons[slide.title]}
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                </div>
                <p className={styles.description}>{slide.description}</p>

                {/* Seção de Público-Alvo como teaser inicial */}
                <div className={styles.targetAudienceSection}>
                  <h3 className={styles.targetAudienceTitle}>Esse serviço é pra você🫵?</h3>
                  <ul className={styles.targetAudienceList}>
                    {targetAudience[slide.title]?.slice(0, 3).map((audience, i) => (
                      <li key={i}>{audience}</li>
                    ))}
                  </ul>
                </div>

                {/* Features como detalhe opcional */}
                {slide.features && (
                  <details className={styles.featuresToggle}>
                    <summary>Veja os benefícios</summary>
                    <ul className={styles.featuresList}>
                      {slide.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </details>
                )}

                {/* Botão CTA Portfolio destacado */}
                <div className={styles.ctaPortfolio}>
                  <button className={styles.ctaButtonPortfolio}>
                    <FaBookOpen className={styles.ctaIcon} />
                    {portfolioButtonText[slide.title] || "Conheça Nosso Trabalho"}
                  </button>
                </div>
              </div>

              {/* CTA Principal com mais destaque */}
              {slide.cta && (
                <div className={styles.ctaSection}>
                  <h3 className={styles.ctaTitle}>{slide.cta.title}</h3>
                  <button className={styles.ctaButton}>
                    <FaArrowUpRightFromSquare className={styles.ctaIcon} />
                    {slide.cta.buttonText}
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.swiperButtonPrev}>←</div>
      <div className={styles.swiperButtonNext}>→</div>
      <div className={styles.swiperPagination}></div>
    </section>
  );
};

export default Carousel;