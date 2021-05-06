import moment from 'moment';
import React from 'react';
import { Button, Form } from 'react-bootstrap';


class AgendaFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputAgendaTitle: "",
            inputAgendaDesc: "",
            inputAgendaDate: "",
            inputAgendaTime: ""
        }
    }


    // contoh
    handleUserKeyDown = (event) => {
        // console.log("Detected Keydown");
        // console.log(`Key typed: ${event.key}`);
    }

    // bisa dilakukan, tapi kurang efisien
    handleUserKeyUp = (event) => {
        let char = event.key;
        let currAgendaTitle = this.state.inputAgendaTitle;
        currAgendaTitle = currAgendaTitle + char;
        // this.setState({
        //     inputAgendaTitle: currAgendaTitle
        // });
    }

    componentDidUpdate() {
        // cek isi state setiap ada perubahan
        // console.log(this.state);
    }

    componentDidMount() {
        // cara update state yang salah
        // this.state.name = 'Boby'; // X

        // cara update state yang benar
        // this.setState({
        //     name: 'Boby',
        //     address: 'DKI Jakarta',
        //     age: 65
        // });
        
    }

    handleTitleInput = (event) => {
        let title = event.target.value;
        this.setState({
            inputAgendaTitle: title
        });
    }

    handleDescInput = (event) => {
        // target: component dimana event tsb tertrigger
        let desc = event.target.value;
        this.setState({
            inputAgendaDesc: desc
        })
    }

    handleDateInput = (event) => {
        let date = event.target.value;
        this.setState({
            inputAgendaDate: date
        });
    }

    handleTimeInput = (event) => {
        let time = event.target.value;
        this.setState({
            inputAgendaTime: time
        });
    }

    handleFormSubmit = (event) => {
        // mencegah default behaviour dari form (supaya datanya ga disubmit oleh browser dengan http request)
        event.preventDefault();
        
        let agendaName = this.state.inputAgendaTitle;
        let agendaDesc = this.state.inputAgendaDesc;
        let agendaDate = this.state.inputAgendaDate; // 2021-05-06
        agendaDate = moment(agendaDate).format("dddd, D MMMM YYYY");
        let agendaTime = this.state.inputAgendaTime;

        // TODO: add validation

        let agendaObject = {
            agendaName: agendaName,
            agendaDesc: agendaDesc,
            agendaDate: agendaDate,
            agendaTime: agendaTime
        }

        // TODO: panggil handleAddAgenda nya parent component
        this.props.handleAddAgenda(agendaObject);
    }

    render() {
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="agendaTitle">
                    <Form.Label>Agenda Title</Form.Label>
                    <Form.Control type="text" placeholder="What do you want to do?" onKeyDown={this.handleUserKeyDown} onKeyUp={this.handleUserKeyUp}onInput={this.handleTitleInput} ></Form.Control>
                </Form.Group>

                <Form.Group controlId="agendaDesc">
                    <Form.Label>Agenda Description</Form.Label>
                    <Form.Control type="text" placeholder="What do you want to do?" onInput={this.handleDescInput}></Form.Control>
                </Form.Group>

                <Form.Group controlId="agendaDate">
                    <Form.Label>Agenda Date</Form.Label>
                    <Form.Control type="date" onChange={this.handleDateInput}></Form.Control>
                </Form.Group>

                <Form.Group controlId="agendaTime">
                    <Form.Label>Agenda Time</Form.Label>
                    <Form.Control type="time" onChange={this.handleTimeInput}></Form.Control>
                </Form.Group>

                <Form.Group controlId="btnSubmit">
                    <Form.Control type="submit" value="Add Agenda"></Form.Control>
                </Form.Group>

                {/* <Button onMouseEnter={() => {
                    console.log("Enter detected");
                }} variant="success">Add Agenda</Button> */}
            </Form>
        );
    }
}

export default AgendaFormComponent;