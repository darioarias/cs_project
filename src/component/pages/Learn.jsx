import React, { useState } from "react";
import Buttons from "./Buttons";
import ShowDataStructure from "./ShowDataStructure";
import "./grid.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();
const Learn = () => {
  const [dataStructure, setDataStructure] = useState("");
  const [showButtons, setShowButtons] = useState(true);
  return (
    <div>
      {cookies.get("token") && <p>Welcome {cookies.get("username")}</p>}
      {showButtons ? (
        <Buttons
          setDataStructure={setDataStructure}
          showButtons={showButtons}
          setShowButtons={setShowButtons}
        />
      ) : (
        <ShowDataStructure dataStructure={dataStructure} />
      )}
    </div>
  );
};

export default Learn;
