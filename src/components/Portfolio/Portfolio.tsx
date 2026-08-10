import Carousel from "../ui/Carousel/Carousel";
import PortfolioCard from "./PortfolioCard";
import styles from "./Portfolio.module.css";
import projects from "./PortfolioProjects";

function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <Carousel title="Портфолио" slideWidth={387} gap={20} viewportWidth={1330}>
        {projects.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </Carousel>
    </section>
  );
}

export default Portfolio;