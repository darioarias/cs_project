const node_style = {
  flexShrink: "0",
};

const SinglyLinkedListNode = (props) => {
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
      <svg
        width="40px"
        height="50px"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: "0"}}
      >
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="0"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z"/>
          </marker>
        </defs>

        <line
          x1="0"
          y1="20"
          x2="33"
          y2="20"
          stroke="#000"
          stroke-width="1"
          marker-end="url(#arrow)"
        />
      </svg>
    </>
  );
};

export default SinglyLinkedListNode;
