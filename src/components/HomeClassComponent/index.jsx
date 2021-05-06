import React from 'react';
import AgendaCardComponent from '../AgendaCardComponent';
import AgendaFormComponent from '../AgendaFormComponent';

// active component
class HomeClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ryan",
            agendas: [
                {
                    agendaName: "Makan Bakso",
                    agendaDesc: "Bukber sama temen-temen SMA",
                    agendaDate: "1 Mei 2021",
                    agendaTime: "18.15"
                },
                {
                    agendaName: "Meeting dengan Vendor IT Security",
                    agendaDesc: "Rencana audit GDPR",
                    agendaDate: "1 Juni 2021",
                    agendaTime: "10.00"
                },
            ]
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

    handleAgendaDelete = (id) => {
        // delete data dari state agendas
        this.setState((state, props) => {
            // kasus mutable immutable
            let currAgendas = [...state.agendas];
            // console.log(currAgendas);

            currAgendas.splice(id, 1);
            // console.log(typeof(currAgendas));

            return {
                agendas: currAgendas
            }
        });
    }

    handleAddAgenda = (agendaObject) => {
        // cara yang kurang efektif
        // let currAgendas = this.state.agendas;
        // currAgendas.push(agendaObject);
        // console.log('Agenda Array after Push', currAgendas);
        // this.setState({
        //     agendas: [...state.agendas, agendaObject]
        // });

        // cara lebih best practice
        this.setState((state, props) => (
            {
                agendas: [...state.agendas, agendaObject]
            }
        ));

        // jika menggunakan { } di anonymous function, jangan lupa kasih return
        // this.setState((state, props) => {
        //     return {
        //         agenda: []
        //     }
        // })
    }

    render() {
        return (
            <div>
                <h1>Add New Agenda</h1>
                <AgendaFormComponent handleAddAgenda={this.handleAddAgenda} />
                <h1>{this.state.name}'s Agenda</h1>
                {
                    this.state.agendas.map((dataAgenda, index) => (
                        // <AgendaCardComponent agendaName={dataAgenda.agendaName} agendaDesc={dataAgenda.agendaDesc} agendaDate={dataAgenda.agendaDate} agendaTime={dataAgenda.agendaTime} handleAgendaDelete={this.handleAgendaDelete} />
                        <AgendaCardComponent key={index} id={index} {...dataAgenda} handleAgendaDelete={this.handleAgendaDelete} />
                    ))
                }
                
            </div>
        )    
    }

}

export default HomeClassComponent;