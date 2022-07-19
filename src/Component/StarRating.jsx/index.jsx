import React, { useState } from "react";
import {ReactComponent as Star } from '../../Assets/star.svg'
import {ReactComponent as StarFill } from '../../Assets/star.svg'

const StarRating = ({ numberOfStars }) => {
  const arr = [];
  for (let i = 1; i <= numberOfStars; i++) {
    arr.push(i);
  }
  // console.log(arr)
  const [stars, setStars] = useState(0);
  console.log("stars", stars);

  const handleStar = (star) => {
    setStars(star);
  };

  console.log("updated-stars", stars);
  return (
    <div style={{ display: "flex" }}>
      {arr.map((x) => (
        <div key={x} style={{ margin: "5px" }}>
        
          <div onClick={() => handleStar(x)}>
            {stars<=x-1 ?(
              <Star/>
            ): (
             <StarFill/>
            )}
          </div>
          <div >{x}</div>
        </div>
      ))}
    </div>
  );
};
export default StarRating;
