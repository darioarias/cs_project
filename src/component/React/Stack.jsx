import { default as  Stack} from "../DSA/DataStructures/Stack/stack.js";
import react from "react";
import StackNode from "./StackNode";
class StackComponent extends react.Component{
    constructor(props){
        super(props);

        this.state = {
            value: 0,
            list: null,
        };
        this.onChangeValue = this.onChangeValue.bind(this);
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

    tests(pol) {
        let listNodes = [];
        let output = [];
        pol.map((node, index) =>
          listNodes.push(
            //<SinglyLinkedListNode key={index} data={node}></SinglyLinkedListNode>
            <StackNode key={index} data = {node}></StackNode>
            )
        );
        for (let i = 0; i < listNodes.length; i++) {
          output.push(listNodes[i]);
        }
        return output;
      }

    render(){
        let Nodes = () => {
            if (this.state.list !== null) {
                return <>{this.tests(this.state.list.toArr())}</>;
            }
        };
        return (
        <div>
            <button onClick={() => this.resetList()}> Reset List</button>  
            <div>
                <input value={this.state.value} onChange={this.onChangeValue}/>
                <button onClick={() => this.push()}>Push Value</button>
                <button onClick={() => this.pop()}>Pop Value</button>
                <button onClick={() => this.peek()}>Peek Value</button>
            </div>  
            <div
          className="jsavlist jsavautoresize jsavhorizontallist scroller"
          data-visible="true"
          data-nodegap="40"
          data-autoresize="true"
          style={{
            padding: "10px",
            display: "flex",
            gap: "0px",
            alignItems: "flex-start",
          }}
        >
          <div>Top of Stack</div>
          {Nodes()}
          <div>Buttom of Stack</div>
        </div>
        </div>
        );
    }
}

export default StackComponent;