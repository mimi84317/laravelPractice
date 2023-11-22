import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '/resources/css/app.css';
import '/resources/css/app.scss';

//import自己寫的jsx
import IndexHeader from './IndexHeader';
import IndexNav from './IndexNav';
import IndexCarousel from './IndexCarousel';

import Container from 'react-bootstrap/Container';

function IndexHome(){
    document.title = "shopWeb";
    return (
        <div style={{ textAlign: "center" }}>
            { /* <link rel="icon" href="../favicon.png" /> */}
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



