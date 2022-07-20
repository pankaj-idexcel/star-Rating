import React, { useState, memo } from "react";
import { ReactComponent as Star } from "../../Assets/star.svg";
import { ReactComponent as StarFill } from "../../Assets/star-fill.svg";

const StarRating = ({ numberOfStars }) => {
  const [stars, setStars] = useState(0);

  const arr = [];
  for (let i = 1; i <= numberOfStars; i++) {
    arr.push(i);
  }

  const handleStar = (starNumber) => {
    setStars(prev=> prev=starNumber);
  };

  console.log("stars", stars);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {arr.map((item, index) => (
          <div key={index+1} style={{ margin: "5px" }}>
            <div onClick={() => handleStar(item)}>
              {console.log(stars <= index ? "star": "starFill")}
              {stars <= index ? <Star /> : <StarFill />}
            </div>
            <p style={{ display: "flex", justifyContent: "center" }}>{item}</p>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center" }}>You have given {stars} stars </p>
    </div>
  );
};
export default memo(StarRating);
