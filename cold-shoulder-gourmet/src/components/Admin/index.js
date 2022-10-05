import {getAdmins, getBusinessInfo} from "../../api";
import {useState, useEffect} from 'react';
import {Row, Spinner, Col, Button, Container, Form} from "react-bootstrap";
import {doc, updateDoc} from "firebase/firestore";
import {auth, db} from "../../firebase";
import EditHours from "../Hours/edit";
import EditAddress from "../Address/edit";
import Login from "../Login";
import { onAuthStateChanged } from "firebase/auth";


function Admin() {
    const [soldOut, setSoldOut] = useState(false);
    const [address, setAddress] = useState(null);
    const [hours, setHours] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [admins, setAdmins] = useState(null);

    const initialState = "Submit"
    const [buttonText, setButtonText] = useState(initialState);

    const checkForUser = async (user) => {
        if (user) {
            console.log('checkForUser user: ', user);
            setIsLoggedIn(true)
            await determineIfAdmin(user.email)
        } else {
            console.log('NO USER FOUND');
            await determineIfAdmin(null)
        }
    }

    const initiateAuth = async () => {
        onAuthStateChanged(auth, (user) => {
            console.log('onAuthStateChanged user: ', user);
            checkForUser(user)
        });
        const user = auth.currentUser;
        await checkForUser(user);
    }

    const determineIfAdmin = async (email) => {
        if(admins && email){
            if(admins[email]){
                setIsAdmin(true)
            }
        } else {
            setIsAdmin(false)
        }
    }

    const gatherData = async () => {
        const {soldOut, address, hours} = await getBusinessInfo()
        if (soldOut || address || hours) {
            setSoldOut(soldOut);
            setAddress(address);
            setHours(hours);
            setLoading(false);
        }
        setAdmins(await getAdmins());
    }

    useEffect(() => {
        setLoading(true);
        gatherData();
        initiateAuth();
    }, [])

    const updateBusinessInfo = async () => {
        const businessDocRef = doc(db, 'business', 'info')
        await updateDoc(businessDocRef, {
            soldOut,
            hours,
            address,
        })
    };

    const changeButtonText = (text) => {
        setButtonText(text);
        setTimeout(() => setButtonText(initialState), [1000])
    };

    return (
    isLoggedIn ?
            isAdmin ?
                <Container fluid style={{fontSize: 20}}>
                <Form className="my-5">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Form.Group controlID="stock">
                                <Form.Label>Stock</Form.Label>
                                <Form.Select value={soldOut} onChange={e => setSoldOut(e.target.value)}>
                                    <option value={false}>In Stock</option>
                                    <option value={true}>Out of Stock</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Row>
                </Row>
                <Row className="mt-5">
                    {hours && < EditHours hours={hours} setHours={setHours}/>}
                </Row>
                <Row className="mt-5">
                    {address && < EditAddress address={address} setAddress={setAddress}/>}
                </Row>
                {
                    loading &&
                    <Row className={"h-50 p-5"}>
                        <Spinner className="m-auto" animation="border" role="status" variant={"light"}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Row>
                }
                <Row className="justify-center-md-content my-5">
                    <Button
                        style={{color: 'white', borderWidth: 1, borderColor: 'white'}}
                        className="mx-auto"
                        as={Col}
                        sm={2}
                        type="button"
                        variant={"primary"}
                        onClick={async () => {
                            changeButtonText('Updating...')
                            await updateBusinessInfo();
                        }}>
                        {buttonText}
                    </Button>
                </Row>
            </Container> :
                <h1 className={"text-center"}>You do not have access to this page!!!!</h1>
        :
        <Login  determineIfAdmin={determineIfAdmin}/>
    )
}

export default Admin;
