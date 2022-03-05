const node_style = {
  flexShrink: '0'
};

const SinglyLinkedListNode = (props) => {
  return (
    <div
      className="jsavnode jsavlistnode centerBox" style = {node_style}
    >
      <span className="jsavvalue">
        <span className="jsavvaluelabel">{props.data.value}</span>
      </span>
      <span className="jsavpointerarea"></span>
    </div>
  );
};

export default SinglyLinkedListNode;
