import React, {memo} from 'react'
import StarRating from "./Component/StarRating.jsx";

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <StarRating numberOfStars={5}/>
    </div>
  );
}

export default memo(App);
