import { useState } from "react";
import stages from "./WorkStagesArr";
import styles from "./WorkStages.module.css";
import StageItem from "./StageItem";

import clsx from "clsx";
import { useMedia } from "use-media";

function WorkStages() {
  const isTablet = useMedia({ maxWidth: "768px" });
  const isMobile = useMedia({ maxWidth: "560px" });
  const [activeStageId, setActiveStageId] = useState(stages[0].id);
  const activeStage = stages.find((stage) => stage.id === activeStageId) ?? stages[0];

  return (
    <section className={styles.workStages} id="stages">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.accordion}>
            <h2 className={clsx(isMobile ? "text_24" : isTablet ? "text_36" : "text_48")}>Этапы работ</h2>

            {stages.map((stage) => (
              <StageItem
                key={stage.id}
                title={stage.title}
                description={stage.description}
                isOpen={activeStageId === stage.id}
                onClick={() => setActiveStageId(stage.id)}
              />
            ))}
          </div>

          <img
            key={activeStage.id}
            className={styles.image}
            src={activeStage.image}
            alt={activeStage.alt}
          />
        </div>
      </div>
    </section>
  );
}

export default WorkStages;
