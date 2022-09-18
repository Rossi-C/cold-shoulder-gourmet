import { useState, useEffect } from 'react';
import {getBusinessInfo} from "../../api";
import SoldOut from "../SoldOut";
import Address from "../Address";
import Hours from "../Hours";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import Gallery from "../Gallery";


function Home() {
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
    return (
        <Container fluid>
            <Gallery />
            {
                loading &&
                <Row className={"h-50 p-5"}>
                    <Spinner className="m-auto" animation="border" role="status" variant={"light"}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            }
            <Row className={"h-50 p-5"}>
                {soldOut && <SoldOut soldOut={soldOut} />}
            </Row>
            <Row  className={"h-50"}>
                <Col className={"m-auto p-5"} lg={8}>
                    {address && < Address address={address} />}
                </Col>
                <Col className={"m-auto" }  lg={4}>
                    {hours && < Hours hours={hours} />}
                </Col>
            </Row>
        </Container>
    );
}

export default Home;

