import {default as Heap} from "../DSA/DataStructures/Heaps/heap.js";
import react from "react";
import TreeLevel from "./HeapNode.jsx";
import HeapNode from "./HeapNode.jsx";
import Box from '@mui/material/Card';
import Learn from '../pages/Learn';

class HeapComponent extends react.Component{
    constructor(props){
        super(props);

        this.state = {
            value: 0,
            heap: null,
        };
        this.onChangeValue = this.onChangeValue.bind(this);
        this.goBackHandler = this.goBackHandler.bind(this);
    }

    componentDidMount(){
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
    goBackHandler() {
        this.props.setGoBack(true)
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
                {
                !this.props.goBack ?
                (<>
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
            <button onClick={this.goBackHandler}>Return</button>
            </>
          ) : <Learn/>}
        </div>
        )
    }
}

export default HeapComponent;