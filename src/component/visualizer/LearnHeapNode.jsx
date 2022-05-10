import { CircleNode } from "./styles";
const HeapNode = (props) => {
  //fix the offset and the right portion of the heap some math :)
  return (
    <>
      <CircleNode className = "CircleNode" id={props.index} style={{position:"absolute", left  :""+props.offsetX+"%", top:""+(6*props.offsetY)+"%"}}>
        {props.data}
      </CircleNode>
    </>
  );
};

export default HeapNode;