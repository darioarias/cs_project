const SinglyLinkedListNode = (props) => {
  console.log(props.data.value);
  if (props.data.value != null) {
    return (
      <div id="1" style={{padding: "40px", display: "inline-block"}}>
        <div dangerouslySetInnerHTML={{ __html: props.data.toString() }}></div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SinglyLinkedListNode;
