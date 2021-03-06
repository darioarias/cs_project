import {default as Heap} from "../DSA/DataStructures/Heaps/heap.js";
import react from "react";
import HeapNode from "./HeapNode.jsx";
import Box from '@mui/material/Card';
import Learn from '../pages/Learn';

// let orderHeaps = []; //keeps track of levels for testing
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
        //couldnt think of a better algorithm so i did this for loop
        for (let i = 0; i<31; i++){
            for (let j = i + 1; j < 31; j++){
                if (horizontalPos[i][0] === horizontalPos[j][0] && horizontalPos[i][1] > horizontalPos[j][1]){
                    this.swap(horizontalPos, i, j);
                }
            }
        }

        // console.table(horizontalPos);
        // this.levelOrder();   #used for testing 
        // console.table(orderHeaps); # used for testing
        this.resetHeap();
    }

    resetHeap(){
        let newHeap = new Heap(30, "MIN");
        this.setState({heap:newHeap});
    }

    onChangeValue(data) {
        this.setState({ value: data.target.value });
    }

    insert(){
        this.state.heap.insert(parseInt(this.state.value));
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

    // method used for testing to check levels
    // levelOrder = () => {
    //     orderHeaps.push(1)
    //     for (let levels = 1; levels < 6; levels++ )
    //     {
    //         orderHeaps.push(Math.pow(2,levels) + orderHeaps[levels-1]);
    //     }
    // }

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
            <div>
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    p: 10,
                    m: 10,
                    bgcolor: '#1976D2',
                    borderRadius: 10,
                }}
            >
            <button onClick={() => this.resetHeap()}>Reset Heap</button>
            <div>
                <input value={this.state.value} onChange={this.onChangeValue} />
                <button onClick={()=>this.insert()}>Insert Value</button>
                <button onClick={()=>this.remove()}>Remove Value</button>
            </div>
            </Box>
            <div>{Nodes()}</div>
        </div>
        )
    }
}

export default HeapComponent;