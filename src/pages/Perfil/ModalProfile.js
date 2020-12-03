import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import EditProfile from './EditProfile'
import EditIcon from '@material-ui/icons/Edit';

function ModalProfile(props) {
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }


  const label = props.buttonLabel

  let button = ''
  let title = ''

  if (label === 'Editar') {
    button = <EditIcon>{label}</EditIcon>
    title = 'Editar Perfil Paciente'
  }


  return (
    <div>
      <Button color='primary' onClick={toggle}>{button}</Button>
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle} >{title}</ModalHeader>
        <ModalBody>
          <EditProfile
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
            item={props.item} />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalProfile
