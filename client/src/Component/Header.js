import React from "react";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Header(){
    // bg: 배경색, expand: 화면 크기가 큰 곳에서는 네이게이션이 펼쳐짐
    // Navbar.Collapse 화면이 모바일로 작아졌을 때를 대비해서 감싸줌
    // aria-controls="basic-navbar-nav" 네비게이션에서 기본 메뉴를 나타냄
    // as={Link} 추후 App에서 전달받을 Router를 지원해준다는 의미
    return(
        <Navbar bg="light" expand='lg'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    로고
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse>
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/movie">
                        Movie
                    </Nav.Link>
                    <Nav.Link as={Link} to="/todo">
                        Todos
                    </Nav.Link>
                    <Nav.Link as={Link} to="/blog">
                        Blog
                    </Nav.Link>
                    

                    <NavDropdown title="Games" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/game">
                            Number Guessing Game
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/quiz">
                            Quiz
                        </NavDropdown.Item>
                    </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
