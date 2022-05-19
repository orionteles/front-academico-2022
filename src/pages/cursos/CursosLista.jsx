import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CursoService from '../../services/academico/CursoService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const CursosLista = () => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {

    setCursos(CursoService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      CursoService.delete(id)
      setCursos(CursoService.getAll())
    }
  }

  return (
    <div>
      <h1>Cursos</h1>

      <Link className='btn btn-info mb-3' to={'/cursos/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/cursos/' + i}><BsPencilFill /></Link>{' '}
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

export default CursosLista