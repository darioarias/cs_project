import { CircleNode } from "./styles";
const HeapNode = (props) => {
  let offsetBottom = 0
  //fix the offset and the right portion of the heap some math :)
  console.log (props.level, offsetBottom)
  return (
    <>
      <CircleNode className = "CircleNode" id={props.index} style={{position:"absolute", right  :""+props.level+"%", bottom:""+offsetBottom+"%"}}>
        {props.data}
      </CircleNode>
    </>
  );
};

export default HeapNode;
