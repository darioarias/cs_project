const node_style = {
    flexShrink: "0",
  };
  
const StackNode = (props) => {
    return (
        <>
        <div
            id={props.index}
            className="jsavnode jsavlistnode centerBox"
            style={node_style}
        >
            <span className="jsavvalue">
            <span className="jsavvaluelabel">{props.data.value}</span>
            </span>
            <span className="jsavpointerarea"></span>
        </div>
        </>
    );
};
  
  export default StackNode;
  