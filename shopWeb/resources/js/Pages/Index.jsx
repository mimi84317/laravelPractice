import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/resources/css/app.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconButton } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Admin, Menu, Reload, Resize, Search } from '@rsuite/icons';

const Index = () => {
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
                            <div>
                                <Button className="header-cart" variant="outline-primary" min-width="100%">
                                    <AiOutlineShoppingCart /> 購物車
                                </Button>{' '}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>

    );

}

export default Index
