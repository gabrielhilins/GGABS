import { useState } from "react";
import {
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { IoIosRocket, IoMdPhonePortrait } from "react-icons/io";
import style from "./Links.module.scss";
import StarsBackground from "../../components/StarsBackground";
import Monograma from '../../assets/img/LogoTipo Fundo Azul e branco.png';

const Links = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const agencyLinks = [
    {
      id: 1,
      title: "Solicitar Orçamento",
      url: "/solicitar-orcamentos",
      icon: <IoIosRocket />,
      color: "#1877F2",
      highlight: true,
    },
    {
      id: 2,
      title: "Site Oficial",
      url: "/",
      icon: <FaGlobe />,
      color: "#0a0a23",
    },
    {
      id: 3,
      title: "LNKD PERFIL",
      url: "https://lnkdperfil.ggabstechdesign.com.br",
      icon: <IoMdPhonePortrait />,
      color: "#0a0a23",
    },
    {
      id: 4,
      title: "Instagram",
      url: "https://instagram.com/ggabstechdesign",
      icon: <FaInstagram />,
      color: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    },
    {
      id: 5,
      title: "TikTok",
      url: "https://tiktok.com/@ggabs.tech.design",
      icon: <FaTiktok />,
      color: "linear-gradient(45deg, #FE2C55, #25F4EE, #000000, #FE2C55)",
    },
    {
      id: 6,
      title: "Facebook",
      url: "https://www.facebook.com/share/1AMxWY2jNe/",
      icon: <FaFacebook />,
      color: "#1877F2",
    },
    {
      id: 7,
      title: "LinkedIn",
      url: "https://linkedin.com/company/ggabs-tech-design",
      icon: <FaLinkedinIn />,
      color: "#0077b5",
    },
    {
      id: 8,
      title: "Threads",
      url: "https://threads.net/ggabstechdesign",
      icon: <FaThreads />,
      color: "linear-gradient(45deg, #000000, #444444)",
    },
  ];

  const renderIcon = (icon) => {
    
    if (typeof icon === 'string') {
      return <img src={icon} alt="Link icon" className={style.linkImage} />;
    }
    return icon;
  };

  return (
    <div className={style.linksContainer}>
      <StarsBackground section="hero" />
      <div className={style.linksContent}>
        <div className={style.linksHeader}>
          <div className={style.profileImage}>
            <img src={Monograma} alt="GGABS Tech & Design Monograma" />
          </div>
          <h1>GGABS TECH & DESIGN</h1>
          <p>Impulsionando sua presença digital com Tech e Design!</p>
        </div>

        <div className={style.linksList}>
          {agencyLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              className={`${style.linkItem} ${link.highlight ? style.highlight : ""}`}
              style={{ "--link-color": link.color }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.title}
            >
              <span className={style.linkIcon}>{renderIcon(link.icon)}</span>
              <span className={style.linkTitle}>{link.title}</span>
              <div
                className={`${style.linkBackground} ${hoveredIndex === index ? style.active : ""}`}
                style={{ background: link.color }}
              ></div>
            </a>
          ))}
        </div>

        <div className={style.linksFooter}>
          <p>© {new Date().getFullYear()} GGABS TECH & DESIGN.</p>
        </div>
      </div>
    </div>
  );
};

export default Links;