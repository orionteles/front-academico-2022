import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DisciplinaService from '../../services/academico/DisciplinaService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const DisciplinasLista = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {

    setDisciplinas(DisciplinaService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      DisciplinaService.delete(id)
      setDisciplinas(DisciplinaService.getAll())
    }
  }

  return (
    <div>
      <h1>Disciplinas</h1>

      <Link className='btn btn-info mb-3' to={'/disciplinas/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/disciplinas/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default DisciplinasLista