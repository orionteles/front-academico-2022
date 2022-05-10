import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import apiAcademico from '../../services/apiAcademico'

const Cursos = () => {

    const [nome, setNome] = useState('')
    const [duracao, setDuracao] = useState('')
    const [modalidade, setModalidade] = useState('')

    function handleNome(event){
        setNome(event.target.value);
    }

    function handleDuracao(event){
        setDuracao(event.target.value);
    }

    function handleModalidade(event){
        setModalidade(event.target.value);
    }

    function salvar(){
        const dados = {nome, duracao, modalidade}

        console.log(dados)
    }

    return (
        <div>
            <h1>Cursos</h1>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" onChange={handleNome} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control type="number" onChange={handleDuracao}   />
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control type="text"  onChange={handleModalidade} />
                </Form.Group>
                <div className="text-center">
                    <Button onClick={salvar}><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default Cursos