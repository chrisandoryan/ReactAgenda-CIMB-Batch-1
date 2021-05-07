import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AgendaFormComponent from "../AgendaFormComponent";

function EditAgendaModal(props) {
    // react context => global state management (react redux) => untuk meminimalisasi kirim2an props ke komponen yang bertumpuk

    const handleOnHideClick = () => {
        // ubah props.showModal menjadi false agar modalnya ketutup
        // untuk ubah data milik component parent, kita harus passing function
        props.handleCloseModal();
    }

    return (
        <Modal show={props.showModal} onHide={handleOnHideClick}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Agenda</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AgendaFormComponent handleAddAgenda={props.handleAddAgenda} dataEdit={props.dataEdit} mode="edit" />
            </Modal.Body>

            <Modal.Footer>
                {/* <Button variant="primary">Save changes</Button> */}
            </Modal.Footer>
        </Modal>
    );
}

export {
    EditAgendaModal
}