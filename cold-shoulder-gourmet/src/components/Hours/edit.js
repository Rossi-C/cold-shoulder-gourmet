import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";


function EditHours({ hours: { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday } }) {
    const [sunday, setSunday] = useState(Sunday);
    const [monday, setMonday] = useState(Monday);
    const [tuesday, setTuesday] = useState(Tuesday);
    const [wednesday, setWednesday] = useState(Wednesday);
    const [thursday, setThursday] = useState(Thursday);
    const [friday, setFriday] = useState(Friday);
    const [saturday, setSaturday] = useState(Saturday);
    const businessDocRef = doc(db, 'business', 'info');

    const initialState = "Submit"
    const [buttonText, setButtonText] = useState(initialState);

    const changeButtonText = (text) => {
        setButtonText(text);
        setTimeout(() => setButtonText(initialState), [1000])
    };

    const updateHours = async () => {
        await updateDoc(businessDocRef, {
            "hours.Sunday": sunday,
            "hours.Monday": monday,
            "hours.Tuesday": tuesday,
            "hours.Wednesday": wednesday,
            "hours.Thursday": thursday,
            "hours.Friday": friday,
            "hours.Saturday": saturday
        })
    };

    return (
        <Container fluid style={{ fontSize: 20 }}>
            <Form>
                <Row className="justify-content-center">
                    <Col lg={true}>
                        <Form.Group as={Row} className="mb-3 align-items-center justify-content-center" controlId="sunday">
                            <Form.Label column sm={3}>
                                Sunday
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    type="text"
                                    name="sunday"
                                    value={sunday}
                                    onChange={async (e) => {
                                        await setSunday(e.target.value);
                                    }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center justify-content-center" controlId="monday">
                            <Form.Label column sm={3}>
                                Monday
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    type="text"
                                    name="monday"
                                    value={monday}
                                    onChange={async (e) => {
                                        await setMonday(e.target.value);
                                    }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center justify-content-center" controlId="Tuesday">
                            <Form.Label column sm={3}>
                                Tuesday
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    type="text"
                                    name="tuesday"
                                    value={tuesday}
                                    onChange={async (e) => {
                                        await setTuesday(e.target.value);
                                    }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center justify-content-center" controlId="Wednesday">
                            <Form.Label column sm={3}>
                                Wednesday
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    type="text"
                                    name="wednesday"
                                    value={wednesday}
                                    onChange={async (e) => {
                                        await setWednesday(e.target.value);
                                    }} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col lg={true}>
                        <Form.Group as={Row} className="mb-3 align-items-center justify-content-center" controlId="Thursday">
                            <Form.Label column sm={3}>
                                Thursday
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    type="text"
                                    name="thursday"
                                    value={thursday}
                                    onChange={async (e) => {
                                        await setThursday(e.target.value);
                                    }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center justify-content-center" controlId="Friday">
                            <Form.Label column sm={3}>
                                Friday
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    type="text"
                                    name="friday"
                                    value={friday}
                                    onChange={async (e) => {
                                        await setFriday(e.target.value);
                                    }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center justify-content-center" controlId="Saturday">
                            <Form.Label column sm={3}>
                                Saturday
                            </Form.Label>
                            <Col sm={7}>
                                <Form.Control
                                    type="text"
                                    name="saturday"
                                    value={saturday}
                                    onChange={async (e) => {
                                        await setSaturday(e.target.value);
                                    }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center justify-content-center">
                            <Col sm={{ span: 6, offset: 2 }}>
                                <Button
                                    className="mt-1"
                                    type="button"
                                    onClick={async () => {
                                        changeButtonText('Updating...')
                                        updateHours();
                                    }}>
                                    {buttonText}
                                </Button>
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default EditHours;