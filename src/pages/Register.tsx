import React, { useState, useContext } from "react";
import "../styles/signup.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../context/AuthContext.tsx";
import { BASE_URL } from "../util/config.ts";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [event.target.id]: event.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.message); // Display error message from backend
                return;
            }

            // Store user in context
            dispatch({ type: "REGISTER_SUCCESS", payload: result.data });

            // Redirect to login page
            navigate("/login");
        } catch (error) {
            console.error("Registration error:", error);
            alert("Something went wrong. Try again.");
        }
    };

    return (
        <section className="login-container">
            <Container>
                <Row>
                    <Col lg="6" md="6" className="text-center">
                        <div className="login__container d-flex align-items-center justify-content-between">
                            <div className="login__img">
                                <img src={registerImg} alt="Register" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="User Icon" />
                                </div>
                                <h2>Register</h2>
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            required
                                            id="username"
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            id="email"
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            id="password"
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <Button className="btn auth__btn" type="submit">
                                        Sign Up
                                    </Button>
                                </Form>
                                <p>
                                    Already have an account?{" "}
                                    <Link className="log" to="/login">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;
