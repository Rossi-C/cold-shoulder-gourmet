import {
    BrowserRouter, Route,
    Routes,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import { Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import { AiFillInstagram } from "react-icons/ai";
import { getBusinessInfo, getIG } from "./api";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Admin from "./components/Admin";
import Producers from "./components/Producers";
import MeetTheTeam from "./components/MeetTheTeam";
import Services from "./components/Services";
import Policies from "./components/Policies";


function App() {
    const [soldOut, setSoldOut] = useState(false);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState({
        "Zip": 29407,
        "State": "SC",
        "City": "Charleston",
        "Street": "1684 Old Towne Rd"
    });
    const [hours, setHours] = useState({
        "Friday": "8:00 AM - 4:00 PM",
        "Tuesday": "Closed",
        "Thursday": "8:00 AM - 4:00 PM",
        "Saturday": "8:00 AM - 4:00 PM",
        "Monday": "8:00 AM - 4:00 PM",
        "Sunday": "8:00 AM - 4:00 PM",
        "Wednesday": "Closed"
    });
    const [winterMenu, setWinterMenu] = useState(false);
    const [loading, setLoading] = useState(false);
    const [igKey, setIgKey] = useState(null);

    const updateHomeState = async () => {
        setIgKey(await getIG())
        setLoading(true);
        const { soldOut, address, hours, phone, winterMenu } = await getBusinessInfo() // returns {souldOut: boolean, address:Object, hours:Object}
        if (soldOut || address || hours) {
            setSoldOut(soldOut);
            setAddress(address);
            setHours(hours);
            setPhone(phone)
            setWinterMenu(winterMenu)
            setLoading(false);
        }
    }
    useEffect(() => {
        updateHomeState();
    }, [])
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Allerta Stencil', "Cedarville Cursive", "Nanum Gothic", "Heebo", "Stardos Stencil", "Oswald"]
            }
        });
    }, []);

    return (
        <Container className="bg-black px-0 py-2 m-0" style={{ minHeight: "100vh", fontFamily: "Oswald" }} fluid>
            <div className="text-light">

                <BrowserRouter>
                    {
                        loading &&
                        <Row className={"h-50 p-5"}>
                            <Spinner className="m-auto" animation="border" role="status" variant={"light"}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </Row>
                    }
                    <Navigation />
                    <Routes>
                        <Route
                            path='/'
                            element={<Home soldOut={soldOut} address={address} hours={hours} phone={phone} igKey={igKey} />}
                        />
                        <Route
                            path='aboutUs'
                            element={<AboutUs />}
                        />
                        <Route
                            path='menu'
                            element={<Menu winterMenu={winterMenu} loading={loading} />}
                        />
                        <Route
                            path='admin'
                            element={<Admin soldOut={soldOut} address={address} hours={hours} phone={phone} winterMenu={winterMenu} loading={loading} />}
                        />
                        <Route
                            path='producers'
                            element={<Producers />}
                        />
                        <Route
                            path='team'
                            element={<MeetTheTeam />}
                        />
                        <Route
                            path='services'
                            element={<Services />}
                        />
                        <Route
                            path='policies'
                            element={<Policies />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
            <div>
                <hr className={'text-light'} />
                <div className={'m-auto text-center text-light'}>
                    <h1>COLD SHOULDER GOURMET</h1>
                    <p>craigedmunds@coldshouldergourmet.com</p>
                    <p>+1 (843) 642 4680</p>
                    <p>1684 Old Towne Rd Charleston, SC</p>
                    <p>
                        <a className={"link-light"} href="https://www.instagram.com/coldshouldergourmet/">
                            <AiFillInstagram style={{ fontSize: 30 }} />
                        </a>
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default App;
