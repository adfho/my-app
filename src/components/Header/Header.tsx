import { useState } from "react";

import Navigation from "../ui/Navigation/Navigation";
import Button from "../ui/Button/Button";

import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.open : ""}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <a href="/" className="global_logo">
            <span>LOGO</span>
          </a>

          <button
            className={styles.burger}
            type="button"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={styles.desktopNavigation}>
            <Navigation />
          </div>

          <a className={styles.phone} href="tel:+79001234567">
            +7 (999) 999-99-99
          </a>

          <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
            <Navigation />

            <a className={styles.mobilePhone} href="tel:+79001234567">
              +7 (999) 999-99-99
            </a>

            <Button className={styles.mobileButton}>Оставить заявку</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
