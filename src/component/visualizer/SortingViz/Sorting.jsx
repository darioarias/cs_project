import React, { useState, useEffect } from "react";
import "./Sorting.css";
import { InsertionSort } from "./algorithms/Sorting";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Box,
  Slider,
} from "@mui/material";

const animationSpeeds = [
  {
    value: 1,
    label: "fastest",
  },
  {
    value: 10,
    label: "fast",
  },
  {
    value: 100,
    label: "slow",
  },
];

const SortingViz = () => {
  const [arr, setArr] = useState([]);
  const [speed, setSpeed] = useState(33);
  const [sorting, setSorting] = useState(0);
  const [arrLength, setArrLength] = useState(100);
  const [algoOption, setAlgoOption] = useState("Insertion");

  useEffect(() => {
    createArray();
  }, []);

  const handleAlgoSelect = (e) => {
    setAlgoOption(e.target.value);
  };

  function createArray() {
    setSorting(false);
    const arr = [];
    for (let i = 0; i < arrLength; i++) {
      arr.push(getRandomInt(75));
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

  const changeSpeed = (e, v) => {
    setSpeed(v);
    console.log(arr)
  };

  const insertionSort = async (_) => {
    let [animationsArr, arrtemp] = InsertionSort(arr, arrLength);
    for (let i = 0; i < animationsArr.length; i++) {
      let elements = document.getElementsByClassName("arr-ele");
      let [index1, index2, type] = animationsArr[i];
      let element1 = elements[index1].style;
      let element2 = elements[index2].style;
      animate(element1, element2, type, i);
      animate(element1, element2, "x", i);
      if (i == animationsArr.length - 1)
        setTimeout(() => {
          setArr(arrtemp);
        }, i * speed + speed);
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
      }, i * speed)
    );
  }

  function resetColor(e, e2, i) {
    return new Promise(() =>
      setTimeout(() => {
        e.backgroundColor = "black";
        e2.backgroundColor = "black";
      }, i * speed + speed)
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
      <div className="controls">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="select-label">Algorithms</InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            value={algoOption}
            label="Algorithms"
            onChange={handleAlgoSelect}
          >
            <MenuItem value={"Insertion"}>Insertion</MenuItem>
          </Select>
        </FormControl>
        <Button color="primary" variant="outlined" onClick={visualize}>
          Sort
        </Button>
        <Button color="primary" variant="outlined" onClick={createArray}>
          Random Array
        </Button>
        <Box sx={{ width: 200, padding: 1 }}>
          <Slider
            defaultValue={speed}
            onChange={changeSpeed}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>

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
