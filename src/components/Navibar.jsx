import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div `
a,.lii, .navbar-brand, .navbar-nav .nav-link {
    color: #abd1b8;
    &:hover {
        color: white;
    }
}
`

export default function Navibar() {
    return (
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
                <Navbar.Brand>WebDev Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <li className='lii'>lala</li>
                    </Nav>
                    <Nav className='ml-auto'>
                        <Button variant="primary" className='mr-2'>Log in</Button>
                        <Button variant="primary">Sign out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}
