import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';
import logo from '../assets/maiVisage.jpg';
import { CardWiddget } from '../cartWidget/index.js';


const NavBar = () => {
    return ( 
      <div>
       <header>
       <Navbar className='header' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="header__content-logo" href="#">
          <img src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='header__text' href="#inicio">Inicio</Nav.Link>
            <Nav.Link className='header__text' href="#clases">Clases</Nav.Link>
            <NavDropdown title="Servicios" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Maquillaje Social</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Maquillaje de Novias
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Maquillaje Fotográfico
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='header__text' href="contactanos">
              Contactanos
            </Nav.Link>
          </Nav>
      <br />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='header__text' variant="outline-success">Search</Button>
          </Form>
          <CardWiddget></CardWiddget>
          <p className='CartWidget__info'>5</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
    </div>
     );
}



export {NavBar};