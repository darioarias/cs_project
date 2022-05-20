import React, { useState } from "react";
import Buttons from "./Buttons";
import ShowDataStructure from "./ShowDataStructure";
import "./grid.css";

import { useSelector, useDispatch } from "react-redux";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Learn = () => {
  const [dataStructure, setDataStructure] = useState("");
  const [showButtons, setShowButtons] = useState(true);
  const [username] = useState(useSelector((state) => state.username.value));
  // username = useSelector((state) => state.username.value);
  return (
    <div>
      {/* {useSelector((state) => state.authToken.value) && (
        <p>Welcome {username}</p>
      )} */}
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
