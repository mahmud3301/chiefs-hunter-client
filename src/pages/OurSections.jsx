/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const OurSections = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <div>
                <h1 className='text-center'>Our Top Sections</h1>
                <hr className='mx-auto text-center w-25 text-success'/>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="position-relative">
                        <img
                            className="d-block w-100 img-fluid shadow-lg"
                            style={{ height: '400px', objectFit: 'cover' }}
                            src="https://images.unsplash.com/photo-1643806720662-f9bc01be4e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw5NjY0NzU0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
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
                                opacity: 0.4,
                            }}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>New Work</h3>
                        <p>You can visit here for enjoy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="position-relative">
                        <img
                            className="d-block w-100 img-fluid shadow-lg"
                            style={{ height: '400px', objectFit: 'cover' }}
                            src="https://images.unsplash.com/photo-1582873106031-37c47c39f5dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpZm9ybmlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
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
                                opacity: 0.4,
                            }}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>California</h3>
                        <p>You can visit here for enjoy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="position-relative">
                        <img
                            className="d-block w-100 img-fluid shadow-lg"
                            style={{ height: '400px', objectFit: 'cover' }}
                            src="https://images.unsplash.com/photo-1550109161-7262e652bf82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
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
                                opacity: 0.4,
                            }}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Las Vegas</h3>
                        <p>You can visit here for enjoy</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel><br />
        </div>
    );
};

export default OurSections;