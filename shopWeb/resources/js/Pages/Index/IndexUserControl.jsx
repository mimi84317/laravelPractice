import React, { useState } from 'react';

function IndexUserControl(user){
    const user = "1";
    if({user} == ""){
        return(
            <noMember/>
        );
    }
    else{
        return(
            <userLogin/>
        );
    }

}

function noMember(){
    return(
        <Col>
            <Button className="header-login" variant="outline-primary">登入</Button>
            <Button className="header-register" variant="outline-primary">註冊</Button>
        </Col>
    );
}
function userLogin(){
    return(
        <Col>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>
    );
}

export default IndexUserControl
