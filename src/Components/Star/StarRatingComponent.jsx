import React, { useState, useEffect, useMemo } from "react";
import StarRating from "./StarRating";
import "./StarRatingComponent.css";

const StarRatingComponent = ({ item, arr }) => {
  const [userStar, setUserStar] = useState(item.rating);
  const [score, setScore] = useState(null);

  const validStars = useMemo(() => {
    return arr
      .filter((i) => !isNaN(parseFloat(i.rating)))
      .map((i) => parseFloat(i.rating));
  }, [arr]);

  const minStars = Math.min(...validStars);
  const maxStars = Math.max(...validStars);

  const normalizeStars = (stars, minStars, maxStars) => {
    const parsedStars = parseFloat(stars);
    if (minStars === maxStars) {
      setScore(1);
    } else {
      setScore(1 + ((parsedStars - minStars) / (maxStars - minStars)) * 4);
    }
  };

  useEffect(() => {
    setUserStar(item);
  }, [item]);

  useEffect(() => {
    if (userStar && !isNaN(userStar)) {
      normalizeStars(userStar, minStars, maxStars);
    }
  }, [userStar, minStars, maxStars]);

  return (
    <div className="star">
      <ul>
        <li>
          <StarRating stars={userStar} />
        </li>
      </ul>
    </div>
  );
};

export default StarRatingComponent;
