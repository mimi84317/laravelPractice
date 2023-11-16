import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '/resources/css/app.css';
import '/resources/css/app.scss';

//import自己寫的jsx
//import IndexUserControl from './IndexUserControl';
import IndexHeader from './IndexHeader';
import IndexNav from './IndexNav';
import IndexCarousel from './IndexCarousel';

import Container from 'react-bootstrap/Container';

function IndexHome(){
    return (
        <div style={{ textAlign: "center" }}>
            <IndexHeader />
            <Container>
                <IndexNav />
            </Container>
            <Container>
                <IndexCarousel />
            </Container>
        </div>
    );
}


export default IndexHome;



