import { useEffect, useState } from "react";
import Carousel from "../ui/Carousel/Carousel";
import PortfolioCard from "./PortfolioCard";
import styles from "./Portfolio.module.css";
import projects from "./PortfolioProjects";

function Portfolio() {
  const [slideWidth, setSlideWidth] = useState(387);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 425px)");

    const updateSlideWidth = () => {
      setSlideWidth(mediaQuery.matches ? 194 : 387);
    };

    // Устанавливаем правильное значение сразу
    updateSlideWidth();

    // Отслеживаем изменение размера экрана
    mediaQuery.addEventListener("change", updateSlideWidth);

    return () => {
      mediaQuery.removeEventListener("change", updateSlideWidth);
    };
  }, []);

  return (
    <section className={styles.portfolio} id="portfolio">
      <Carousel
        title="Портфолио"
        slideWidth={slideWidth}
        gap={20}
        viewportWidth={1320}
      >
        {projects.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </Carousel>
    </section>
  );
}

export default Portfolio;