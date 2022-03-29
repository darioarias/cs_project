import { CircleNode } from "./styles";

const Node = (props) => {
  console.log(props.data);
  return (
    <>
      <CircleNode>{props.data}</CircleNode>
    </>
  );
};

const TreeLevel = (props) => {
  return (
    <div
      className="TreeLevel"
      level={props.level}
      style={{
        padding: "20px",
        display: "flex",
        gap: "15px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.data.map((node, Index) => (
        <Node key={Index} data={node}></Node>
      ))}
    </div>
  );
};

export default TreeLevel;
