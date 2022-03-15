import { Node } from "./styles";
const QueueNode = (props) => {
  return (
    <>
      <Node order={props.index} id={props.data.value}>
        {props.data.value}
      </Node>
    </>
  );
};

export default QueueNode;
