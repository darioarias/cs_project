import react from 'react'
import QueueComponent from "../visualizer/Queue";

const Queuepage = (props) => {
 return (
   <div>
     <QueueComponent navigateTo={props.navigateTo}/>
   </div>
 );
};
 
export default Queuepage;
