import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function Navigation() {
    return (
        <Navbar style={{fontFamily: "Cedarville Cursive", fontSize: 30}} variant={"dark"} className={"mx-5"}>
            <Navbar.Brand href="/" style={{fontSize: 35}}>Cold Shoulder Gourmet</Navbar.Brand>
            <Container className="px-5 font-weight-bold justify-content-end" fluid>
                <Nav className={""}>
                    <Nav.Link className={"mx-2"} href="/">Home</Nav.Link>
                    <Nav.Link className={"mx-2"}  href="/menu">Menu</Nav.Link>
                    <Nav.Link className={"mx-2"}  href="/producers">Producers</Nav.Link>
                    <Nav.Link className={"mx-2"}  href="/team">Meet The Team</Nav.Link>
                    <Nav.Link className={"mx-2"}  href="/aboutUs">About</Nav.Link>
                    <NavDropdown title="More..." id="basic-nav-dropdown"   >
                        <NavDropdown.Item style={{fontFamily: "Oswald", fontSize: 20}} href="/services">Services</NavDropdown.Item>
                        <NavDropdown.Item style={{fontFamily: "Oswald", fontSize: 20}} href="/policies">Store Policies</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;