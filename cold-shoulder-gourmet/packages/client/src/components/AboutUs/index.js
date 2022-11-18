import {Col, Container, Row} from "react-bootstrap";
import background from '../SiteHeaderImageBlock/main_backgorund.png'
import {Parallax} from "react-parallax";
//TODO  Get about us from craig
function AboutUs() {
    return (
        <Container fluid>
            <Parallax className={"text-center py-4"} bgImageStyle={{opacity: 0.5}} bgImage={background} bgImageAlt="the cat" strength={0}>
                <Container className={'bg-dark my-2'}>
                    <Col>
                        <Row className={"h-50 p-5 text-center"} style={{fontWeight: 500, letterSpacing: "0.25em"}}>
                            <h1 style={{fontSize: 88}}>
                                ABOUT
                            </h1>
                        </Row>
                        <Row style={{fontSize: 30}}>
                            <p className={'my-2'}>
                                We started Cold Shoulder Gourmet Sandwiches in 2020 after realizing it wasn’t always easy to get a
                                high-quality, fresh, and wholesome sandwich or lunch at a reasonable price.
                            </p>
                            <p className={'my-2'}>IT WAS BULLSHIZZ.</p>
                            <p className={'my-2'}>
                                SO...We've changed that. We’ve worked hard to build strong relationships with our incredible vendors
                                and the amazing customers around us. Come and explore our busy Sandwich Shop today and discover the
                                true meaning of an ALT-Charleston meal. #WELOVELOCALS
                            </p>
                            <p className={'my-2'}>
                                At Cold Shoulder Gourmet, We think good food and quality ingredients should be available to everyone
                                at prices that don’t cost an arm, leg or spleen.
                            </p>
                            <p className={'my-2'}>
                                So with the help of some amazing local farmers, bakers and candle stick makers we are able to offer
                                you amazing Fresh Focaccia Sandwiches with rich decadent spreads, Hand Sliced gourmet cured meats &
                                cheeses.
                            </p>
                            <p className={'my-2'}>
                                Don't let our light humor lull you into a false sense of security, We know what we are doing and we
                                are here to blow your taste buds away!
                            </p>
                            <p className={'my-2'}>
                                We started operating in Charleston, SC. Since then, we’ve seen plenty of changes in the way people
                                approach food in this city - and we couldn’t be more excited. Come and check us out in person/order
                                online and discover something deliciously badass today.
                            </p>
                        </Row>
                    </Col>
                </Container>
            </Parallax>
        </Container>
    );
}

export default AboutUs;