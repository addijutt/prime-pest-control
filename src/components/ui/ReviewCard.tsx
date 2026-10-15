import React from 'react';

interface ReviewCardProps {
  quote: string;
  author: string;
  className?: string;
}

const QuoteIcon: React.FC = () => (
  <span className="review-card__quote-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.583 17C3.075 17 2 15.925 2 14.417V10.75C2 7.298 4.798 4.5 8.25 4.5H9.5V7H8.25C6.317 7 4.75 8.567 4.75 10.5V11.25H7.333C8.437 11.25 9.333 12.146 9.333 13.25V14.417C9.333 15.925 8.258 17 6.75 17H4.583ZM14.25 17C12.742 17 11.667 15.925 11.667 14.417V10.75C11.667 7.298 14.465 4.5 17.917 4.5H19.167V7H17.917C15.984 7 14.417 8.567 14.417 10.5V11.25H17C18.104 11.25 19 12.146 19 13.25V14.417C19 15.925 17.925 17 16.417 17H14.25Z"
        fill="currentColor"
      />
    </svg>
  </span>
);

const StarRating: React.FC = () => (
  <span className="review-card__stars" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className="review-card__star"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 1.333L9.88 5.147L14 5.76L11 8.787L11.76 13L8 10.88L4.24 13L5 8.787L2 5.76L6.12 5.147L8 1.333Z"
          fill="currentColor"
        />
      </svg>
    ))}
  </span>
);

const ReviewCard: React.FC<ReviewCardProps> = ({ quote, author, className }) => (
  <article className={['review-card', className].filter(Boolean).join(' ')}>
    <QuoteIcon />
    <div className="review-card__quote">
      <p>{quote}</p>
    </div>
    <div className="review-card__meta">
      <StarRating />
      <span className="review-card__divider" aria-hidden="true" />
      <span className="review-card__author">{author}</span>
    </div>
  </article>
);

export default ReviewCard;