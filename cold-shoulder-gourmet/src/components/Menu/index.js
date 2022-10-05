import {Row, Container} from "react-bootstrap";
import {useState} from "react";
import './menu.css'
import Gourmet from './Gourmet.jpg'
import {MenuItem} from "./MenuItem";

function Menu() {
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
        <Container>
            <Row className={"p-5"}>
                <h1>
                    S O M E T H I N G...
                </h1>
            </Row>
            <MenuItem
                name={'GOURMET'}
                description={'(prosciutto, parmesan, truffle cream, truffle honey, greens)'}
                setDisplay={setGourmet}
                display={gourmet}
                image={Gourmet}
            />
            <MenuItem
                name={'CLASSIC'}
                description={'(Toscano salami, prosciutto, sun dried tomatoes, mozzarella, greens, balsamic)'}
                setDisplay={setClassic}
                display={classic}
                image={Gourmet}
            />
            <MenuItem
                name={'VEGETARIAN'}
                description={'(sun dried tomatoes, mozzarella, basil, balsamic, truffle salt)'}
                setDisplay={setVegetarian}
                display={vegetarian}
                image={Gourmet}
            />
            <MenuItem
                name={'SPICY'}
                description={'(nduja, Toscano & Piccante salami, greens, parmesan, truffle cream, truffle hot sauce)'}
                setDisplay={setSpicy}
                display={spicy}
                image={Gourmet}
            />
            <MenuItem
                name={'ELSE'}
                description={'(mortadella, parmesan, greens, truffle cream)'}
                setDisplay={setElsey}
                display={elsey}
                image={Gourmet}
            />
            <MenuItem
                name={'VEGAN'}
                description={'(grilled vegetables, greens, truffle hot sauce, truffle salt)'}
                setDisplay={setVegan}
                display={vegan}
                image={Gourmet}
            />
            <MenuItem
                name={'SIMPLE'}
                description={'(mortadella)'}
                setDisplay={setSimple}
                display={simple}
                image={Gourmet}
            />
            <MenuItem
                name={'NOT BREAD'}
                description={'(greens, veg or meat, cheese)'}
                setDisplay={setNotBread}
                display={notBread}
                image={Gourmet}
            />
            <MenuItem
                name={'SWEET'}
                description={'(Nutella, powdered sugar)'}
                setDisplay={setSweet}
                display={sweet}
                image={Gourmet}
            />
        </Container>
    ) ;
}

export default Menu;