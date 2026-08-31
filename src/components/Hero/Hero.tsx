import styles from "./Hero.module.css";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import clsx from "clsx";
import { useMedia } from "use-media";

const Hero = () => {
  const isTablet = useMedia({ maxWidth: "768px" });
  const isMobile = useMedia({ maxWidth: "616px" });
  return (
    <section className={styles.hero}>
      <div className={styles.heroImg} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={clsx(isMobile ? "text_24" : isTablet ? "text_36" : "text_48")}>
            Интерьер, который станет вашим отражением
          </h1>

          <form className={styles.form}>
            <Input placeholder="email@example.com" />

            <Button>Рассчитать стоимость</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
