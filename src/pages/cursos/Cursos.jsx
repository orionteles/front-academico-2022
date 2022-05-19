import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import CursoService from '../../services/academico/CursoService';
import cursoValidator from '../../validators/cursoValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Cursos = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const curso = CursoService.get(params.id)

      for (let campo in curso) {
        setValue(campo, curso[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      CursoService.update(params.id, dados)
    } else {
      CursoService.create(dados)
    }

    navigate('/cursos')
  }

  return (
    <div>
      <h1>Curso</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", cursoValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Cursos