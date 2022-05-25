import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfessorService from '../../services/academico/ProfessorService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const ProfessoresLista = () => {

  const [professores, setProfessores] = useState([])

  useEffect(() => {

    setProfessores(ProfessorService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      ProfessorService.delete(id)
      setProfessores(ProfessorService.getAll())
    }
  }

  return (
    <div>
      <h1>Professores</h1>

      <Link className='btn btn-info mb-3' to={'/professores/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          {professores.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/professores/' + i}><BsPencilFill /></Link>{' '}
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

export default ProfessoresLista