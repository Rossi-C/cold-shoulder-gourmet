import {Container, Row, Col} from "react-bootstrap";
import KingTide from './KingTide.png'
import Goose from './SmokingGoose.png'
import Saffron from './Saffron.png'

function Producers() {
    return (
        <Container>
            <Row className={"h-50 p-5 text-center"} style={{fontWeight: 500, letterSpacing: "0.25em"}}>
                <h1 style={{fontSize: 88}}>
                    OUR PARTNERS
                </h1>
                <h3 style={{fontSize: 30}}>
                    Quality Starts Here
                </h3>
            </Row>
            <Row style={{fontSize: 30}}>
                <Col className={'text-center mx-2'}>
                    <img style={{width: 350, height: 350}} src={Goose} alt={''}/>
                    <h1 style={{fontSize: 50}}>
                        SMOKING GOOSE MEATERY
                    </h1>
                    <p style={{fontSize: 25}}>
                        They partner with small, family farms in Indiana and neighboring states raising animals as
                        nature intended: no Gestation Pens, Antibiotic Free, 100% Vegetarian Feed, No Growth Promotants.
                    </p>
                </Col>
                <Col className={'text-center mx-2'}>
                    <img style={{width: 350, height: 350}} src={KingTide} alt={''}/>
                    <h1 style={{fontSize: 50}}>
                        KING TIDE FARMS
                    </h1>
                    <p style={{fontSize: 25}}>
                        King Tide Farms is a hydroponic farm located in Charleston, SC. They are an urban farm that
                        practices organic and sustainable methods in growing lettuce, herbs, edible flowers, leafy
                        greens, wasabi arugula, and more. Each head of lettuce can be traced back to the seed and is
                        harvested and delivered within days.
                    </p>
                </Col>
                <Col className={'text-center mx-2'}>
                    <img style={{width: 350, height: 350}} src={Saffron} alt={''}/>
                    <h1 style={{fontSize: 50}}>
                        SAFFRON BAKERY
                    </h1>
                    <p style={{fontSize: 25}}>
                        Serving Charleston since 1986.
                        Their baked goods are made from scratch in North Charleston. Not only are they delicious, they
                        are chemical and preservative free
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Producers;