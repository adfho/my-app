import styles from "./ReviewCard.module.css";

type ReviewCardProps = {
  image: string;
  name: string;
  text: string;
};

const ReviewCard = ({ image, name, text }: ReviewCardProps) => {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={image}
        alt=""
      />

      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default ReviewCard;