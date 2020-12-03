import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import api from "../../services/api";

function AddEditForm(props) {
  const [form, setValues] = useState({
    id: 0,
    cpfUser: '',
    nome: '',
    email: '',
    telefone: '',
    password: '',
    ativo: '',
  })

  const onChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const submitFormAdd = async e => {
    e.preventDefault()
    try {
      const response = await api.post('/user', {
        cpfUser: form.cpfUser,
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
        password: form.password,
      })
      if (response) setTimeout(function () { alert('Cadastrado Com sucesso'); window.location.reload() }, 1000)
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  const submitFormEdit = async e => {
    e.preventDefault()
    try {
      const response = await api.put(`/user`, {
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
        password: form.password,
        ativo: form.ativo
      }, { headers: { cpfUser: form.cpfUser, } });
      if (response) setTimeout(function () { alert('Atualizado Com sucesso'); window.location.reload() }, 2000)
    } catch (error) {
      console.log(error);
      console.error(error.response);
    }

  }

  useEffect(() => {
    if (props.item) {
      const { id, cpfUser, nome, email, telefone, password, ativo } = props.item
      setValues({ id, cpfUser, nome, email, telefone, password, ativo })
    }
  }, [props.item])

  return (
    <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
      <FormGroup>
        <Label for="cpfUser">CPF</Label>
        <Input type="text" name="cpfUser" id="cpfUser" onChange={onChange} value={form.cpfUser === null ? '' : form.cpfUser} required maxLength='11' minLength='11' />
      </FormGroup>
      <FormGroup>
        <Label for="nome">Nome</Label>
        <Input type="text" name="nome" id="nome" onChange={onChange} value={form.nome === null ? '' : form.nome} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" onChange={onChange} value={form.email === null ? '' : form.email} />
      </FormGroup>
      <FormGroup>
        <Label for="telefone">Telefone</Label>
        <Input type="text" name="telefone" id="telefone" onChange={onChange} value={form.telefone === null ? '' : form.telefone} placeholder="(11) 12345-1234" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Senha</Label>
        <Input type="password" name="password" id="password" onChange={onChange} value={form.password === null ? '' : form.password} />
      </FormGroup>
      <FormGroup>
        <Label for="ativo">Status</Label>
        <Input type="select" name='ativo' id='ativo' value={form.ativo} onChange={onChange}>
          <option value={true}>Ativo</option>
          <option value={false} >Inativar</option>
        </Input>
      </FormGroup>
      <Button>Salvar</Button>
    </Form>
  )
}

export default AddEditForm
