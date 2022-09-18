import {Col, Container, Row} from "react-bootstrap";

function Hours({ hours }) {
    return (
        <Container fluid>
            <Row>
                <Col lg={'auto'}>
                    <p>Sunday - {hours.Sunday}</p>
                    <p>Monday - {hours.Monday}</p>
                    <p>Tuesday - {hours.Tuesday}</p>
                    <p>Wednesday - {hours.Wednesday}</p>
                </Col>
                <Col lg={'auto'}>
                    <p>Thursday - {hours.Thursday}</p>
                    <p>Friday - {hours.Friday}</p>
                    <p>Saturday - {hours.Saturday}</p>
                </Col>
            </Row>

        </Container>
    );
}

export default Hours;