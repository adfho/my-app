import styles from "./About.module.css";
import Card from "../ui/Card/Card";
import cards from "./Card";

const About = () => {
  return (
    <section className={`${styles.about} text_16`} id="about">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.text}>
            <h1 className={styles.h1}>О нас</h1>

            <p className={styles.mainText}>
              Студия дизайна интерьера S2 основана в 2018 году. За 6 лет активной работы мы собрали
              команду опытных специалистов, которые помогут вам в разработке и реализации дизайна
              мечты. Нам важно создать стильное и эргономичное пространство, которое станет вашим
              продолжением. Где вы будете чувствовать себя на 100% комфортно, независимо от того,
              жилое это пространство или рабочее.
            </p>

            <p className={styles.mainText}>
              Мы берем на себя весь объем работы: от концепции до реализации, поэтому можете не
              сомневаться, что реальность в точности повторит ожидания.
            </p>
          </div>

          <div className={styles.mainImage} />
        </div>

        <div className={styles.grid}>
          {cards.map(({ id, ...card }) => (
            <div
              key={id}
              className={id === "top-image" || id === "bottom-image" ? styles.imageCard : undefined}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
