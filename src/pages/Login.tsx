import 'react';
import '../styles/login.css';
import {Container,Row,Col,Form,FormGroup,Button} from "reactstrap";
import {Link,useNavigate} from "react-router-dom";
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import {useState,useContext} from "react";

import { AuthContext } from "../context/AuthContext.tsx";
import { BASE_URL } from "../util/config.ts";

const Login =() => {
    const [credentials,setCredentials]=useState({
       email:"",
       password:"",
    });

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (event)=>{
        setCredentials(prevCredentials => ({...prevCredentials,[event.target.id]:event.target.value}));
    };

    const handleSubmit = async (event)=>{
        event.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {

            const  res = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            })
            const result = await res.json();
            if (!res.ok){
                alert(result.message);
            }
            console.log(result.data);

            dispatch({ type: "LOGIN_SUCCESS",payload: result.data });
            navigate("/");

        }catch (err){
            dispatch({ type: "LOGIN_FAIL", payload: err.message });
            console.log(err);
        }
    };


    return (
        <div>
            <section className='login-container'>
                <Container>
                    <Row>
                        <Col lg="6" md="6" className="text-center">
                            <div className="login__container d-flex align-items-center justify-content-between">
                                <div className='login__img'>
                                    <img src={loginImg} alt="logo"/>
                                </div>

                                <div className='login__form'>
                                    <div className='user'>
                                        <img src={userIcon} alt="logo"/>
                                    </div>
                                    <h2>Login</h2>
                                    <Form>
                                        <FormGroup>
                                           <input type={'email'} placeholder={'Email'} required id={'email'} onChange={handleChange}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <input type={'password'} placeholder={'Password'} required id={'password'} onChange={handleChange}/>
                                        </FormGroup>
                                      <Button className="btn auth__btn" type='submit' onClick={handleSubmit}>Login</Button>
                                    </Form>
                                    <p>Don't have an account? <Link to='/register'>Create</Link> </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>

    )
}
export default Login;

