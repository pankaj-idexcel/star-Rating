import React, { useState, Fragment } from "react";
import {ReactComponent as Star } from '../../Assets/star.svg'
import {ReactComponent as StarFill } from '../../Assets/star-fill.svg'

const StarRating = ({ numberOfStars }) => {
  
  const [stars, setStars] = useState(0);

  const arr = [];
  for (let i = 1; i <= numberOfStars; i++) {
    arr.push(i);
  }

 
  console.log("stars", stars);

  const handleStar = (star) => {
    setStars(star);
  };

  console.log("updated-stars", stars);
  return (
    <div style={{display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", background: "grey", justifyContent: "center"}}>
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
    <div>You have given {stars} stars </div>
    </div>
  );
};
export default StarRating;
