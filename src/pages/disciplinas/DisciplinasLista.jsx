import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DisciplinaService from '../../services/academico/DisciplinaService'
import { FaPlus } from 'react-icons/fa'

const DisciplinasLista = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {

    setDisciplinas(DisciplinaService.getAll())

  }, [])

console.log(disciplinas);

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
              <td>{i}</td>
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