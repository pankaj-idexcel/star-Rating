import React, {memo} from 'react'
import StarRating from "./Component/StarRating.jsx";

function App() {
  const numberOfStars = 5; // how many number of stars user need

  return (
    <section className="App" style={{display: 'flex', flexDirection:"row", justifyContent:"center", alignItems:"center", width: "100vw", height:"100vh", background:"rgb(227, 226, 222)" }}>
      <StarRating numberOfStars={numberOfStars}/>
    </section>
  );
}

export default memo(App);
