/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ChefRecipesPage = () => {
    const recipes = [
        {
            name: 'All-American Burger',
            ingredients: ['Ground Beef', 'Burger Buns', 'Lettuce', 'Tomato', 'Onion'],
            cookingMethod: '1. Preheat grill to medium-high heat. 2. Shape ground beef into patties. 3. Grill patties for 4-5 minutes per side. 4. Toast buns on the grill. 5. Assemble burgers with lettuce, tomato, and onion. 6. Serve and enjoy!',
            rating: 4.5
        },
        {
            name: 'Classic Mac and Cheese',
            ingredients: ['Elbow Macaroni', 'Cheddar Cheese', 'Milk', 'Butter', 'Breadcrumbs'],
            cookingMethod: '1. Cook macaroni according to package instructions. 2. In a saucepan, melt butter and stir in flour. 3. Gradually add milk and cook until thickened. 4. Stir in cheese until melted and smooth. 5. Combine cooked macaroni and cheese sauce. 6. Top with breadcrumbs and bake for 20 minutes. 7. Serve hot and enjoy!',
            rating: 4.8
        },
        {
            name: 'BBQ Ribs',
            ingredients: ['Pork Ribs', 'BBQ Sauce', 'Salt', 'Pepper', 'Garlic Powder'],
            cookingMethod: '1. Preheat oven to 300°F (150°C). 2. Season ribs with salt, pepper, and garlic powder. 3. Wrap ribs tightly in foil and bake for 2 hours. 4. Remove from foil and brush with BBQ sauce. 5. Grill ribs for 5-10 minutes per side, basting with more sauce. 6. Let rest for a few minutes before serving. 7. Enjoy tender and flavorful BBQ ribs!',
            rating: 4.7
        }
    ];

    return (
        <Container>
            <Row>
                <Col>
                    {/* Chef's Banner */}
                    <div className="chef-banner">
                        {/* Chef picture, name, bio, likes, number of recipes, and years of experience */}
                    </div>
                </Col>
            </Row>
            <Row>
                {recipes.map((recipe, index) => (
                    <Col key={index} md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{recipe.name}</Card.Title>
                                <Card.Text>
                                    <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Cooking Method:</strong> {recipe.cookingMethod}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Rating:</strong> {recipe.rating}
                                </Card.Text>
                                <Button variant="primary">Favorite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ChefRecipesPage;