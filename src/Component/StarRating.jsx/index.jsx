import React, { useState, memo } from "react";
import { ReactComponent as Star } from "../../Assets/star.svg";
import { ReactComponent as StarFill } from "../../Assets/star-fill.svg";
import PropTypes from 'prop-types'

const StarRating = ({ numberOfStars }) => {
  const [stars, setStars] = useState(0);

  const arr = [];

  for (let i = 1; i <= numberOfStars; i++) {
    arr.push(i);
  }

  const handleStar = (starNumber) => {
      setStars(starNumber)
      // console.log("handleStar render");
    }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {console.log("UI render")}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {arr.map((item, index) => (
          <div key={item} style={{ margin: "5px" }}>
            <div onClick={() => handleStar(item)}> 
            {/*using svgr lib for svg files*/}
              {/* {console.log(stars <= index ? "star": "starFill")} */}
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

StarRating.propTypes = {
  numberOfStars: PropTypes.number
}

StarRating.defaultProps= {
  numberOfStars : 0
}
export default memo(StarRating);

