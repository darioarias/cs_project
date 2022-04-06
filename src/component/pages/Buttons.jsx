import Box from '@mui/material/Card';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import llimage from "../../Images/LinkedList.png";
import Qimage from "../../Images/Queue.png";
import Timage from "../../Images/Trees.png";
import Simage from "../../Images/Stacks.png";
import Himage from "../../Images/Heaps.png";
import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

 
const Buttons = ({setDataStructure, setShowButtons}) => {
  const navigate = useNavigate();
  const handleOnClickLinked = useCallback(() => navigate('/linkedlist', {replace: true}), [navigate]);
  const handleOnClickStack = useCallback(() => navigate('/stack', {replace: true}), [navigate]);
  const handleOnClickQueue = useCallback(() => navigate('/queue', {replace: true}), [navigate]);
  const handleOnClickTree = useCallback(() => navigate('/tree', {replace: true}), [navigate]);
  const handleOnClickHeap = useCallback(() => navigate('/Heap', {replace: true}), [navigate]);


 return (
  <div >
   <Box
   sx={{
     display: 'flex',
     flexDirection: 'row',
     flexWrap: 'wrap',
     justifyContent: 'center',
     p: 10,
     m: 10,
     bgcolor: '#1976D2',
     borderRadius: 10,
   }}
    >
     <Card sx={{ maxWidth: 250, marginRight: 8, marginBottom: 20, boxShadow: 4, width: 250, backgroundColor: "#ede0d4"}}>
     <CardActionArea onClick={handleOnClickLinked}>
       <CardMedia
         component="img"
         height="145"
         width = "200"
         image={llimage}
         alt="Linked List"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Linked Lists
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   <Card sx={{ maxWidth: 300, marginRight: 8, marginBottom: 19, boxShadow: 4, width: 250, backgroundColor: "#ede0d4"}}>
     <CardActionArea onClick={handleOnClickStack}>
       <CardMedia
         component="img"
         height="155"
         width = "230"
         image={Simage}
         alt="Linked List"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Stacks
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   <Card sx={{ maxWidth: 300, marginRight: 8, marginBottom: 20, boxShadow: 4, width: 250, backgroundColor: "#ede0d4"}}>
     <CardActionArea onClick={handleOnClickQueue}>
       <CardMedia
         component="img"
         height="155"
         width = "230"
         image={Qimage}
         alt="Linked List"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Queues
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   <Card sx={{ maxWidth: 300, marginRight: 8, marginBottom: 20, boxShadow: 4, width: 250, backgroundColor: "#ede0d4"}}>
     <CardActionArea onClick={handleOnClickTree}>
       <CardMedia
         component="img"
         height="155"
         width = "230"
         image={Timage}
         alt="Linked List"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Binary Trees
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   <Card sx={{ maxWidth: 300, marginRight: 8, marginBottom: 20, boxShadow: 4, width: 250, backgroundColor: "#ede0d4"}}>
     <CardActionArea onClick={handleOnClickHeap}>
       <CardMedia
         component="img"
         height="155"
         width = "230"
         image={Himage}
         alt="Linked List"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Heap
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   </Box>
  </div>
 );
};
 
export default Buttons;
 
