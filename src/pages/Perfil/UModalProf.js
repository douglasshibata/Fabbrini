import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import EditProfissional from './UpdateProfessional'
import EditIcon from '@material-ui/icons/Edit';

function ModalProfessional(props) {
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }


  const label = props.buttonLabel

  let button = ''
  let title = ''

  if (label === 'Editar') {
    button =  <EditIcon>{label}</EditIcon>
    title = 'Editar Perfil Profissional'
  } 


  return (
    <div>
      <Button color='primary' onClick={toggle}>{button}</Button>
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle} >{title}</ModalHeader>
        <ModalBody>
          <EditProfissional
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
            item={props.item} />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalProfessional
