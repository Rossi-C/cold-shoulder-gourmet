import { getAdmins } from "../../api";
import { useState, useEffect } from 'react';
import { Row, Spinner, Col, Button, Container, Form } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { db, app } from "../../firebase";
import EditHours from "../Hours/edit";
import EditAddress from "../Address/edit";
import Login from "../Login";
import EditMenu from "../Menu/edit";
import { onAuthStateChanged, getAuth } from "firebase/auth";


function Admin({ soldOut, address, hours, winterMenu, loading }) {
    const [localSoldOut, setSoldOut] = useState('Out of Stock');
    const [localAddress, setAddress] = useState(null);
    const [localHours, setHours] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [localWinterMenu, setWinterMenu] = useState('Summer');
    const [isAdmin, setIsAdmin] = useState(false);

    const initialState = "Submit"
    const [buttonText, setButtonText] = useState(initialState);

    const checkForUser = async (email) => {
        setIsLoggedIn(true)
        await determineIfAdmin(email)
    }

    const initiateAuth = async () => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            // console.log('on auth state changed', user)
            if (user) {
                checkForUser(user.email)
            }
        });
    }

    const determineIfAdmin = async (email) => {
        const admins = await getAdmins()
        if (admins && email) {
            if (admins[email]) {
                setIsAdmin(true)
            }
        } else {
            setIsAdmin(false)
            setIsLoggedIn(false)
        }
    }

    const gatherData = async () => {
        if (soldOut || address || hours || winterMenu) {
            setSoldOut(soldOut ? 'Out of Stock' : 'In Stock');
            setAddress(address);
            setHours(hours);
            setWinterMenu(winterMenu ? 'Winter' : 'Summer');
        }
    }

    useEffect(() => {
        gatherData()
        initiateAuth();
        console.log(typeof localSoldOut)
        // eslint-disable-next-line
    }, [loading])


    const updateBusinessInfo = async () => {
        const businessDocRef = doc(db, 'business', 'info')
        let isSoldOut = localSoldOut === 'Out of Stock' ? true : false;
        let isWinterMenu = localWinterMenu === 'Winter' ? true : false;
        await updateDoc(businessDocRef, {
            soldOut: isSoldOut,
            hours: localHours,
            address: localAddress,
            winterMenu: isWinterMenu,
        })
    };

    const changeButtonText = (text) => {
        setButtonText(text);
        setTimeout(() => setButtonText(initialState), [1000])
    };

    return (
        isLoggedIn ?
            isAdmin ?
                <Container fluid style={{ fontSize: 20 }}>
                    <Form className="my-5">
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <Form.Group controlID="stock">
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Select value={localSoldOut} onChange={e => setSoldOut(e.target.value)}>
                                        <option value={'Out of Stock'}>Out of Stock</option>
                                        <option value={'In Stock'}>In Stock</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            {localWinterMenu && <EditMenu winterMenu={localWinterMenu} setWinterMenu={setWinterMenu} />}
                        </Row>
                    </Form>
                    <Row>
                    </Row>
                    <Row className="mt-5">
                        {hours && < EditHours hours={localHours} setHours={setHours} />}
                    </Row>
                    <Row className="mt-5">
                        {address && < EditAddress address={localAddress} setAddress={setAddress} />}
                    </Row>
                    {
                        loading &&
                        <Row className={"h-50 p-5"}>
                            <Spinner className="m-auto" animation="border" role="status" variant={"light"}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </Row>
                    }
                    <Row className="my-5">
                        <Button
                            style={{ color: 'white', borderWidth: 1, borderColor: 'white' }}
                            className="m-auto"
                            as={Col}
                            sm={2}
                            type="button"
                            variant={"primary"}
                            onClick={async () => {
                                changeButtonText('Updating...');
                                await updateBusinessInfo();
                            }}>
                            {buttonText}
                        </Button>
                    </Row>
                </Container> :
                <h1 className={"text-center"}>You do not have access to this page!!!!</h1>
            :
            <Login determineIfAdmin={determineIfAdmin} />
    )
}

export default Admin;
