import HeapComponent from '../visualizer/Heap';

const Heappage = (props) => {
 return (
   <div>
     <HeapComponent navigateTo={props.navigateTo} />
   </div>
 );
};
 
export default Heappage;