import styles from "./About.module.css";
import Card from "../ui/Card/Card";
import cards from "./Card";
import aboutMain from "../../assets/images/about/about-main.png";

const About = () => {
  return (
    <section className={`${styles.about} text_16`} id="about">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.text} >

            <h1 className="text_48">О нас</h1>
            
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

          <img className={styles.mainImage} src={aboutMain} alt="Современный светлый интерьер" />
        </div>

        <div className={styles.grid}>
          {cards.map(({ id, ...card }) => (
            <Card key={id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
