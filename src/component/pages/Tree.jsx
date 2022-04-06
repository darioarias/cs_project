import react from 'react';
import BinaryTreeComponent from '../visualizer/BinaryTree';
import BinaryTree from '../visualizer/BinaryTree';

const Treepage = (props) => {
 return (
   <div>
     <BinaryTreeComponent navigateTo={props.navigateTo}/>
   </div>
 );
};
 
export default Treepage;
