import React from 'react';


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

    render() {
        return (
            <div>
                <h2>{this.props.agendaName}</h2>
                <p>{this.props.agendaDate} | {this.props.agendaTime}</p>
                <p>{this.props.agendaDesc}</p>
                <button onClick={this.handleDeleteButtonClick}>Delete</button>
            </div>
        );
    }
}

export default AgendaCardComponent;