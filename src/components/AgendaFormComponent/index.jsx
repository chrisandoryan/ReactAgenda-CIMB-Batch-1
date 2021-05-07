import moment from 'moment';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './style.module.css';

class AgendaFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputAgendaTitle: this.props.mode == "edit" ? this.props.dataEdit.agendaName || "" : "",
            inputAgendaDesc: this.props.mode == "edit" ? this.props.dataEdit.agendaDesc || "" : "",
            inputAgendaDate: this.props.mode == "edit" ? this.props.dataEdit.agendaDate || "" : "",
            inputAgendaTime: this.props.mode == "edit" ? this.props.dataEdit.agendaTime || "" : "",
            btnLabel: this.props.mode == "edit" ? "Edit Agenda" : "Add Agenda",
            oldAgendaData: this.props.mode == "edit" ? this.props.dataEdit : {}
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
        let idToEdit = -1;
        if (this.props.mode == "edit") {
            idToEdit = this.props.dataEdit.id;            
        }   
        this.props.handleAddAgenda(agendaObject, this.props.mode, idToEdit);
    }

    render() {
        // var agendaName = this.state.oldAgendaData.agendaName || "";
        // var agendaDesc = this.state.oldAgendaData.agendaDesc || "";

        // // TODO: sesuaikan format date time dengan moment.js
        // var agendaDate = this.state.oldAgendaData.agendaDate || "";
        // var agendaTime = this.state.oldAgendaData.agendaTime || "";

        return (
            <div className={styles['form-container']}>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group controlId="agendaTitle">
                        <Form.Label className={styles.formlabel}>Agenda Title</Form.Label>
                        <Form.Control type="text" placeholder="What do you want to do?" onKeyDown={this.handleUserKeyDown} onKeyUp={this.handleUserKeyUp} onInput={this.handleTitleInput} value={this.state.inputAgendaTitle}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="agendaDesc">
                        <Form.Label className={styles.formlabel}>Agenda Description</Form.Label>
                        <Form.Control type="text" placeholder="What do you want to do?" onInput={this.handleDescInput} value={this.state.inputAgendaDesc}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="agendaDate">
                        <Form.Label className={styles.formlabel}>Agenda Date</Form.Label>
                        <Form.Control type="date" onChange={this.handleDateInput} value={this.state.inputAgendaDate}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="agendaTime">
                        <Form.Label className={styles.formlabel}>Agenda Time</Form.Label>
                        <Form.Control type="time" onChange={this.handleTimeInput} value={this.state.inputAgendaTime}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="btnSubmit">
                        <Form.Control type="submit" value={this.state.btnLabel}></Form.Control>
                    </Form.Group>

                    {/* <Button onMouseEnter={() => {
                    console.log("Enter detected");
                }} variant="success">Add Agenda</Button> */}
                </Form>
            </div>
        );
    }
}

export default AgendaFormComponent;