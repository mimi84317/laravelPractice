import React, { useState } from 'react';

import Image from 'react-bootstrap/Image';

import Carousel from 'react-bootstrap/Carousel';

const IndexCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    };
    return (
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
    );
}

export default IndexCarousel;
