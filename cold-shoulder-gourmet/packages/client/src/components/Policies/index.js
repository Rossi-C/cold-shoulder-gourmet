import {Container, Row} from "react-bootstrap";

function Policies() {
    return (
        <Container>
            <Row className={"h-50 p-5"} style={{fontWeight: 500, letterSpacing: "0.25em"}}>
                <h1 style={{fontSize: 88}} className={'my-4'}>
                    POLICIES
                </h1>
                <h3 style={{fontSize: 30}}>
                    At Cold Shoulder Gourmet Sandwiches, our aim is to make your experience with us as enjoyable as
                    possible. That’s why we work hard to make sure our store policies are fair, clear and transparent.
                    You can find a full outline of our policies below. If you can’t find the information you’re looking
                    for, please don’t hesitate to get in touch. We look forward to seeing you at Cold Shoulder Gourmet
                    Sandwiches.
                </h3>
                <div className={'my-5'}>
                    <p style={{fontSize: 25}}> - WE MAKE A LIMITED AMOUNT OF SANDWICHES. </p>
                    <p style={{fontSize: 25}}> - ONCE THEY GONE, WELP THEY GONE.</p>
                    <p style={{fontSize: 25}}> - NO SUBSTITUTIONS.</p>
                    <p style={{fontSize: 25}}> - YES FOCACCIA IS BREAD. YES IT HAS GLUTEN. NO WE CAN'T TAKE IT OUT.</p>
                    <p style={{fontSize: 25}}> - JUST ENJOY THE OFFERINGS. LIFE IS SHORT AND BEAUTIFUL.</p>
                </div>
            </Row>
        </Container>
    );
}

export default Policies;