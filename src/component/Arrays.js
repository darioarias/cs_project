import React from "react";
import "./master_style.css";
// var jsav = new JSAV("av");
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// jsav.label("Normal Array");
// var arr1 = jsav.ds.array(arr);
// arr1.highlight(2);
// arr1.css(4, { "background-color": "aqua", color: "rgb(150, 55, 50)" });
// arr1.layout();

class Array extends React.Component {
  render() {
    return (
      <ol className="jsavautoresize jsavcenter jsavarray jsavhorizontalarray">
        <li class="jsavnode jsavindex">
          <span class="jsavvalue">
            <span class="jsavvaluelabel">1</span>
          </span>
        </li>
        <li class="jsavnode jsavindex">
          <span class="jsavvalue">
            <span class="jsavvaluelabel">2</span>
          </span>
        </li>
        <li class="jsavnode jsavindex">
          <span class="jsavvalue">
            <span class="jsavvaluelabel">3</span>
          </span>
        </li>
      </ol>
    );
  }
}

export default Array;
