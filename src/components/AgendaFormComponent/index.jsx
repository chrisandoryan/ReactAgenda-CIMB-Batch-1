import React from 'react';
import { Button, Form } from 'react-bootstrap';


class AgendaFormComponent extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="agendaTitle">
                    <Form.Label>Agenda Title</Form.Label>
                    <Form.Control type="text" placeholder="What do you want to do?"></Form.Control>
                </Form.Group>

                <Form.Group controlId="agendaDesc">
                    <Form.Label>Agenda Description</Form.Label>
                    <Form.Control type="text" placeholder="What do you want to do?"></Form.Control>
                </Form.Group>

                <Button variant="success">Add Agenda</Button>
            </Form>
        );
    }
}

export default AgendaFormComponent;