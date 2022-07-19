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
    <div style={{display: "flex", flexDirection: "column"}}>
    <div style={{ display: "flex", justifyContent: "center"}}>
      {arr.map((x) => (
        <div key={x} style={{ margin: "5px" }}>
          <div onClick={(e) => handleStar(x)}>
            {stars<=x-1 ?(
              <Star/>
            ): (
             <StarFill/>
            )}
          </div>
          <p style={{display:"flex", justifyContent: "center"}} >{x}</p>
        </div>
      ))}
    </div>
    <p style={{textAlign:"center"}}>You have given {stars} stars </p>
    </div>
  );
};
export default StarRating;
