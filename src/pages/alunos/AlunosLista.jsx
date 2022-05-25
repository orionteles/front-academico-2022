import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AlunoService from '../../services/academico/AlunoService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const AlunosLista = () => {

  const [alunos, setAlunos] = useState([])

  useEffect(() => {

    setAlunos(AlunoService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      AlunoService.delete(id)
      setAlunos(AlunoService.getAll())
    }
  }

  return (
    <div>
      <h1>Alunos</h1>

      <Link className='btn btn-info mb-3' to={'/alunos/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/alunos/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
              <td>{item.duracao}</td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default AlunosLista