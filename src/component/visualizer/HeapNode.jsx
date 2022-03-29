import { CircleNode } from "./styles";
const HeapNode = (props) => {
  return (
    <>
      <CircleNode className = "CircleNode" order={props.index} id={props.index}>
        {props.data}
      </CircleNode>
    </>
  );
};

export default HeapNode;
