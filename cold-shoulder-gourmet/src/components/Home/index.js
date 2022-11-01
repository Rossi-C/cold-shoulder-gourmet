import SoldOut from "../SoldOut";
import {Col, Container, Row } from "react-bootstrap";
import Info from "../Info";
import BckGrnd from '../SiteHeaderImageBlock/main_backgorund.png'
import SiteHeaderImageBlock from "../SiteHeaderImageBlock";
import InstaGrid from "../InstaGrid";

function Home({soldOut, address, hours, phone, loading}) {
    return (
        <Container fluid>
            {
                !loading && <>
                    <SoldOut soldOut={soldOut}/>
                    <SiteHeaderImageBlock
                        image={BckGrnd}
                        strength={-400}
                        address={address}
                    />

                    <Row className={"h-50 py-1 px-5"}>
                        <Col>
                            <Container >
                                <Row className={"h-50 p-5 text-center"} style={{fontWeight: 500, letterSpacing: "0.25em"}}>
                                    <h1 style={{fontSize: 88}}>
                                        ABOUT THESE BADASS SANDWICHES
                                    </h1>
                                </Row>
                                <Row style={{fontSize: 30}}>
                                    <p>
                                        At Cold Shoulder Gourmet, we think good food and quality ingredients should be available to everyone
                                        at prices that don’t cost an arm, leg or spleen.
                                    </p>
                                    <p>
                                        So with the help of some amazing local farmers, bakers and candle stick makers, we are able to offer
                                        you amazing fresh focaccia sandwiches with rich, decadent spreads and hand sliced cured meats,
                                        incredible locally grown greens, and delicious cheeses.
                                    </p>
                                    <p>
                                        Don't let our light humor lull you into a false sense of security, we know what we are doing and we
                                        are here to blow your taste buds away!
                                    </p>
                                    <p>
                                        Opening in Charleston, SC - we’ve seen plenty of changes in the way people approach food in this
                                        city, and we couldn’t be more excited.
                                    </p>
                                    <p>
                                        Come and check us out in person/order online and discover something deliciously badass today.
                                    </p>
                                </Row>
                            </Container>
                        </Col>
                        < hr />
                        {/*<InstaGrid />*/}
                        < hr />
                    </Row>

                    <Info
                        address={address}
                        hours={hours}
                        addressSize={25}
                        hoursSize={20}
                        phone={phone}
                        middleComponent={() => null }
                    />
                </>
            }

        </Container>
    );
}

export default Home;

