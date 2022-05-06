import React, { useState } from "react";
import Axios from 'axios';

import "./editor.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [theme, setTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(20);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");


  return (
    <div className="App">
      <div className="Editor">
          <textarea
          className="Edit"
          placeholder={' '}
          onChange={(e)=> setCode(e.target.value)}>
    
          </textarea>
      </div>
      <div className="Terminal"></div>
    </div>
  );
};

export default CodeEditor;
