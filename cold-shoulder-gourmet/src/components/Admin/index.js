import { getBusinessInfo } from "../../api";
import { useState, useEffect } from 'react';
import { Row, Spinner, Col, Button, Container } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import EditHours from "../Hours/edit";

function Admin() {
    const [soldOut, setSoldOut] = useState(false);
    const [address, setAddress] = useState(null);
    const [hours, setHours] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        getBusinessInfo()
            .then(({ soldOut, address, hours }) => {
                if (soldOut || address || hours) {
                    setSoldOut(soldOut);
                    setAddress(address);
                    setHours(hours);
                    setLoading(false);
                }
            })
    }, [])

    const changeButton = async (bool) => {
        const businessDocRef = doc(db, 'business', 'info')
        await updateDoc(businessDocRef, {
            soldOut: bool
        });
        return setSoldOut(bool)
    }

    return (
        <Container fluid>
            <Row className={"justify-content-md-center my-3"}>
                <Col md="auto">
                    {soldOut
                        ? <Button onClick={() => changeButton(false)}>We Stocked Up</Button>
                        : <Button onClick={() => changeButton(true)}>We Sold Out</Button>}
                </Col>
            </Row>
            <Row className="mt-5">
                {hours && < EditHours hours={hours} />}
            </Row>
            {
                loading &&
                <Row className={"h-50 p-5"}>
                    <Spinner className="m-auto" animation="border" role="status" variant={"light"}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            }
        </Container>
    )
}

export default Admin;