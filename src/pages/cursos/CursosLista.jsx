import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import apiAcademico from '../../services/apiAcademico'

const CursosLista = () => {

    const [cursos, setCursos] = useState([])
    const [items, setItems] = useState([]);

    useEffect(() => {

        apiAcademico.get('/cursos').then(resultado => {
            setCursos(resultado.data)
        })

        getFeed()


    }, [])

    async function getFeed() {
        const rssUrl = 'https://g1.globo.com/rss/g1/politica'
        const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
        const { contents } = await res.json();

        const feed = new window.DOMParser().parseFromString(contents, "text/xml");
        const items = feed.querySelectorAll("item");

        const feedItems = [...items].map((el) => ({
            link: el.querySelector("link")?.innerHTML,
            title: el.querySelector("title")?.innerHTML,
        }));
        setItems(feedItems);
        console.log(feedItems)
    }

    

    return (
        <div>
            <h1>Cursos</h1>

            <Link to={'/cursos/create'}>Novo</Link>

            {items.map(item => (
                <div>
                    <p><a target={'_blank'} href={item.link}>{item.title}</a></p>
                </div>
            ))}


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Duração</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.duracao}</td>
                            <td>{item.modalidade}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>


        </div>
    )
}

export default CursosLista