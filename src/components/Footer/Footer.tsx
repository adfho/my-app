import Navigation from "../ui/Navigation/Navigation";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.wrapper} container`}>
                <div className={`${styles.company} text_12`}>
                    <div className={`global_logo ${styles.logo}`}>
                        LOGO
                    </div>

                    <p>ООО "Название компании"
                        
                    </p>

                    <a href="#">
                        Политика конфиденциальности
                    </a>
                </div>

                <div className={styles.navigation}>
                    <Navigation variant="dark"/>

                    <p className={styles.copyright}>
                        Все права защищены
                    </p>
                </div>

                <div className={styles.contact}>
                    <h2 className="text_24">Остались вопросы?</h2>

                    <div className={styles.socials}>
                        <a href="#" aria-label="VK">
                            VK
                        </a>

                        <a href="#" aria-label="Telegram">
                            TG
                        </a>

                        <a href="mailto:info@example.com" aria-label="Email">
                            @
                        </a>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;