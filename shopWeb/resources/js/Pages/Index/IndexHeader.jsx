import React, { useState } from 'react';

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

const IndexHeader = () => {
    const user = "1";

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
                <h1>hello</h1>
            </div>
        );
    }

}

export default IndexHeader;

