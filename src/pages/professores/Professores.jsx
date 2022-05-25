import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import ProfessorService from '../../services/academico/ProfessorService';
import professorValidator from '../../validators/professorValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
import Input from '../../components/forms/Input';

const Professores = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const reference = {register, errors, validator: professorValidator, setValue}

  useEffect(() => {
    if (params.id) {
      const professor = ProfessorService.get(params.id)

      for (let campo in professor) {
        setValue(campo, professor[campo])
      }


    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      ProfessorService.update(params.id, dados)
    } else {
      ProfessorService.create(dados)
    }

    navigate('/professores')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Professor</h1>

      <Form >
        <Input name="nome" label="Nome" reference={reference} />
        <Input name="telefone" label="Telefone" mask="(99) 99999-9999" reference={reference} />
        <Input name="dt" label="Dt. Nascimento" type="date" reference={reference} />
        <Input name="cpf" label="CPF" mask="999.999.999-99" reference={reference} />

        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Professores