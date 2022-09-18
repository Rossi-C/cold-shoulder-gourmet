import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icon from './cold-shoulder-logo.webp';

function Navigation() {
    return (
        <Navbar sticky="top" bg="black" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={Icon}
                        width="120"
                        height="60"
                        className="d-inline-block align-top"
                        alt=''
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="/AboutUs">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;