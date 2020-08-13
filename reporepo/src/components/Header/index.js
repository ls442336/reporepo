import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

import './style.css'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className="header">
            <Container>
                <Navbar.Brand href="#home">
                    <b>React</b> Bootstrap
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;