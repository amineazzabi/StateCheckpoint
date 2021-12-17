import React from 'react'
import {Form, Button} from 'react-bootstrap';
import './contact.css';
function contact() {
    return (
        <div>
            <Form className="CONTACT">
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="email" placeholder=" Name & Last Name" />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
    <Button> SEND </Button>
</Form.Group>
</Form>
        </div>
    )
}

export default contact
