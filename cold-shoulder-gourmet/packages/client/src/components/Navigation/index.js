import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './style.css'

function Navigation() {
    return (
        <Navbar style={{fontFamily: "Cedarville Cursive"}} collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="/" style={{ fontSize: 25}}>Cold Shoulder Gourmet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-nbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"  className="px-5 font-weight-bold text-light">
                    <Nav className="ms-auto" style={{ fontSize: 20}}>
                        <NavLink className={"navLink"} to="/">Home</NavLink>
                        <NavLink className={"mx-2 navLink"}  to="/menu">Menu</NavLink>
                        <NavLink className={"mx-2 navLink"}  to="/producers">Producers</NavLink>
                        <NavLink className={"mx-2 navLink"}  to="/team">Meet The Team</NavLink>
                        <NavLink className={"mx-2 navLink"}  to="/aboutUs">About</NavLink>
                        <NavDropdown title="More">
                            <NavDropdown.Item style={{fontFamily: "Oswald"}}>
                                <NavLink className={"mx-2 navLink"}  to="/policies">
                                    Store Policies</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{fontFamily: "Oswald"}}>
                                <NavLink className={"mx-2 navLink"}  to="services">Services</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
