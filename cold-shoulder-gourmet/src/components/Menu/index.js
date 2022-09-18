import {Row, Container} from "react-bootstrap";


function Menu() {

    return (
        <Container >
            <Row className={"p-5"}>
                <h1>
                    S O M E T H I N G...
                </h1>
            </Row>
            <Row className="m-2 border border-light ">
                <h1>GOURMET</h1>
                <h4>(prosciuitto, parmesan, truffle cream, truffle honey, greens)</h4>
            </Row>
            <Row className="m-2 border border-light">
                <h1>CLASSIC</h1>
                <h4>(Toscano salami, prosciutto, sun dried tomatoes, mozzarella, greens, balsamic)</h4>
            </Row>
            <Row className="m-2 border border-light">
                <h1>VEGETARIAN</h1>
                <h4>(sun dried tomatoes, mozzarella, basil, balsamic, truffle salt)</h4>
            </Row>
            <Row className="m-2 border border-light">
                <h1>SPICY</h1>
                <h4>(nduja, Toscano & Piccante salami, greens, parmesan, truffle cream, truffle hot sauce)</h4>
            </Row>
            <Row className="m-2 border border-light">
                <h1>ELSE</h1>
                <h4>(mortadella, parmesan, greens, truffle cream)</h4>
            </Row>
            <Row className="m-2 border border-light">
                <h1>VEGAN</h1>
                <h4>(grilled vegetables, greens, truffle hot sauce, truffle salt)</h4>
            </Row>
            <Row className="m-2 border border-light">
                <h1>SIMPLE</h1>
                <h4>(mortadella)</h4>
            </Row>
            <Row className="m-2 border border-light">
                <h1>NOT BREAD</h1>
                <h4>(greens, veg or meat, cheese)</h4>
            </Row>
            <Row className="m-2 border border-light">
                <h1>SWEET</h1>
                <h4>(Nutella, powdered sugar)</h4>
            </Row>
        </Container>
    );
}

export default Menu;