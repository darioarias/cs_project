import react from 'react';
import SinglyLinkedListComponent from '../visualizer/SinglyLinkedList';

const LinkedListpage = (props) => {
 return (
   <div>
     <SinglyLinkedListComponent navigateTo={props.navigateTo}/>
   </div>
 );
};
 
export default LinkedListpage;
