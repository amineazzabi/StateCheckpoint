import React from 'react'
import './project.css';
import {Card, Button} from 'react-bootstrap';

const project = props => {
    return (  
    <div >
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {props.photo} />
    <Card.Body>
    <Card.Title> {props.projectNumber} </Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card.Text>
    <Button variant="primary"> Guit Hub</Button>
</Card.Body>
</Card>
    </div>
        )



}

export default project;