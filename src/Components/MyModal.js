// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import './MyModal.css'
// import Carousel from './Carousel'

// function MyModal() {
//   const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
//   const [fullscreen, setFullscreen] = useState(true);
//   const [show, setShow] = useState(false);

//   function handleShow(breakpoint) {
//     setFullscreen(breakpoint);
//     setShow(true);
//   }

//   return (
//     <>
//       {values.map((v, idx) => (
//         <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
//           Full screen
//           {typeof v === "string" && `below ${v.split("-")[0]}`}
//         </Button>
//       ))}
//       <Modal
//         className="custom-modal"
//         show={show}
//         fullscreen={fullscreen}
//         onHide={() => setShow(false)}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Modal</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Carousel/>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default MyModal;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./MyModal.css";
import Carousel from "./Carousel";

function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch Carousel Modal
      </Button>

      <Modal
        show={show}
        fullscreen={true}
        onHide={handleClose}
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;
