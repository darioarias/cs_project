import {default as Heap} from "../DSA/DataStructures/Heaps/heap.js";
import react from "react";
import TreeLevel from "./HeapNode.jsx";
import HeapNode from "./HeapNode.jsx";

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
        this.resetHeap();
    }

    resetHeap(){
        let newHeap = new Heap();
        this.setState({heap:newHeap});
    }

    onChangeValue(data) {
        this.setState({ value: data.target.value });
    }

    insert(){
        this.state.heap.insert(this.state.value);
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
    * @param {*} pol : list of nodes
    * @returns array of instantiated node components
    */
    outputting(heapData) {
        let heapNodes = [];
        let output = [];
        heapData.map((node, index) =>
            heapNodes.push(<HeapNode key={index} data={node} index={index}></HeapNode>)
        );
        for (let i = 0; i < heapNodes.length; i++) {
            output.push(heapNodes[i]);
        }
        return output;
    }

    render(){
        let Nodes = () => {
            if (this.state.heap != null){
                return <>{this.outputting(this.state.heap.values)}</>
            }
        };
        return (      
        <div>
            <button onClick={() => this.resetHeap()}>Reset Heap</button>
            <div>
                <input value={this.state.value} onChange={this.onChangeValue} />
                <button onClick={()=>this.insert()}>Insert Value</button>
                <button onClick={()=>this.remove()}>Remove Value</button>
                <button onClick={()=>this.show()}>Debug</button>
            </div>
            <div>{Nodes()}</div>
        </div>
        )
    }
}

export default HeapComponent;