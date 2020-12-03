import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import AddEditForm from './update'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';

function ModalForm(props) {
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }


  const label = props.buttonLabel

  let button = ''
  let title = ''

  if (label === 'Editar') {
    button = <EditIcon>{label} </EditIcon>
    title = 'Editar Agenda'
  } else {
    button = <AddCircleIcon >{label}</AddCircleIcon>
    title = 'Adicionar'
  }


  return (
    <div>
      <Button color='primary' onClick={toggle}>{button}</Button>
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle} >{title}</ModalHeader>
        <ModalBody>
          <AddEditForm
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
            item={props.item} />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalForm
