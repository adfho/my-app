import styles from "./StageItem.module.css";

type StageItemProps = {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
};

const StageItem = ({ title, description, isOpen, onClick }: StageItemProps) => {
  return (
    <div className={styles.item}>
      <button className={`${styles.button} text_24`} type="button" aria-expanded={isOpen} onClick={onClick}>
        {title}
      </button>

      <div className={`${styles.content} ${isOpen ? styles.contentOpen : ""}`}>
        <p className={`${styles.description} text_16`}>{description}</p>
      </div>
    </div>
  );
}

export default StageItem;
