/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Container, Spinner } from 'react-bootstrap';
import { BiLike } from 'react-icons/bi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChafesCard = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://cheaf-server-mahmud3301.vercel.app/cheaf')
            .then(response => response.json())
            .then(data => {
                setChefs(data);
                setLoading(false);
            });
    }, []);

    return (
        <div id="cheafs">
            <br />
            <br />
            <br />
            <br />
            <Container>
                <h1 className="text-center">Our Chiefs</h1>
                <hr className="mx-auto w-25 justify-center text-success" />
                <br />
                <br />
                {loading ? (
                    <Spinner animation="border" variant="primary" className='mx-auto justify-item-center text-center'/>
                ) : (
                    <Row className="row d-flex justify-content-between">
                        {chefs.map(chef => (
                            <Col key={chef.id} md={3} lg={4} xl={4} className="mb-5">
                                <Card key={chef.id} style={{ width: '18rem', height: '100%' }}>
                                    <LazyLoadImage
                                        src={chef.chef_picture}
                                        variant="top"
                                        style={{ width: '100%', height: '200px' }}
                                        effect="blur"
                                    />
                                    <Card.Body
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <div>
                                            <Card.Title>{chef.chef_name}</Card.Title>
                                            <Card.Text>
                                                Years of Experience: {chef.years_of_experience}
                                                <br />
                                                Number of Recipes: {chef.num_of_recipes}
                                            </Card.Text>
                                        </div>
                                        <Card.Footer
                                            className="text-muted"
                                            style={{ display: 'flex', justifyContent: 'space-between' }}
                                        >
                                            <div className="mt-3 d-flex">
                                                <p className="mt-2 d-flex">
                                                    <BiLike className="mt-1" />
                                                    {chef.likes}
                                                </p>
                                                <Link to={`/cheafs/${chef.id}`}>
                                                    <Button className="ms-4">Show Recipes</Button>
                                                </Link>
                                            </div>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default ChafesCard;