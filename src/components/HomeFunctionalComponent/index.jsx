import { useState, useEffect } from "react";
import AgendaCardComponent from "../AgendaCardComponent";
import AgendaFormComponent from "../AgendaFormComponent";

// how to update state
// class component
// this.setState({
//     name: "New Name"
// })

// functional component
// setName("New Name");

function ErrorPage(props) {
    return (
        <h1>404 Not Found</h1>
    );
}

function HomeFunctionalComponent(props) {
    const [name, setName] = useState("Ryan");
    const [address, setAddress] = useState("Jalan Panjang");
    const [agendas, setAgendas] = useState([
        {
            agendaName: "Berkebun",
            agendaDesc: "Mengairi sawah",
            agendaDate: "11 Mei 2021",
            agendaTime: "18.30"
        },
        {
            agendaName: "Memancing",
            agendaDesc: "Di laut biru",
            agendaDate: "12 Mei 2021",
            agendaTime: "12.00"
        }
    ]);

    // akan ter-trigger ketika ada perubahan apapun pada component
    useEffect(() => {
        setTimeout(() => {
            setName("Boba");
            // setAddress("Jalan Pendek");
        }, 4000);
    });

    // hanya akan ter-trigger ketika address berubah
    useEffect(() => {
        if (agendas.length <= 0) {  
            alert("Selamat! Agenda sudah selesai. Good job!");
        }
    }, [agendas]);

    const handleAgendaDelete = (id) => {
        let currAgendas = [...agendas];
        currAgendas.splice(id, 1);
        setAgendas(currAgendas);
    }


    // penyimpanan data dikontrol disini
    const handleAddAgenda = (agendaObject) => {
        setAgendas([...agendas, agendaObject]);
    }

    return (
        <div>
            <h1>Add New Agenda</h1>
            <AgendaFormComponent handleAddAgenda={handleAddAgenda}/>
            <h1>{name}'s Agenda</h1>
            {
                agendas.map((dataAgenda, index) => (
                    <AgendaCardComponent key={index} id={index} {...dataAgenda} handleAgendaDelete={handleAgendaDelete} />
                ))
            }
        </div>
    );
}

export {
    ErrorPage,
};
export default HomeFunctionalComponent;