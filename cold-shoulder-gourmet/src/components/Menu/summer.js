import { Row, Container } from "react-bootstrap";
import { useState } from "react";
import './menu.css'
import Gourmet from './Gourmet.jpg'
import { MenuItem } from "./MenuItem";

function SummerMenu() {
    const [gourmet, setGourmet] = useState(false)
    const [classic, setClassic] = useState(false)
    const [vegetarian, setVegetarian] = useState(false)
    const [spicy, setSpicy] = useState(false)
    const [elsey, setElsey] = useState(false)
    const [vegan, setVegan] = useState(false)
    const [simple, setSimple] = useState(false)
    const [notBread, setNotBread] = useState(false)
    const [sweet, setSweet] = useState(false)

    return (
        <Container >
            <Row className={"p-5"}>
                <h1>
                    Offerings
                </h1>
                <p style={{ fontSize: 25 }} className={'my-2'}>
                    A variety of BADASS sandwiches. They come as they are. NO SUBSTITUTIONS. Got Complaints? Kick rocks.
                    We support our local bakers and farmers.
                </p>
            </Row>
            <MenuItem
                name={'SOMETHING GOURMET'}
                description={'(prosciutto, parmesan, truffle cream, truffle honey, greens)'}
                setDisplay={setGourmet}
                display={gourmet}
                image={Gourmet}
                price={11}
            />
            <MenuItem
                name={'SOMETHING CLASSIC'}
                description={'(Toscano salami, prosciutto, sun dried tomatoes, mozzarella, greens, balsamic)'}
                setDisplay={setClassic}
                display={classic}
                image={Gourmet}
                price={10}
            />
            <MenuItem
                name={'SOMETHING VEGETARIAN'}
                description={'(sun dried tomatoes, mozzarella, basil, balsamic, truffle salt)'}
                setDisplay={setVegetarian}
                display={vegetarian}
                image={Gourmet}
                vegetarian={true}
                price={10}
            />
            <MenuItem
                name={'SOMETHING SPICY'}
                description={'(nduja, Toscano & Piccante salami, greens, parmesan, truffle cream, truffle hot sauce)'}
                setDisplay={setSpicy}
                display={spicy}
                image={Gourmet}
                spicy={true}
                price={12}
            />
            <MenuItem
                name={'SOMETHING ELSE'}
                description={'(mortadella, parmesan, greens, truffle cream)'}
                setDisplay={setElsey}
                display={elsey}
                image={Gourmet}
                price={10}
            />
            <MenuItem
                name={'SOMETHING VEGAN'}
                description={'(grilled vegetables, greens, truffle hot sauce, truffle salt)'}
                setDisplay={setVegan}
                display={vegan}
                image={Gourmet}
                vegan={true}
                price={10}
            />
            <MenuItem
                name={'SOMETHING SIMPLE'}
                description={'(mortadella)'}
                setDisplay={setSimple}
                display={simple}
                image={Gourmet}
                price={5}
            />
            <MenuItem
                name={'SOMETHING NOT ON BREAD'}
                description={'(greens, veg or meat, cheese)'}
                setDisplay={setNotBread}
                display={notBread}
                image={Gourmet}
                price={12}
            />
            <MenuItem
                name={'SOMETHING SWEET'}
                description={'(Nutella, powdered sugar)'}
                setDisplay={setSweet}
                display={sweet}
                image={Gourmet}
                price={5}
            />
        </Container>
    );
}

export default SummerMenu;