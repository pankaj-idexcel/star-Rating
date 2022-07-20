import React, {memo} from 'react'
import StarRating from "./Component/StarRating.jsx";

function App() {
  const numberOfStars = 5; // how many number of stars user need

  return (
    <div className="App" style={{display: 'flex', flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <StarRating numberOfStars={numberOfStars}/>
    </div>
  );
}

export default memo(App);
