import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DisciplinaBackendService from '../../services/academico/DisciplinaBackendService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const DisciplinasListaBackend = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    recuperarTodos()
  }, [])

  function recuperarTodos() {
    DisciplinaBackendService.getAll().then(resultado => {
      setDisciplinas(resultado.data.data)
    })
  }

  function apagar(id) {
    if (window.confirm('Deseja realmente excluir o registro?')) {
      DisciplinaBackendService.delete(id).then(resultado => {
        recuperarTodos()
      })
    }
  }

  return (
    <div>
      <h1>Disciplinas Backend</h1>

      <Link className='btn btn-info mb-3' to={'/disciplinas-backend/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map(item => (
            <tr key={item.id}>
              <td>
                <Link to={'/disciplinas-backend/' + item.id}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(item.id)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
              <td>{item.curso.nome}</td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default DisciplinasListaBackend