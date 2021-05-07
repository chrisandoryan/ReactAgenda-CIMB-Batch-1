import React from 'react';
import AgendaCardComponent from '../AgendaCardComponent';
import AgendaFormComponent from '../AgendaFormComponent';
import LoadingComponent from '../LoadingComponent';
import { EditAgendaModal } from '../ModalComponent';

// TIPS and TRICKS
// rapihin file code (autoformatter):
// CTRL + K + CTRL + F


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
            ],
            isLoading: true,
            showEditModal: false,
            agendaToEdit: {}
        }
        // data dalam component: state & props
    }

    // dijalankan ketika component nya akan di-mount/di-render
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Boby",
                isLoading: false
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
            // https://stackoverflow.com/questions/60550885/why-use-the-spread-operator-when-calling-setstate-in-react
            let currAgendas = [...state.agendas];
            // console.log(currAgendas);

            currAgendas.splice(id, 1);
            // console.log(typeof(currAgendas));

            return {
                agendas: currAgendas
            }
        });
    }

    handleAgendaEdit = (id) => {
        this.setState({
            showEditModal: true
        });
        let currAgendas = [...this.state.agendas];
        let agendaToEdit = currAgendas[id];

        // tambahin id pada object agenda yang ingin diedit
        agendaToEdit.id = id;
        console.log(agendaToEdit);

        this.setState({
            agendaToEdit: agendaToEdit
        });
    }

    handleCloseModal = () => {
        this.setState({
            showEditModal: false
        });
    }

    handleAddAgenda = (agendaObject, mode, id=null) => {
        // cara yang kurang efektif
        // let currAgendas = this.state.agendas;
        // currAgendas.push(agendaObject);
        // console.log('Agenda Array after Push', currAgendas);
        // this.setState({
        //     agendas: [...state.agendas, agendaObject]
        // });

        // cara lebih best practice
        if (mode == "add") {
            this.setState((state, props) => (
                {
                    agendas: [...state.agendas, agendaObject]
                }
            ));    
        }
        else if (mode == "edit") {
            let currAgendas = [...this.state.agendas];
            currAgendas[id] = agendaObject;
            this.setState({
                agendas: currAgendas
            });
        }
    
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
                <AgendaFormComponent mode="add" handleAddAgenda={this.handleAddAgenda} />
                <h1>{this.state.name}'s Agenda</h1>
                {
                    this.state.isLoading == true ? (
                        <LoadingComponent />
                    ) : (
                        this.state.agendas.map((dataAgenda, index) => (
                            // <AgendaCardComponent agendaName={dataAgenda.agendaName} agendaDesc={dataAgenda.agendaDesc} agendaDate={dataAgenda.agendaDate} agendaTime={dataAgenda.agendaTime} handleAgendaDelete={this.handleAgendaDelete} />
                            <AgendaCardComponent key={index} id={index} {...dataAgenda} handleAgendaDelete={this.handleAgendaDelete} handleAgendaEdit={this.handleAgendaEdit} />
                        ))
                    )
                }
                <EditAgendaModal handleAddAgenda={this.handleAddAgenda} dataEdit={this.state.agendaToEdit} className="edit-modal" handleCloseModal={this.handleCloseModal} showModal={this.state.showEditModal} />
            </div>
        )
    }

}

export default HomeClassComponent;