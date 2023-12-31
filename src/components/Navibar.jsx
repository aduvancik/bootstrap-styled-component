import React, { useState } from 'react'
import { Button, Container, Form, Modal, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div`
a, .navbar-brand, .navbar-nav .nav-link {
    text-decoration:none;
    color: #abd1b8;
    &:hover {
        color: white;
    }
}

#responsive-navbar-nav {
    display:flex;
    justify-content: space-between;
}

.ml-auto {
    display: flex;
    gap: 10px;
}

`

export default function Navibar() {

    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                            <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        </Nav>
                        <Nav className='ml-auto'>
                            <Button variant="primary" className='mr-2' onClick={handleShow}>Log in</Button>
                            <Button variant="primary" onClick={handleShow}>Sign out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Body>
                <Modal.Title>Log in</Modal.Title>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Email addres</Form.Label>
                            <Form.Control type='email' placeholder='Enter email'/>
                            <Form.Text className='text-muted'>We'll never share ypur email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password'/>
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                            <Form.Check type='checkbox' label="Remember me"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal.Header>
        </Modal>
        </>
    )
}
