import React from 'react';
import AgendaCardComponent from '../AgendaCardComponent';
import AgendaFormComponent from '../AgendaFormComponent';

class HomeClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ryan",
            agenda: {
                agendaName: "Main Basket",
                agendaDesc: "di Lapangan Banteng Subuh",
                agendaDate: "15 Juni 2021",
                agendaTime: "17.45"
            }
        }
        // data dalam component: state & props
    }

    // dijalankan ketika component nya akan di-mount/di-render
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Boby"
            });
        }, 4000);
    }

    shouldComponentUpdate() {
        // if (loadingCriticalDataNotFinished) {
        //     // return false; // component tidak akan diupdate        
        // }
        return true; // component akan di-update/dirender ulang ketika ada perubahan
    }

    // componentDidUpdate() {
    //     alert("Something's changed");
    // }

    // dijalankan ketika component akan di-unmount/dicopot dari layout
    // componentWillUnmount() {
    //     alert("Called from componentWillUnmount");
    // }

    // akan terpanggil ketika child component nya terkena error
    componentDidCatch(error, errorInfo) {
        alert("Something went wrong with children component!");
        console.log(`Error: ${error}`);
        console.log(`Error Info: ${errorInfo}`);
        // remediasi: suruh user logout, atau tarik data ulang
    }

    handleAgendaDelete = () => {
        alert("Deleting agenda...");
        let newAgenda = {
            agendaName: "Kosong",
            agendaDesc: "Kosong",
            agendaDate: "Kosong",
            agendaTime: "Kosong"
        }

        this.setState({
            agenda: newAgenda
        });
    }

    render() {
        return (
            <div>
                <h1>Add New Agenda</h1>
                <AgendaFormComponent />
                <h1>{this.state.name}'s Agenda</h1>
                <AgendaCardComponent agendaName={this.state.agenda.agendaName} agendaDesc={this.state.agenda.agendaDesc} agendaDate={this.state.agenda.agendaDate} agendaTime={this.state.agenda.agendaTime} handleAgendaDelete={this.handleAgendaDelete} />
            </div>
        )    
    }

}

export default HomeClassComponent;