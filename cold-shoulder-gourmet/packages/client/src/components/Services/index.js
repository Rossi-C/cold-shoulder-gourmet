import {Container, Row, Col} from "react-bootstrap";
import KingTide from './Gallery1.jpg'
import Goose from './Gallery6.jpg'
import Saffron from './Gallery2.jpg'

function Services() {
    return (
        <Container>
            <Row className={"h-50 p-5 text-center my-2"} style={{fontWeight: 500, letterSpacing: "0.25em"}}>
                <h1 style={{fontSize: 65}} className={'my-2'}>
                    Services
                </h1>
                <h3 style={{fontSize: 30}} className={'my-2'}>
                    Quality Starts Here
                </h3>
                <h5 style={{fontSize: 25}} className={'my-2'}>
                    At Cold Shoulder Gourmet Sandwiches, we work hard to keep our customers satisfied, which is why
                    we’ve added a host of services that our clients have been asking for. Find out more about our extra
                    special services below and visit our Charleston location today.
                </h5>
            </Row>
            <Row style={{fontSize: 30}}>
                <Col className={'text-center mx-2 bg-dark my-2 p-4'}>
                    <img style={{width: 350, height: 350}} src={Goose} alt={''}/>
                    <h1 style={{fontSize: 50}}>
                        Picnic Packages
                    </h1>
                    <h1 style={{fontSize: 30}} className={'my-4'}>
                        Extra Value
                    </h1>
                    <p style={{fontSize: 25}} className={'mt-4'}>
                        Let us curate your perfect picnic. Sandwiches, drinks, and snacks to share.
                    </p>
                </Col>
                <Col className={'text-center mx-2 bg-dark my-2 p-4'}>
                    <img style={{width: 350, height: 350}} src={KingTide} alt={''}/>
                    <h1 style={{fontSize: 50}}>
                        PRE-ORDER AND CATERING
                    </h1>
                    <h1 style={{fontSize: 30}} className={'my-4'}>
                        Above and Beyond
                    </h1>
                    <p style={{fontSize: 25}}>
                        Grab lunch for the crew, order 10 for yourself - we won't judge! We sell out quickly - make sure
                        you get yours by emailing your order in ahead of time.*
                    </p>
                    <p style={{fontSize: 18}} className={'mt-5'}>
                        *Minimum notice 24hrs, order not guaranteed until email confirmation is received.
                    </p>
                </Col>
                <Col className={'text-center mx-2 bg-dark my-2 p-4'}>
                    <img style={{width: 350, height: 350}} src={Saffron} alt={''}/>
                    <h1 style={{fontSize: 50}}>
                        ADDITIONAL OFFERINGS
                    </h1>
                    <h1 style={{fontSize: 30}} className={'my-4'}>
                        Above and Beyond
                    </h1>
                    <p style={{fontSize: 25}}>
                        Striving for quality doesn't stop at our sandwiches. We love to create displays, boards, and
                        more to accommodate all of your events - from a casual get together to the most sophisticated
                        affair.
                    </p>
                </Col>
            </Row>
            <Row  className={"h-50 p-5 text-center mx-auto"}  style={{overflowWrap: "break-word"}} >
                <h4>
                    Not seeing what you're looking for? Shoot an email to
                    craigedmunds@coldshouldergourmet.com
                    and we'll see what we can do.
                </h4>

            </Row>
        </Container>
    );
}

export default Services;