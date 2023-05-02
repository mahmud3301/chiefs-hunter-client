/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Pdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";
import { Container } from "react-bootstrap";

const ref = React.createRef();

const Blog = () => {
    return (
        <Container>
            <div>
                <div ref={ref}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="blog-post p-5 mt-3" style={{ backgroundColor: "#fa2a1b", borderRadius: "10px" }}>
                                <h2 className="blog-title">Differences Between Uncontrolled and Controlled Components</h2>
                                <p className="blog-summary">
                                    Uncontrolled components are form elements that store their own state internally, while controlled components are form elements whose state is controlled by React. Uncontrolled components are usually simpler to implement, as they handle their own state and data management. Controlled components, on the other hand, provide more control and allow for validation and customization of user input.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className="blog-post p-5" style={{ backgroundColor: "#dcfa1b", borderRadius: "10px" }}>
                                <h2 className="blog-title">Validating React Props using PropTypes</h2>
                                <p className="blog-summary">
                                    PropTypes is a library used for type checking props in React components. By defining PropTypes for your component's props, you can ensure that the correct data types are being passed to the component. It helps to catch bugs and provides better documentation for the component. PropTypes provide a variety of validators, such as required, default values, custom validators, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <div className="blog-post p-5" style={{ backgroundColor: "#44fa1b", borderRadius: "10px" }}>
                                <h2 className="blog-title">Difference Between Node.js and Express.js</h2>
                                <p className="blog-summary">
                                    Node.js is a JavaScript runtime built on Chroms's V8 JavaScript engine. It allows you to execute JavaScript code on the server-side, enabling server-side scripting and building scalable network applications. Express.js, on the other hand, is a web application framework for Node.js. It provides a set of features and tools to build web applications, APIs, and server-side rendering. Express.js simplifies the development process by providing a robust set of HTTP utility methods and middleware.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 p-3 mb-5">
                            <div className="blog-post p-5 mb-5" style={{ backgroundColor: "#1bd5fa", borderRadius: "10px" }}>
                                <h2 className="blog-title">Custom Hooks in React</h2>
                                <p className="blog-summary">
                                    Custom hooks are JavaScript functions that utilize the React Hooks API to share logic and stateful behavior between components. They allow you to extract reusable logic from components and create modular, self-contained functions. Custom hooks can be used for a variety of purposes, such as handling form validation, managing state, connecting to APIs, and more. Creating custom hooks promotes code reusability, reduces duplication, and makes your codebase more organized and maintainable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => (
                        <div>
                            <div className="col-md-12 text-center mt-4">
                                <button className="btn btn-danger mx-auto" onClick={toPdf}>
                                    <FaDownload className="me-3" />Download This Blog
                                </button>
                            </div>
                            <br /><br /><br />
                        </div>
                    )}
                </Pdf>
            </div>
        </Container>
    );
};

export default Blog;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Blog />, rootElement);