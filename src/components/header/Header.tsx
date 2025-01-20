import { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { Button, Container, Row } from "reactstrap";
import './header.css';

const nav_links = [
    { path: '/home', display: 'Home' },
    { path: '/about', display: 'About' },
    { path: '/tours', display: 'Tours' },
];

const Header = () => {
    const headerRef = useRef(null);

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
                                <Button className="btn secondary__btn">
                                    <Link to="/login">Login</Link>
                                </Button>
                                <Button className="btn primary__btn">
                                    <Link to="/register">Register</Link>
                                </Button>
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
