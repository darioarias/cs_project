import React, { useState } from "react";
import "./editor.css";

const CodeEditor = () => {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");

  return (
    <div className="App">
      <div className="Editor"></div>
      <div className="Terminal"></div>
    </div>
  );
};

export default CodeEditor;
