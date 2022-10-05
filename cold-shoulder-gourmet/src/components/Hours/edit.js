import { Col, Container, Row, Form } from "react-bootstrap";
// import { useState } from 'react';
// import { db } from "../../firebase";
// import { doc, updateDoc } from "firebase/firestore";


function EditHours({ hours, setHours }) {
    // const [sunday, setSunday] = useState(Sunday);
    // const [monday, setMonday] = useState(Monday);
    // const [tuesday, setTuesday] = useState(Tuesday);
    // const [wednesday, setWednesday] = useState(Wednesday);
    // const [thursday, setThursday] = useState(Thursday);
    // const [friday, setFriday] = useState(Friday);
    // const [saturday, setSaturday] = useState(Saturday);
    // const businessDocRef = doc(db, 'business', 'info');

    // const initialState = "Submit"
    // const [buttonText, setButtonText] = useState(initialState);

    // const changeButtonText = (text) => {
    //     setButtonText(text);
    //     setTimeout(() => setButtonText(initialState), [1000])
    // };

    // const updateHours = async () => {
    //     await updateDoc(businessDocRef, {
    //         "hours.Sunday": sunday,
    //         "hours.Monday": monday,
    //         "hours.Tuesday": tuesday,
    //         "hours.Wednesday": wednesday,
    //         "hours.Thursday": thursday,
    //         "hours.Friday": friday,
    //         "hours.Saturday": saturday
    //     })
    // };

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
                                    value={hours.Sunday}
                                    onChange={e => setHours({ ...hours, Sunday: e.target.value })} />
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
                                    value={hours.Monday}
                                    onChange={e => setHours({ ...hours, Monday: e.target.value })} />
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
                                    value={hours.Tuesday}
                                    onChange={e => setHours({ ...hours, Tuesday: e.target.value })} />
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
                                    value={hours.Wednesday}
                                    onChange={e => setHours({ ...hours, Wednesday: e.target.value })} />
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
                                    value={hours.Thursday}
                                    onChange={e => setHours({ ...hours, Thursday: e.target.value })} />
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
                                    value={hours.Friday}
                                    onChange={e => setHours({ ...hours, Friday: e.target.value })} />
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
                                    value={hours.Saturday}
                                    onChange={e => setHours({ ...hours, Saturday: e.target.value })} />
                            </Col>
                        </Form.Group>
                        {/* <Form.Group as={Row} className="mb-3 align-items-center justify-content-center">
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
                        </Form.Group> */}
                    </Col>
                </Row>
            </Form>
            {/* <Row>
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
            </Row> */}
        </Container>
    );
}

export default EditHours;