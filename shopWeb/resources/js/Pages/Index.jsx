import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '/resources/css/app.css';
import '/resources/css/app.scss';

//import IndexUserControl from './IndexUserControl';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconButton } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Carousel from 'react-bootstrap/Carousel';

function Index(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
        <div style={{ textAlign: "center" }}>
            <header>
                <Container>
                    <Row className="align-items-center">
                        <Col className="header-logo" xs={3}>
                            <div>
                                <Image src="/img/logo.png" />
                            </div>
                        </Col>
                        <Col className="header-search" xs={6}>
                            <div>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="搜尋" />
                                    <IconButton icon={<BsSearch />} color="cyan" appearance="ghost" />{' '}
                                </InputGroup>
                            </div>
                        </Col>
                        <Col>
                            <IndexUserControl user="1"/>
                        </Col>
                        <Col>
                            <div>
                                <Button className="header-cart" variant="outline-primary">
                                    <AiOutlineShoppingCart /> 購物車
                                </Button>{' '}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <Container>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="me-auto">
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="me-auto">
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="me-auto">
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="me-auto">
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            <Container>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <Image src="/img/53584673_2376330595713162_8360521967605907456_o.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="/img/56518264_2535376079829056_8834093007352365056_o.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="/img/q52Ro6OakKWbqKQ.jpg" />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

function IndexUserControl(user){
    if({user} == ""){
        return <noMember/>;
    }
    else{
        return <userLogin/>;
    }

}

function noMember(){
    return(
        <div>
            <Button className="header-login" variant="outline-primary">登入</Button>
            <Button className="header-register" variant="outline-primary">註冊</Button>
        </div>
    );
}
function userLogin(){
    return(
        <div>
            <h1>hello</h1>
        </div>
    );
}

export default Index



