/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="position-relative">
                    <img
                        className="d-block w-100 img-fluid shadow-lg"
                        style={{ height: '400px', objectFit: 'cover', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
                        src="https://images.unsplash.com/photo-1561807762-8e8b37407e49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHMlMjBhbWVyaWNhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="position-relative">
                    <img
                        className="d-block w-100 img-fluid shadow-lg"
                        style={{ height: '400px', objectFit: 'cover', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
                        src="https://images.unsplash.com/photo-1555243896-771a81243361?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHMlMjBhbWVyaWNhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        alt="Second slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="position-relative">
                    <img
                        className="d-block w-100 img-fluid shadow-lg"
                        style={{ height: '400px', objectFit: 'cover', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
                        src="https://images.unsplash.com/photo-1471478108131-9b2335c21611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHMlMjBhbWVyaWNhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        alt="Third slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;