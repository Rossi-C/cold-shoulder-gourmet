import {Container, Col} from "react-bootstrap";
import Craig from './Craig.jpg'

//TODO  Get about us from craig
function AboutUs() {
    return (
        <Container>
            <Col className={'justify-content-center text-center'}>
                <img src={Craig} alt={''} style={{width: "50%", height:"50%"}}/>
            </Col>
            <Col>
                <h1  style={{fontSize: 50}}>CRAIG EDMUNDS</h1>
                <h3 style={{fontSize: 30}}>Owner/Chef</h3>
                <p style={{fontSize: 22}}>
                    Birth, Nairobi Hospital Kenya, 1992. Ammas Pickle. Curries with Ron. Spicy Chili's. White Bread &
                    Margarine. Posho & Sukuma. Kilifi. F.R.I.E.N.D.S. Punk. Hip-Hop. Rock. 1984 Mercedes Turbo Wagon,
                    RED. Lewa. Carnivore. Talisman. Rusty Nail. Europe. Ice Land.Lived in Tent. Jet Plane. Charleston
                    South Carolina. First Tattoo. Skateboards. Love. Photography. Art School. Bus.
                    First Job, Second Job, Multiple Jobs. Art Store Clerk. Graduate. Became US Citizen. Curate Two
                    Galleries. Jade. Make Art. Teach Art. Kitchen Confidential. PIVOT. Kitchen Jobs. Early Mornings.
                    Beach. SoulFight. Negroni's. Plant Roots. COVID. PIVOT. Negorni's. Cheese Monger. Solvitur
                    ambulando. Est. Cold Shoulder Gourmet 2022. Right Here. Right Now.
                </p>
            </Col>
        </Container>
    );
}

export default AboutUs;