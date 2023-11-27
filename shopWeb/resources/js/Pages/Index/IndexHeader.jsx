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
import { FcGoogle  } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaLine } from "react-icons/fa6";
import NoticeIcon from '@rsuite/icons/Notice';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Modal from 'react-bootstrap/Modal';

import '/resources/css/InderHeaderScss.scss';

const IndexHeader = () => {
    //const user = "1";

    return (
        <header>
            <Container>
                <Row className="align-items-center">
                    <Col className="header-logo" xs={3}>
                        <div>
                            <a href={route('IndexHome')}>
                                <Image src="../img/logo.png" />
                            </a>
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
                                <IndexUserControl />
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

  function IndexUserControl(){
    const user = "";

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if(user == ""){
        return(
            <div>
                { /*<Button href={route('login')} target="" onClick={() => onClickOpenVacancy(id)} variant="outline-primary">登入/註冊</Button>*/ }
                <>
                    <Button variant="outline-primary" onClick={handleShow}>登入/註冊</Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>登入/註冊</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="d-grid gap-2">
                                <Button variant="outline-primary" href={route('googleLogin')} target="" onClick={() => onClickOpenVacancy(id)}><FcGoogle /> 使用Google繼續</Button>
                                <Button variant="outline-primary" size='lg' onClick=""><FaFacebook /> 使用Facebook繼續</Button>
                                <Button variant="outline-success" size='lg' onClick=""><FaLine /> 使用Line繼續</Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>
            </div>
        );
    }
    else{
        return(
            <div>
                { /*<Navbar expand="lg" className="bg-body-tertiary">
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
                </Navbar>*/ }
                <h1>hello</h1>
            </div>
        );
    }

}

/*function getLoginPage(){
    return(

    );
}*/

export default IndexHeader;

