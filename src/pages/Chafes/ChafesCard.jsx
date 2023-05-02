/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
// import { BiLike } from "@react-icons/all-files/Bi/BiLike";

const ChafesCard = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://cheaf-server-n7fpa22wk-mahmud3301.vercel.app/cheaf')
            .then(response => response.json())
            .then(data => setChefs(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <><br /><br /><br /><br />
            <div className='px-5'>
                <h1 className='text-center'>Our Chiefs</h1>
                <hr className='mx-auto w-25 justify-center text-success' /><br /><br />
                <Row className='row d-flex justify-content-between'>
                    {chefs.map(chef => (
                        <Col key={chef.id} md={3} lg={4} xl={4} className='mb-5'>
                            <Card key={chef.id} style={{ width: '18rem', height: '100%' }}>
                                <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={chef.chef_picture} />
                                <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <Card.Title>{chef.chef_name}</Card.Title>
                                        <Card.Text>
                                            Years of Experience: {chef.years_of_experience}
                                            <br />
                                            Number of Recipes: {chef.num_of_recipes}
                                        </Card.Text>
                                    </div>
                                    <Card.Footer className="text-muted" style={{ display: 'flex', justifyContent: 'space-between' }} >
                                        <div className='mt-3 d-flex'>
                                            <p className='mt-2 d-flex'>
                                                {chef.likes}
                                            </p>
                                            <Button className='ms-4'>Show Recipes</Button>
                                        </div>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default ChafesCard;