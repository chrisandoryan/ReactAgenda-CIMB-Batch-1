import React from 'react';

class AgendaCardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // simulasi proses tarik data yang berujung gagal
        // throw "Component Gamau Kebikin Coy";
    }

    render() {
        return (
            <div>
                <h2>{this.props.agendaName}</h2>
                <p>{this.props.agendaDate} | {this.props.agendaTime}</p>
                <p>{this.props.agendaDesc}</p>
                <button onClick={this.props.handleAgendaDelete}>Delete</button>
            </div>
        );
    }
}

export default AgendaCardComponent;