import styles from "./PortfolioCard.module.css";
import clsx from "clsx";
import { useMedia } from "use-media";

type PortfolioCardProps = {
  image: string;
  mobileImage?: string;
  alt: string;
  title: string;
  description: string;
};

function PortfolioCard({ image, mobileImage, alt, title, description }: PortfolioCardProps) {
  const isMobile = useMedia({ maxWidth: "425px" });
  return (
    <article className={styles.card}>
      <picture>
        <source media="max-width: 768px" srcSet={mobileImage} />
        <img className={styles.image} src={image} alt={alt} />
      </picture>

      <div className={styles.info}>
        <h3 className={clsx(styles.title, isMobile ? "text_16" : "text_24")}>{title}</h3>
        <p className={clsx(styles.description,isMobile ?"text_12" : "text_16")}>{description}</p>
      </div>
    </article>
  );
}

export default PortfolioCard;
