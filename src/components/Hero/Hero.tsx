import styles from "./Hero.module.css";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";


const Hero = () => {
  return (
    <section className={`${styles.hero} ${styles.heroImg}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className="text_48">Интерьер, который станет вашим отражением</h1>

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
