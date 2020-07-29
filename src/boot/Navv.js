import React, { useState } from 'react';
import {Link,animateScroll as scroll } from "react-scroll";
import theimage from '../logo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button

} from 'reactstrap';

const Navv = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <div>
            <Navbar color="dark" light expand="lg">
                <NavbarBrand href="/"><img src={theimage}/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="m-auto" navbar>
                        <NavItem>
                            <Link
                                // activeClass="active"
                                to="Home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {700}>Home </Link >
                        </NavItem>
                        <NavItem>
                            <Link
                                // activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {700}>About</Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                // activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {700}>Services </Link >
                        </NavItem>
                        <NavItem>
                            <Link
                                // activeClass="active"
                                to="work"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {700}>Work </Link >
                        </NavItem>
                        <NavItem>
                            <Link
                                // activeClass="active"
                                to="team"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {700}>Team </Link >
                        </NavItem>
                        <NavItem>
                            <Link
                                // activeClass="active"
                                to="news"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {700}>News </Link >
                        </NavItem>
                        <NavItem>
                            <Link
                                // activeClass="active"
                                to="footer"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {700}>Contact </Link >
                        </NavItem>


                    </Nav>
                    <Button color="danger" className="nav-btn d-none d-xl-block" size="lg" active>BUY NOW</Button>{' '}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navv;