import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import NasaPhoto from './Components/NasaPhoto';

//const dummyData = {
 // date: "2023-04-14"
 // explanation: "Sharp telescopic views of NGC 3628 show a puffy galactic disk divided by dark dust lanes. Of course, this portrait of the magnificent, edge-on spiral galaxy puts some astronomers in mind of its popular moniker, the Hamburger Galaxy. It also reveals a small galaxy nearby (below), likely a satellite of NGC 3628, and a very faint but extensive tidal tail. The drawn out tail stretches for about 300,000 light-years, even beyond the left edge of the frame. NGC 3628 shares its neighborhood in the local universe with two other large spirals M65 and M66 in a grouping otherwise known as the Leo Triplet. Gravitational interactions with its cosmic neighbors are likely responsible for creating the tidal tail, as well as the extended flare and warp of this spiral's disk. The tantalizing island universe itself is about 100,000 light-years across and 35 million light-years away in the northern springtime constellation Leo."
  //hdurl "https://apod.nasa.gov/apod/image/2304/NGC3628LRGBCDK1000+24March2023Small.jpg"
  //title "Portrait of NGC 3628"
//}

function App() {
  const[data, setData] = useState();

 useEffect(() => { 
     axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res=> {
       setData(res.data);
     })
    .catch(err => console.error(err))
   }, [])

  return (
    <div className="App">
      {data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;

