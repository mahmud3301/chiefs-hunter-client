/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ChafesCard from './Chafes/ChafesCard';
import Dishes from './Dishes';
import OurSections from './OurSections';

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="position-relative">
                        <img
                            className="d-block w-100 img-fluid shadow-lg"
                            style={{ height: '400px', objectFit: 'cover' }}
                            src="https://images.unsplash.com/photo-1561807762-8e8b37407e49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHMlMjBhbWVyaWNhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                            alt="First slide"
                        />
                        <div
                            className="overlay"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: '#120201',
                                opacity: 0.7,
                            }}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Burger With monies</h3>
                        <p>Burger With monies wow its our CEO's favorite</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="position-relative">
                        <img
                            className="d-block w-100 img-fluid shadow-lg"
                            style={{ height: '400px', objectFit: 'cover' }}
                            src="https://images.unsplash.com/photo-1555243896-771a81243361?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHMlMjBhbWVyaWNhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                            alt="second slide"
                        />
                        <div
                            className="overlay"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: '#120201',
                                opacity: 0.7,
                            }}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Burger With France Fry</h3>
                        <p>Burger With France Fry is it cool huh? It's made by our chief John Smith.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="position-relative">
                        <img
                            className="d-block w-100 img-fluid shadow-lg"
                            style={{ height: '400px', objectFit: 'cover' }}
                            src="https://images.unsplash.com/photo-1471478108131-9b2335c21611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHMlMjBhbWVyaWNhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                            alt="Third slide"
                        />
                        <div
                            className="overlay"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: '#120201',
                                opacity: 0.7,
                            }}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Pie Cake</h3>
                        <p>Pie Cake is on of the our best desert items</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <ChafesCard />
            <Dishes/>
            <OurSections/>
        </>
    );
};

export default Home;