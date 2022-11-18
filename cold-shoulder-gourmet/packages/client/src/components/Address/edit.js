import { Col, Container, Row, Form } from "react-bootstrap";
// import { useState } from 'react';
// import { db } from "../../firebase";
// import { doc, updateDoc } from "firebase/firestore";


function EditAddress({ address, setAddress }) {
    // const [city, setCity] = useState(City);
    // const [state, setState] = useState(State);
    // const [street, setStreet] = useState(Street);
    // const [zip, setZip] = useState(Zip);
    // const businessDocRef = doc(db, 'business', 'info');

    // const initialState = "Submit"
    // const [buttonText, setButtonText] = useState(initialState);

    // const changeButtonText = (text) => {
    //     setButtonText(text);
    //     setTimeout(() => setButtonText(initialState), [1000])
    // };

    // const updateAddress = async () => {
    //     await updateDoc(businessDocRef, {
    //         "address.City": city,
    //         "address.State": state,
    //         "address.Street": street,
    //         "address.Zip": zip,
    //     })
    // };

    return (
        <Container fluid="sm" style={{ fontSize: 20 }}>
            <Form>
                <Row className="justify-content-md-center mb-3">
                    <Col sm={9}>
                        <Form.Group className="mb-3" controlId="street">
                            <Form.Label column sm={3}>
                                Street
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="street"
                                value={address.Street}
                                onChange={e => setAddress({ ...address, Street: e.target.value })} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Col sm={3}>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label column sm={3}>
                                City
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={address.City}
                                onChange={e => setAddress({ ...address, City: e.target.value })} />
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group className="mb-3" controlId="state">
                            <Form.Label column sm={3}>
                                State
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                value={address.State}
                                onChange={e => setAddress({ ...address, State: e.target.value })} />
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group className="mb-3" controlId="zip">
                            <Form.Label column sm={3}>
                                Zip
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="zip"
                                value={address.Zip}
                                onChange={e => setAddress({ ...address, Zip: e.target.value })} />
                        </Form.Group>
                    </Col>
                </Row>
                {/* <Row className="justify-content-md-center my-5">
                    <Col md="auto">
                        <Form.Group>
                            <Button
                                type="button"
                                onClick={async () => {
                                    changeButtonText('Updating...')
                                    updateAddress();
                                }}>
                                {buttonText}
                            </Button>
                        </Form.Group>
                    </Col>
                </Row> */}
            </Form>
            {/* <p>{address.Street}</p>
            <p>{address.City}, {address.State} {address.Zip}</p> */}
        </Container>
    );
}

export default EditAddress;