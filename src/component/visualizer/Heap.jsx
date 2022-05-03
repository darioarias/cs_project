import {default as Heap} from "../DSA/DataStructures/Heaps/heap.js";
import react from "react";
import TreeLevel from "./HeapNode.jsx";
import HeapNode from "./HeapNode.jsx";
import Box from '@mui/material/Card';
import Learn from '../pages/Learn';

let orderHeaps = [];


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
        this.levelOrder()
        console.log(orderHeaps)
        this.resetHeap();
    }

    resetHeap(){
        let newHeap = new Heap(Infinity, "MIN");
        this.setState({heap:newHeap});
    }

    onChangeValue(data) {
        this.setState({ value: data.target.value });
    }

    insert(){
        console.log(this.state.order)
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

    /**
    * @description instantiate nodes from the stack for the visuals
    * @param {*} heapData : list of nodes
    * @returns array of instantiated node components
    */
    outputting(heapData) {
        let heapNodes = [];
        let output = [];
        heapData.map((node, index) =>
            heapNodes.push(<HeapNode level={this.selectOrder(index)} data={node} index={index}></HeapNode>)
        );
        for (let i = 0; i < heapNodes.length; i++) {
            output.push(heapNodes[i]);
        }
        return output;
    }

    levelOrder = () => {
        orderHeaps.push(0)
        for (let levels = 1; levels < 30; levels++ )
        {
            orderHeaps.push(Math.pow(2,levels) + orderHeaps[levels-1]);
        }
    }

    findLevel = (id) => {
        if (id == orderHeaps[0]){
            
        }
        let previous = 0
        for (let i = 1; i < 30; i++){
            if (id <= orderHeaps[i] && id > previous){
                return  100/(Math.pow(2, i));
            }
            previous = orderHeaps[i];
        }
    }

    selectOrder = (id) => {
        if (id == orderHeaps[0])
            return 50
        let previous = 0
        for (let i = 1; i < 30; i++){
            if (id <= orderHeaps[i] && id > previous){
                return  100/(Math.pow(2, i));
            }
            previous = orderHeaps[i];
        }
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
                <button onClick={()=>this.show()}>Debug</button>
            </div>
            </Box>
            <div>{Nodes()}</div>
        </div>
        )
    }
}

export default HeapComponent;

/*
0 - level 0
1, 2 - level 1
3,4,5,6 - level 2
7,8,9,10,11,12,13,14 - level 3

orders()=>{
    levels = 0
    states = []
    states.push(0)
    for i in range (30):
        states.push(2^n + states[n-1])
}

returnOrder(value)=>{
    if value == states[0]:
        return 50
    previous state
    for i in states:
        if value <= i and value < previous stat:
            return  100/2*(levels + 1)
        previous state = i
}
100/2*(levels + 1)
*/