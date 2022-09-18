import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar style={{ fontFamily: "Cedarville Cursive", fontSize: 30 }} variant={"dark"}>
            <Navbar.Brand href="/" style={{ fontSize: 35 }}>Cold Shoulder Gourmet</Navbar.Brand>

            <Container className="px-5 font-weight-bold" fluid>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/aboutUs">About Us</Nav.Link>
                    <Nav.Link href="/Menu">Menu</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;