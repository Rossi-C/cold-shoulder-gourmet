import {Container, Nav, Navbar} from "react-bootstrap";

function Navigation() {
    return (
        <Navbar style={{fontFamily: "Cedarville Cursive", fontSize: 30}} variant={"dark"} className={"mx-5"}>
            <Navbar.Brand href="/" style={{fontSize: 35}}>Cold Shoulder Gourmet</Navbar.Brand>

            <Container className="px-5 font-weight-bold justify-content-end" fluid>
                <Nav className={""}>
                    <Nav.Link className={"mx-2"} href="/">Home</Nav.Link>
                    <Nav.Link className={"mx-2"}  href="/menu">Menu</Nav.Link>
                    <Nav.Link className={"mx-2"}  href="/gallery">Gallery</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;