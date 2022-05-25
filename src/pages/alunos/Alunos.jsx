import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import AlunoService from '../../services/academico/AlunoService';
import alunoValidator from '../../validators/alunoValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';

const Alunos = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const aluno = AlunoService.get(params.id)

      for (let campo in aluno) {
        setValue(campo, aluno[campo])
      }


    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      AlunoService.update(params.id, dados)
    } else {
      AlunoService.create(dados)
    }

    navigate('/alunos')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Aluno</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", alunoValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control isInvalid={errors.cpf} type="text"
            {...register("cpf", alunoValidator.cpf)}
            mask="999.999.999-99" onChange={handleChange}
          />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula: </Form.Label>
          <Form.Control
            isInvalid={errors.matricula}
            type="text"
            {...register("matricula", alunoValidator.matricula)}
            mask="99999-9999" onChange={handleChange}
          />
          {errors.matricula && <span>{errors.matricula.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="data_nascimento">
          <Form.Label>Data de Nascimento: </Form.Label>
          <Form.Control
            isInvalid={errors.data_nascimento}
            type="text"
            {...register("data_nascimento", alunoValidator.data_nascimento)}
            mask="99/99/9999" onChange={handleChange}
          />
          {errors.data_nascimento && <span>{errors.data_nascimento.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP: </Form.Label>
          <Form.Control
            isInvalid={errors.cep} type="text" {...register("cep", alunoValidator.cep)}
            mask="99.999-999" onChange={handleChange}
          />
          {errors.cep && <span>{errors.cep.message}</span>}
        </Form.Group>

        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Alunos