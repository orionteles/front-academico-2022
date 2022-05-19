import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import DisciplinaBackendService from '../../services/academico/DisciplinaBackendService';
import disciplinaValidator from '../../validators/disciplinaValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CursoBackendService from '../../services/academico/CursoBackendService';

const DisciplinasBackend = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const [cursos, setCursos] = useState([])

  useEffect(() => {

    CursoBackendService.getAll().then(resultado => {
      setCursos(resultado.data);
    })

    if (params.id) {
      DisciplinaBackendService.get(params.id).then(resultado => {
        const disciplina = resultado.data

        for (let campo in disciplina) {
          setValue(campo, disciplina[campo])
        }
      })
    }



  }, [])

  function salvar(dados) {
console.log(dados);
    if (params.id) {
      DisciplinaBackendService.update(params.id, dados)
    } else {
      DisciplinaBackendService.create(dados)
    }

    navigate('/disciplinas-backend')
  }

  return (
    <div>
      <h1>Disciplinas Backend</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", disciplinaValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="curso_id">
          <Form.Label>Curso: </Form.Label>
          <Form.Select {...register("curso_id", disciplinaValidator.curso_id)}>
            <option>Selecione</option>
            {cursos.map(item => (
              <option key={item.id} value={item.id}>{item.nome}</option>
            ))}
          </Form.Select>
          {errors.curso_id && <span>Campo Obrigatório</span>}
        </Form.Group>


        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default DisciplinasBackend