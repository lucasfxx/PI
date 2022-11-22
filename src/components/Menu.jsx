import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="/"><img
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg
                            "width=""
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
          <Nav className="me-auto">
        <NavDropdown title="Filmes" className='show' id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/filmes/populares">Filmes Populares</Link>
            <Link className="dropdown-item" to="/filmes/lancamentos">Filmes Lançamento</Link>
            <Link className="dropdown-item" to="/filmes/Em/Cartaz">Filmes em Cartaz</Link>
        </NavDropdown>
        <NavDropdown title="Series de TV" className='show' id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/series/populares">Séries Populares</Link>
            <Link className="dropdown-item" to="/series/cartaz">Séries No Ar</Link>
            <Link className="dropdown-item" to="/series/lancamento">Séries Estrelando Hoje</Link>
          </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu