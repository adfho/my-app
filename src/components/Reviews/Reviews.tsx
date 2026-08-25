import Carousel from "../ui/Carousel/Carousel";
import Button from "../ui/Button/Button";

import ReviewCard from "./ReviewCard";
import reviews from "./ReviewsData";

import styles from "./Reviews.module.css";

const Reviews = () => {
    return (
        <section className={styles.reviews} id="reviews">
            <Carousel
                title="Отзывы"
                slideWidth={590}
                gap={15}
                viewportWidth={1320}
            >
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        image={review.image}
                        name={review.name}
                        text={review.text}
                    />
                ))}
            </Carousel>

            <Button>
                Оставить отзыв
            </Button>
        </section>
    );
};

export default Reviews;