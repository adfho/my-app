import styles from "./Card.module.css";

type CardProps = {
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
};

const Card = ({ title, description, image, alt = "" }: CardProps) => {
  if (image) {
    return (
      <article className={`${styles.card} ${styles.imageCard}`}>
        <img className={styles.image} src={image} alt={alt} />
      </article>
    );
  }

  return (
    <article className={`${styles.card} ${styles.textCard}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default Card;
