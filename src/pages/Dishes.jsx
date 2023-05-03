/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Dishes = () => {
    return (
        <div className='container' id='foods'>
            <br /><br /><br /><br /><br /><br />
            <div>
                <h1 className='text-center'>Our Dishes</h1>
                <hr className='mx-auto text-success text-center w-25' />
            </div><br /><br />
            <div>
                <div className='d-flex flex-column flex-md-row align-items-center'>
                    <img src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg" alt="" className="img-fluid" />
                    <div className="ml-md-4 mt-3 mt-md-0 ms-5">
                        <h1 className="mb-3 text-end">Burger</h1>
                        <p className="text-end">A delicious and juicy burger served with fresh lettuce, tomato, <br /> onion, and a special sauce on a toasted bun. It's a perfect <br /> combination of flavors that will leave you craving for more.</p>
                    </div>
                </div>
            </div><br /><br /><br />
            <div>
                <div className='d-flex flex-column flex-md-row align-items-center'>
                    <div className="ml-md-4 mt-3 mt-md-0 ms-5">
                        <h1 className="mb-3 text-start">Pizza</h1>
                        <p className="text-start">Indulge in the ultimate comfort food experience with our mouthwatering pizzas. Our pizzas are crafted with love,<br /> featuring a perfect balance of flavors and textures. Each bite is a symphony of freshly made dough, rich tomato sauce, and a generous topping of premium ingredients. <br /> Whether you prefer the classic Margherita or crave something more adventurous like our signature BBQ chicken pizza, we guarantee a slice of pure satisfaction. Join us at [Restaurant Name] and discover why our pizzas are the talk of the town.</p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80" alt="" className="img-fluid w-50 ms-5" />
                </div>
            </div><br /><br /><br />
        </div>
    );
};

export default Dishes;