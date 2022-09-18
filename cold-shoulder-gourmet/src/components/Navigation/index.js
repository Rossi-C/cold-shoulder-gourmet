import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useEffect} from "react";
import WebFont from "webfontloader";

function Navigation() {
    return (
        <Navbar style={{fontFamily: "Cedarville Cursive", fontSize: 25}} variant={"dark"}>
            <Navbar.Brand href="/" style={{fontSize: 35}}>Cold Shoulder Gourmet</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutUs">About Us</Nav.Link>
                <Nav.Link href="/Menu">Menu</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;