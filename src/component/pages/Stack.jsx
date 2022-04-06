import react from 'react'
import StackComponent from '../visualizer/Stack';
import Stack from '../visualizer/Stack';

const Stackpage = (props) => {
 return (
   <div>
     <StackComponent navigateTo={props.navigateTo}/>
   </div>
 );
};
 
export default Stackpage;
