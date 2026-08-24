import { Children, useRef, useState, type ReactNode } from "react";

import styles from "./Carousel.module.css";

type CarouselProps = {
  title?: string;
  children: ReactNode;
  slideWidth: number;
  gap: number;
  viewportWidth?: number;
};

const Carousel = ({ title, children, slideWidth, gap, viewportWidth }: CarouselProps) => {
  const slides = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const moveDistance = slideWidth + gap;

  const handlePrevious = () => {
    setCurrentIndex((index) => {
      return !index ? slides.length - 1 : index - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((index) => {
      return index === slides.length - 1 ? 0 : index + 1;
    });
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;

    const distance = touchStartX.current - touchEndX;

    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) {
      touchStartX.current = null;
      return;
    }
    if (distance > 0) {
      handleNext();
    } else {
      handlePrevious();
    }
    touchStartX.current = null;
  };

  return (
    <section className={styles.carousel}>
      <div className={styles.header}>
        {title && <h2 className="text_48">{title}</h2>}

        <div className={styles.controls}>
          <button
            className={styles.control}
            type="button"
            aria-label="Предыдущий слайд"
            onClick={handlePrevious}
            disabled={slides.length <= 1}
          >
            ‹
          </button>

          <button
            className={styles.control}
            type="button"
            aria-label="Следующий слайд"
            onClick={handleNext}
            disabled={slides.length <= 1}
          >
            ›
          </button>
        </div>
      </div>

      <div
        className={styles.viewport}
        style={viewportWidth ? { width: `${viewportWidth}px` } : undefined}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.track}
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${currentIndex * moveDistance}px)`,
          }}
        >
          {slides.map((slide, index) => (
            <div className={styles.slide} style={{ width: `${slideWidth}px` }} key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
