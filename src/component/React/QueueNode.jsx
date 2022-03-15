import { Node } from "./styles";
const QueueNode = (props) => {
  return (
    <>
      <Node className = "QueueNode" order={props.index} id={props.index}>
        {props.data.value}
      </Node>
    </>
  );
};

export default QueueNode;
