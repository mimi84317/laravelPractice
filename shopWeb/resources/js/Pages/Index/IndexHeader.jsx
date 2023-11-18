import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { IconButton } from "rsuite";
import "rsuite/dist/rsuite.min.css";

//引用button icon
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NoticeIcon from '@rsuite/icons/Notice';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '/resources/css/InderHeaderScss.scss';

const IndexHeader = () => {
    //const user = "1";

    return (
        <header>
            <Container>
                <Row className="align-items-center">
                    <Col className="header-logo" xs={3}>
                        <div>
                            <Image src="../img/logo.png" />
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
                        <Navbar expand="lg" className="bg-body-tertiary header-nav" >
                            <Container>
                                <IndexUserControl user="1"/>
                                <div>
                                    <IconButton icon={<NoticeIcon size={20}/>} className='header-notice'/>{' '}
                                </div>
                                <div>
                                    <IconButton icon={<AiOutlineShoppingCart size={20}/>} className='header-cart'/>{' '}
                                </div>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
  };

  function IndexUserControl(user){
    if({user} == ""){
        return(
            <div>
                <Button className="header-login" variant="outline-primary">登入</Button>
                <Button className="header-register" variant="outline-primary">註冊</Button>
            </div>
        );
    }
    else{
        return(
            <div>
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

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

}

export default IndexHeader;

