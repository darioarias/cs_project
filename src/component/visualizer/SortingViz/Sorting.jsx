import React, { useState, useEffect } from "react";
import "./Sorting.css";
import { InsertionSort } from "./algorithms/Sorting";

const SortingViz = () => {
  const [arr, setArr] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [arrLength, setArrLength] = useState(100);
  const [algoOption, setAlgoOption] = useState("Insertion");

  useEffect(() => {
    createArray();
  }, []);

  function createArray() {
    setSorting(false);
    const arr = [];
    for (let i = 0; i < arrLength; i++) {
      arr.push(getRandomInt(100));
    }
    setArr(arr);
  }

  const visualize = () => {
    switch (algoOption) {
      case "Insertion":
        insertionSort();
        break;
      // case "Merge":
      //   MergeSort();
      //   break;
    }
  };

  const insertionSort = async (_) => {
    let animationsArr = InsertionSort(arr, arrLength);
    for (let i = 0; i < animationsArr.length; i++) {
      let elements = document.getElementsByClassName("arr-ele");
      let [index1, index2, type] = animationsArr[i];
      let element1 = elements[index1].style;
      let element2 = elements[index2].style;
      animate(element1, element2, type, i);
      animate(element1, element2, "x", i);
    }
  };

  async function animate(e, e2, t, i) {
    if (t == "swap") await swap(e, e2, i);
    else if (t == "compare") await compare(e, e2, i);
    else if (t == "s") await sleep(1000);
    await resetColor(e, e2, i);
  }

  function swap(e, e2, i) {
    return new Promise(() =>
      setTimeout(() => {
        let temp = e.height;
        e.height = e2.height;
        e2.height = temp;
        e.backgroundColor = "red";
        e2.backgroundColor = "red";
      }, i * 1)
    );
  }

  function resetColor(e, e2, i) {
    return new Promise(() =>
      setTimeout(() => {
        e.backgroundColor = "black";
        e2.backgroundColor = "black";
      }, i * 1)
    );
  }

  function compare(e, e2, i) {
    return new Promise(() =>
      setTimeout(() => {
        e.backgroundColor = "blue";
        e2.backgroundColor = "blue";
      }, i * 1)
    );
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="SortingViz">
      <button onClick={visualize}> Run Algorithm </button>
      <div className="arr-container">
        {arr.map((value, index) => (
          <div
            className="arr-ele"
            key={index}
            style={{
              backgroundColor: "black",
              height: `${value}vh`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingViz;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
