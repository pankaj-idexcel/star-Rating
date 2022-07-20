import React, {memo, useState} from 'react'
import StarRating from "./Component/StarRating.jsx";

function App() {
  let numberOfStars = 5

  return (
    <div className="App" style={{display: 'flex', flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <StarRating numberOfStars={numberOfStars}/>
    </div>
  );
}

export default memo(App);
