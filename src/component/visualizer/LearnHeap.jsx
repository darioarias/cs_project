import {default as Heap} from "../DSA/DataStructures/Heaps/heap.js";
import react from "react";
import HeapNode from "./LearnHeapNode";

let horizontalPos = []; //Base cases for the offset

class HeapComponent extends react.Component{
    constructor(props){
        super(props);

        this.state = {
            value: 0,
            heap: null,
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    componentDidMount(){
        this.horizontalPosCalc();
        this.quickSort(horizontalPos, 0, 30);
        for (let i = 0; i<31; i++){
            for (let j = i + 1; j < 31; j++){
                if (horizontalPos[i][0] === horizontalPos[j][0] && horizontalPos[i][1] > horizontalPos[j][1]){
                    this.swap(horizontalPos, i, j);
                }
            }
        }
        this.resetHeap();
    }

    resetHeap(){
        let newHeap = new Heap(30, "MIN");
        this.setState({heap:newHeap});
    }

    onChangeValue(data) {
        this.setState({ value: data.target.value });
    }

    insert(pushedValue = -1){
        let capacity = 31 - this.getLength(); // the limit to the heap is 31 for the learn
    // If user push in learning, exceeds out max size of 31 then alert user
        if (capacity - 1 < 0){
            alert("For our example, the max size is 31 nodes");
            pushedValue = -1; 
            return 
        }
        this.state.heap.insert(pushedValue);
        pushedValue = -1;
        this.forceUpdate();
    }

    remove(){
        this.state.heap.remove();
        this.forceUpdate();
    }

    show(){
        this.state.heap.show();
        this.forceUpdate();
    }

    getLength(){
        return(this.state.heap.getLength());
    }

    /**
    * @description instantiate nodes from the stack for the visuals
    * @param {*} heapData : list of nodes
    * @returns array of instantiated node components
    */
    outputting(heapData) {
        let heapNodes = [];
        let output = [];
        // console.table(horizontalPos)
        // console.log(this.getLength())
        heapData.map((node, index) =>
            heapNodes.push(<HeapNode offsetX={horizontalPos[index][1]} offsetY={horizontalPos[index][0]} data={node} index={index}></HeapNode>)
        );
        for (let i = 0; i < heapNodes.length + 1; i++) {
            output.push(heapNodes[i]);
        }
        return output;
    }

    //Used to calculate the offsets, I decided to limit the level of nodes to 6, because the tree will get huge to fit in the screen
    horizontalPosCalc = (level = 0, offset = 50) => {
        if (level == 5){
            return
        }
        else{
            horizontalPos.push([level, offset]);
        }
        this.horizontalPosCalc(level+1, 50+offset/2);
        this.horizontalPosCalc(level+1, 50-offset/2);
    }

    //sort the horizontal offsets using quicksort to avoid n^2 sorting 
    quickSort(arr, left, right) {
        if (left < right) {
            let partitionIndex = this.partition(arr, left, right);
            this.quickSort(arr, left, partitionIndex - 1);
            this.quickSort(arr, partitionIndex + 1, right);
        }
    }

    // partition method for quick sort to move all elements in the tree to be sorted
    partition(arr, left, right) { 
        let pivot = arr[right];         // pivot
        let i = (left - 1);

        for (let j = left; j <= right - 1; j++) {
            if (arr[j][0] < pivot[0]) {
                i++;
                this.swap(arr, i, j);
            }
        }
        this.swap(arr, i + 1, right);
        return (i + 1);
    }

    //method to swap in the quicksort
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    render(){
        let Nodes = () => {
            if (this.state.heap != null){
                return <>{this.outputting(this.state.heap.values)}</>
            }
        };
        return (      
            <div>{Nodes()}</div>
        )
    }
}

export default HeapComponent;