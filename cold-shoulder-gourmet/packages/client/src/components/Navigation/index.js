import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './style.css'

function Navigation() {
    return (
        <Navbar style={{fontFamily: "Cedarville Cursive", fontSize: 30}} variant={"dark"} className={"mx-5"}>
            <Navbar.Brand href="/" style={{fontSize: 35}}>Cold Shoulder Gourmet</Navbar.Brand>
            <Container className="px-5 font-weight-bold justify-content-end text-light" fluid>
                <Nav className={""}>
                    <NavLink className={"mx-2 navLink"} to="/">Home</NavLink>
                    <NavLink className={"mx-2 navLink"}  to="/menu">Menu</NavLink>
                    <NavLink className={"mx-2 navLink"}  to="/producers">Producers</NavLink>
                    <NavLink className={"mx-2 navLink"}  to="/team">Meet The Team</NavLink>
                    <NavLink className={"mx-2 navLink"}  to="/aboutUs">About</NavLink>
                    <NavDropdown title="More..." id="basic-nav-dropdown"   >
                        {/*<NavDropdown.Item style={{fontFamily: "Oswald", fontSize: 20}}>*/}
                        {/*    <NavLink className={"mx-2 navLink"}  to="services">Services</NavLink>*/}
                        {/*</NavDropdown.Item>*/}
                        <NavDropdown.Item style={{fontFamily: "Oswald", fontSize: 20}}>
                            <NavLink className={"mx-2 navLink"}  to="/policies">
                                Store Policies</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
