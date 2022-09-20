import {Container, Row} from "react-bootstrap";
import {GiPig} from "react-icons/gi";

//TODO  Get about us from craig
function AboutUs() {
    return (
        <Container fluid>
            <Row className={"h-50 p-5 text-center"} style={{fontWeight: 500, letterSpacing: "0.25em"}}>
                <h1 style={{}}>
                    About Cold Shoulder Gourmet Of Charleston, SC
                </h1>
            </Row>

                <p>
                    Before opening Cold Shoulder, Edmunds worked with Patty Floersheimer and Trudi Wagner at both goat.sheep.cow locations for several years. While there, “honed” the skills he uses at Cold Shoulder, slicing cured meats fresh with a deli slicer, selecting cheeses that pair well with the meats and making homemade truffle cream. Meats are sourced from Smoking Goose Meatery in Indianapolis, In.; truffles from The Truffleist in New York City; freshly baked focaccia bread from Charleston’s Saffron bakery; cheeses imported from Italy; and local greens from new producer King Tide Farm.
                </p>
            </Row>
            <Row style={{fontSize: 75}}>
                <GiPig style={{fontSize: 120}} className={'text-center'}/>
            </Row>
        </Container>
    );
}

export default AboutUs;