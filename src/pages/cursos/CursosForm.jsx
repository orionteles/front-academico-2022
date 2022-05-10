import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import apiAcademico from '../../services/apiAcademico'
import { useForm } from 'react-hook-form'

const CursosForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados){
        console.log(dados)
    }

    return (
        <div>
            <h1>Cursos</h1>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register("nome", {required: 'Campo Obrigatório'})} />
                    {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control type="number" {...register("duracao")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control type="text" {...register("modalidade")} />
                </Form.Group>
                <div className="text-center">
                    <Button onClick={handleSubmit(salvar)}><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default CursosForm