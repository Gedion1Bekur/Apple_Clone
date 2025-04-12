import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Offcanvas from "react-bootstrap/Offcanvas";

function Offcanva() {
const [show,setShow]=useState(false);
const handleClose=()=>{
   setShow(false)}
const handleShow=()=>{
    setShow(true)
}
  return (
    <>

      <Button onClick={handleShow}>Magic</Button>
      <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header bg-primary closeButton>
              
              <Offcanvas.Title>IPhone</Offcanvas.Title>
               </Offcanvas.Header>
              <Offcanvas.Body>
               
                IPhone Canvas data from Gedion the magic is happeing Now jsut be your slef as thses is the world fatastaic data . Mind blowing IPhone 18 is mine , finaly i i have the item i needed for my self usinf item json if God is with why in earth i have to scare anybody , Jesus is Lord , I fianlyy become what if he wan tme be to be , thanks to Him I alo you lord  ipsum dolor sit, amet consectetur adipisicing elit. Ullam libero, ex esse voluptatem excepturi quo unde cupiditate dolores eos fugiat ea ipsam. Labore nulla ut est itaque adipisci aliquam quas?

              </Offcanvas.Body>
        
        </Offcanvas>
    </>
  );

  }


export default Offcanva;
