import React, { useState, memo } from "react";
import { ReactComponent as Star } from "../../Assets/star.svg";
import { ReactComponent as StarFill } from "../../Assets/star-fill.svg";
import PropTypes from 'prop-types'

const StarRating = ({ numberOfStars }) => {
  const [stars, setStars] = useState(0);

  const arr = [];
  arr.length = numberOfStars;
  arr.fill()

  const handleStar = (starNumber) => {
    setStars(starNumber)
  }

  return (
    <section style={{ display: "flex", flexDirection: "column", background: "white" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {arr.map((item, index) => (
          <div key={index + 1} style={{ margin: "5px" }}>
            <div onClick={() => handleStar(index + 1)}>
              {stars <= index ? <Star /> : <StarFill />}
            </div>
            <p style={{ display: "flex", justifyContent: "center" }}>{index + 1}</p>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center" }}>You have given {stars} stars </p>
    </section>
  );
};

StarRating.propTypes = {
  numberOfStars: PropTypes.number
}

StarRating.defaultProps = {
  numberOfStars: 0
}
export default memo(StarRating);
