import { useRef, useEffect,useContext } from "react";
import { NavLink, Link,useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { Button, Container, Row } from "reactstrap";
import './header.css';
import {AuthContext} from "../../context/AuthContext.tsx";

const nav_links = [
    { path: '/home', display: 'Home' },
    { path: '/about', display: 'About' },
    { path: '/tours', display: 'Tours' },
];



const Header = () => {
    const headerRef = useRef(null);
    const navigate = useNavigate();
    const {user,dispatch} = useContext(AuthContext);

 const logout = () => {
     dispatch({
         type:"LOGOUT"})
     navigate('/')
 }

    const stickyHeaderFunc = () => {
        if (headerRef.current) {
            if (window.scrollY > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickyHeaderFunc);

        // Cleanup event listener
        return () => {
            window.removeEventListener('scroll', stickyHeaderFunc);
        };
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav_wrapper d-flex align-items-center justify-content-between">
                        {/*========= logo start =========*/}
                        <div className="logo">
                            <img src={logo} alt="Travel Logo" />
                        </div>
                        {/*========= logo end =========*/}

                        {/*========= menu start =========*/}
                        <div className="navigation">
                            <ul className="menu d-flex align-items-center gap-5">
                                {nav_links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                isActive ? "active__link" : ""
                                            }
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/*========= menu end =========*/}

                        <div className="nav__right d-flex align-items-center gap-4">
                            <div className="nav__btns d-flex align-items-center gap-4">

                                {
                                    user?
                                        <>
                                            <h5 className="mb-0">{user.username}</h5>
                                            <Button className='btn primary__btn' onClick={logout}>Logout</Button>
                                        </>:
                                        <>
                                            <Button className="btn secondary__btn">
                                                <Link to="/login">Login</Link>
                                            </Button>
                                            <Button className="btn primary__btn text-bg-dark">
                                                <Link to="/register">Register</Link>
                                            </Button>
                                        </>
                                }

                            </div>
                            <span className="mobile__menu">
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
