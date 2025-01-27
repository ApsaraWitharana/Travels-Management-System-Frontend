import 'react';
import '../styles/signup.css';
import {Container,Row,Col,Form,FormGroup,Button} from "reactstrap";
import {Link} from "react-router-dom";
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import {useState} from "react";

const Register =() => {
    const [credentials,setCredentials]=useState({
        username:undefined,
        email:undefined,
        password:undefined,
    });

    const handleChange = (event)=>{
        setCredentials(prevCredentials => ({...prevCredentials,[event.target.id]:event.target.value}));
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
    }
    return (
        <div>
            <section className='login-container'>
                <Container>
                    <Row>
                        <Col lg="6" md="6" className="text-center">
                            <div className="login__container d-flex align-items-center justify-content-between">
                                <div className='login__img'>
                                    <img src={registerImg} alt="logo"/>
                                </div>

                                <div className='login__form'>
                                    <div className='user'>
                                        <img src={userIcon} alt="logo"/>
                                    </div>
                                    <h2>Register</h2>
                                    <Form>
                                        <FormGroup>
                                            <input type={'text'} placeholder={'UserName'} required id={'userName'} onChange={handleChange}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <input type={'email'} placeholder={'Email'} required id={'email'} onChange={handleChange}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <input type={'password'} placeholder={'Password'} required id={'password'} onChange={handleChange}/>
                                        </FormGroup>
                                        <Button className="btn auth__btn" type='submit' onClick={handleSubmit}>SignIn</Button>
                                    </Form>
                                    <p>Do you  have an account? <Link className='log' to='/login'>Login</Link> </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>

    )
}
export default Register;

