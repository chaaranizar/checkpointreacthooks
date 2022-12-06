import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const Addmovie = ({add}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState ("");
  const [rate, setRate] = useState("");
  const [description, setDescritpion] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
const handleTitle = (e) => {
    setTitle(e.target.value)
}
const handleRate = (e) => {
    setRate(e.target.value)
}
const handleDescription = (e) => {
    setDescritpion(e.target.value)
}
const handlePosterUrl= (e) => {
    setPosterUrl(e.target.value)
}
const handleAdd = () => {
    let newMovie = {title, rate, description, posterUrl}
    add(newMovie)
}
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h2>Title</h2>
            <Form.Control type="text" placeholder="Movie's title" onChange={(e) => handleTitle(e)}/>
            <h2>Rate</h2>
            <Form.Control type="number" placeholder="rate" onChange={(e) => handleRate(e)} />
            <h2>Description</h2>
            <Form.Control type="text" placeholder="description" onChange={(e) => handleDescription(e)}/>
            <h2>PosterUrl</h2>
            <Form.Control type="url" placeholder="posterUrl" onChange={(e) => handlePosterUrl(e)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addmovie