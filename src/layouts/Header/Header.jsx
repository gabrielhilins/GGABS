import Logo from '../../assets/img/Logo-TS-Branco.png';
import StarsBackground from '../../components/StarsBackground';
import styles from './Header.module.scss';  

function Header() {
    return (
        <div className={styles['header-container']}> 
        <StarsBackground />
            <div className={styles.logo}>  
                <img src={Logo} alt='logo header' width="220px" height="78px"/>
            </div>
            <div className={styles.links}> 
                    <a href="#home" className={styles.link}>Home</a>
                    <a href="#about" className={styles.link}>Quem Sou</a>
                    <a href="#services" className={styles.link}>Serviços</a>
                    <a href="#contact" className={styles.link}>Portifólio</a>
                    <a href="#contact" className={styles.link}>FAQ</a>
                    <a href="#contact" className={styles.link}>Depoimentos</a>
            </div>
        </div>
    );
}

export default Header;
