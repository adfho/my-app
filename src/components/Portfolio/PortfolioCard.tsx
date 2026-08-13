import styles from "./PortfolioCard.module.css";

type PortfolioCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

function PortfolioCard({ image, alt, title, description }: PortfolioCardProps) {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={image} alt={alt} />

      <div className={styles.info}>
        <h3 className={`${styles.title} text_24`}>{title}</h3>
        <p className={`${styles.description} text_16`}>{description}</p>
      </div>
    </article>
  );
}

export default PortfolioCard;
