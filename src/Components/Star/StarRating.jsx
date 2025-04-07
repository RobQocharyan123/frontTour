import React from "react";

const StarRating = ({ stars }) => {
  const totalStars = 5;
  console.log(stars, "hhhhhhhhhhhhhhh");

  const renderStars = () => {
    const starElements = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= stars) {
        starElements.push(
          <span key={i} style={{ color: "gold" }}>
            ★
          </span>,
        );
      } else if (i - stars <= 0.5) {
        starElements.push(
          <span key={i} style={{ color: "gold" }}>
            ☆
          </span>,
        );
      } else {
        starElements.push(
          <span key={i} style={{ color: "gray" }}>
            ★
          </span>,
        );
      }
    }
    return starElements;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
