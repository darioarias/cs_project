import { CircleNode } from "./styles";
const HeapNode = (props) => {
  return (
    <>
      <CircleNode className = "CircleNode" id={props.index} style={{right  :""+props.level+"%"}}>
        {props.data}
      </CircleNode>
    </>
  );
};

export default HeapNode;
