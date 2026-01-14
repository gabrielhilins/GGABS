import { useEffect, useState } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";
import styles from './StarsBackground.module.scss';

const StarsBackground = ({ section }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1,
          left: Math.random() * 100, 
          top: Math.random() * 100, 
          duration: Math.random() * 20 + 10, 
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  useEffect(() => {
    stars.forEach((star) => {
      gsap.fromTo(
        `#star-${star.id}`,
        { x: -window.innerWidth }, 
        {
          x: window.innerWidth, 
          duration: star.duration,
          repeat: -1,
          ease: "linear",
        }
      );
    });
  }, [stars]);

  
  const containerClass =
    section === "header"
      ? styles["header-stars-container"]
      : styles["hero-stars-container"];

  return (
    <div className={containerClass}>
      {stars.map((star) => (
        <div
          key={star.id}
          id={`star-${star.id}`}
          className={styles.star}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`, 
            top: `${star.top}%`,  
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}
    </div>
  );
};

StarsBackground.propTypes = {
  section: PropTypes.string,
};

export default StarsBackground;