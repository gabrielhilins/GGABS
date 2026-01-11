import PropTypes from "prop-types";
import { socialMediaLinks } from "../../data/socials";
import styles from "./SocialLinks.module.scss";

const SocialLinks = ({ containerClass, iconClass, itemClass, showTooltip = true }) => {
  return (
    <div className={`${styles.socialContainer} ${containerClass || ""}`}>
      {socialMediaLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialItem} ${itemClass || ""}`}
            aria-label={`Visit our ${social.label} profile`}
            data-tooltip={showTooltip ? social.tooltip : undefined}
          >
            <IconComponent className={`${styles.icon} ${iconClass || ""}`} />
          </a>
        );
      })}
    </div>
  );
};

SocialLinks.propTypes = {
  containerClass: PropTypes.string,
  iconClass: PropTypes.string,
  itemClass: PropTypes.string,
  showTooltip: PropTypes.bool,
};

export default SocialLinks;
