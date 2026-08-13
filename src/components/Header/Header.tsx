import Navigation from "../ui/Navigation/Navigation";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <a href="/" className="global_logo">
            <span>LOGO</span>
          </a>

          <Navigation />

          <a className={styles.phone} href="tel:+79001234567">
            +7 (999) 999-99-99
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
