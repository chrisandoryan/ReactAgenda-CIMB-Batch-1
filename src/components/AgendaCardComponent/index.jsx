import React from 'react';
import styled, { css } from 'styled-components';

const AgendaCard = styled.div`
    margin: 2em;
    padding: 1.5em;
    border: 1px solid black;
    border-radius: 5px;
    background: #ccffbd;
`

const AgendaButton = styled.button`
    border-radius: 3px;
    margin: 0.5em 1em 1em 0em;
    padding: 0.5em;
    width: 8em;
    background: transparent;
    color: black;

    ${
        props => {
            if (props.delete) {
                return css`
                    background: red;
                    color: white;
                    font-weight: bold;
                `
            }
            else if (props.edit) {
                return css`
                    background: #91c788;
                `
            }
        }
    }
`

// passive component
class AgendaCardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // simulasi proses tarik data yang berujung gagal
        // throw "Component Gamau Kebikin Coy";
    }

    handleDeleteButtonClick = () => {
        let idToDelete = this.props.id;
        this.props.handleAgendaDelete(idToDelete);
    }

    handleEditButtonClick = () => {
        let idToUpdate = this.props.id;
        this.props.handleAgendaEdit(idToUpdate);
    }

    render() {
        return (
            <AgendaCard>
                <h2>{this.props.agendaName}</h2>
                <p>{this.props.agendaDate} | {this.props.agendaTime}</p>
                <p>{this.props.agendaDesc}</p>
                <AgendaButton edit onClick={this.handleEditButtonClick}>Edit Agenda</AgendaButton>
                <AgendaButton delete onClick={this.handleDeleteButtonClick}>Delete</AgendaButton>
            </AgendaCard>
        );
    }
}

export default AgendaCardComponent;