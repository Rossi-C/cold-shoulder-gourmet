import {useState, useEffect} from 'react';
import {getBusinessInfo} from "../../api";
import SoldOut from "../SoldOut";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import Info from "../Info";
import Gallery1 from '../Gallery/Gallery1.jpg'
import Gallery2 from '../Gallery/Gallery2.jpg'
import ImageBlock from "../ImageBlock";
import {GiPig, GiCow} from "react-icons/gi";
import AboutUs from "../AboutUs";

function Home() {
    const [soldOut, setSoldOut] = useState(false);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [hours, setHours] = useState(null);
    const [loading, setLoading] = useState(false);

    const updateHomeState = async () => {
        setLoading(true);
        const {soldOut, address, hours, phone} = await getBusinessInfo() // returns {souldOut: boolean, address:Object, hours:Object}
        if (soldOut || address || hours) {
            setSoldOut(soldOut);
            setAddress(address);
            setHours(hours);
            setPhone(phone)
            setLoading(false);
        }
    }
    useEffect(() => {
        updateHomeState();
    }, [])

    return (
        <Container fluid>
            {
                loading &&
                <Row className={"h-50 p-5"}>
                    <Spinner className="m-auto" animation="border" role="status" variant={"light"}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            }

            <SoldOut soldOut={soldOut}/>
            <ImageBlock
                image={Gallery1}
                icon={() => <GiPig style={{fontSize: 50}}/>}
                smallCaption={"Focaccia sandwich shop slinging the classics with a punk twist.  Sandwiches, espresso, and gourmet grocery."}
                caption={"Limited production."}
                strength={-750}
            />

            <Row className={"h-50 py-1 px-5"}>
                <Col>
                    <AboutUs />
                </Col>
            </Row>

            <ImageBlock
                image={Gallery2}
                icon={() => <GiCow style={{fontSize: 50}}/>}
                smallCaption={""}
                caption={"Don't be mad... Be Early."}
                strength={-1000}
            />

                <Info
                    address={address}
                    hours={hours}
                    addressSize={25}
                    hoursSize={20}
                    phone={phone}
                />
        </Container>
    );
}

export default Home;

