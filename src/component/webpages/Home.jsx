import React, { useState } from "react";
import Buttons from "./Buttons"
import ShowDataStructure from "./ShowDataStructure"
 
const Home = () => {
 const [dataStructure, setDataStructure] = useState("");
 const [showButtons, setShowButtons] = useState(true);
 return (
   <div>
     {showButtons ?
     <Buttons setDataStructure={setDataStructure} showButtons={showButtons} setShowButtons={setShowButtons}/>
      :
     <ShowDataStructure dataStructure={dataStructure}/>}
   </div>
 );
};
 
export default Home;

