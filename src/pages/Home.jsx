import React from 'react'
import { Card } from 'react-bootstrap'
import { FaListAlt } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
     <Card className="text-center">
        <Card.Header><h1>Bem Vindo</h1></Card.Header>
        <Card.Body>
   <    Card.Text>
                
        </Card.Text>
        <Link className="btn btn-dark " to={"/filmes/populares"}>
        <FaListAlt style={{fontSize:'15px', color: '#808080'}} />Filmes Populares<AiFillStar style={{fontSize:'15px', color: '#FFFF00'}} />
                </Link><br/><br/>
        <Link className="btn btn-dark " to={"/filmes/lancamentos"}>
        <FaListAlt style={{fontSize:'15px', color: '#808080'}} />Filmes Lançamentos
                </Link><br/><br/>
        <Link className="btn btn-dark " to={"/filmes/Em/Cartaz"}>
        <FaListAlt style={{fontSize:'15px', color: '#808080'}} />Filmes Em Cartaz
                </Link><br/><br/>
        <Link className="btn btn-dark " to={"/series/populares"}>
        <FaListAlt style={{fontSize:'15px', color: '#808080'}} />Séries Populares<AiFillStar style={{fontSize:'15px', color: '#FFFF00'}} />
                </Link><br/><br/>
        <Link className="btn btn-dark " to={"/series/cartaz"}>
        <FaListAlt style={{fontSize:'15px', color: '#808080'}} />Séries No Ar
                </Link><br/><br/>
                
        <Link className="btn btn-dark " to={"/series/lancamento"}>
        <FaListAlt style={{fontSize:'15px', color: '#808080'}} />Séries Estrelando Hoje
                </Link><br/>
            
        </Card.Body>
        </Card>
   </div>
  )
}

export default Home