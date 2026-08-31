import styles from "./StageItem.module.css";

import clsx from "clsx";
import { useMedia } from "use-media";

type StageItemProps = {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
};

const StageItem = ({ title, description, isOpen, onClick }: StageItemProps) => {
    const isMobile = useMedia({ maxWidth: "560px" });
  return (
    <div className={styles.item}>
      <button className={clsx(styles.button, isMobile ? "text_16" : "text_24")} type="button" aria-expanded={isOpen} onClick={onClick}>
        {title}
      </button>

      <div className={`${styles.content} ${isOpen ? styles.contentOpen : ""}`}>
        <p className={clsx(styles.description,isMobile ? "text_12" : "text_16")}>{description}</p>
      </div>
    </div>
  );
}

export default StageItem;
