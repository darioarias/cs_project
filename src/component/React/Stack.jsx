import { default as  Stack} from "../DSA/DataStructures/Stack/stack.js";
import react from "react";
import SinglyLinkedListComponent from "./SinglyLinkedList.jsx";

class StackComponent extends react.Component{
    constructor(props){
        super(props);

        this.state = {
            value: 0,
            list: null,
        };
    }

    componentDidMount(){
        this.resetList();
    }

    resetList(){
        let newList = new Stack();
        this.setState({list: newList});
    }

    onChangeValue(data){
        this.setState({value: data.target.value});
    }

    push(){
        this.state.list.push(this.state.value);
        this.forceUpdate();
    }

    pop(){
        this.state.list.pop();
        this.forceUpdate();
    }

    peek(){
        this.state.list.peek();
        this.forceUpdate();
    }

    render(){
        console.log(this.state.list.toArr());
        return (
        <div>
            <button> Reset List</button>  
            <div>
                <input value={this.state.value} onChange={this.onChangeValue}/>
                <button onClick={() => this.push()}>Push Value</button>
                <button onClick={() => this.pop()}>Pop Value</button>
                <button onClick={() => this.peek()}>Peek Value</button>
            </div>  
        </div>
        );
    }
}

export default StackComponent;