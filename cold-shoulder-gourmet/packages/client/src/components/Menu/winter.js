import { Row, Container } from "react-bootstrap";
import { useState } from "react";
import './menu.css'
import Gourmet from './Gourmet.jpg'
import { MenuItem } from "./MenuItem";

function WinterMenu() {
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
                name={'B-FAST'}
                description={'(Applewood Smoked Bacon, Truffled Everything Spread, Rotating Ham, Shaved Parmesan, Bottarga)'}
                price={13.50}
            />
            <MenuItem
                name={'FALL/WINTER CLASSIC'}
                description={'(Cotto Salami, Sun-Dried Tomatoes, Hydroponic Greens, Truffle Mustard, Shaved Parmesan)'}
                price={13.50}
            />
            <MenuItem
                name={'GOURMET'}
                description={'(Culatello di Dorman, Black Truffle Cream, Hydroponic Greens, Shaved Parmesan, Truffle Honey)'}
                price={13.50}
            />
            <MenuItem
                name={'SPICY 2.0'}
                description={"(Capocollo di Dorman, 'Nduja, Black Truffle Cream, Hydroponic Greens, Shaved Parmesan, Truffled Hot Sauce)"}
                price={13.50}
                spicy={true}
            />
            <MenuItem
                name={'ROTATING BEEF'}
                description={'(Cold Smoked Wagyu Beef Bologna)'}
                price={13.50}
            />
            <MenuItem
                name={`SEASONAL PÂTÉ`}
                description={'(Pig And Fig Pâté, Truffled Reduced Balsamic, Mustard Fills, Shaved Parmesan)'}
                price={13.50}
            />
            <MenuItem
                name={'ROTATING SEASONAL'}
                description={'(Assorted Seasonal Vegetables)'}
                price={13.50}
                vegan={true}
                vegetarian={true}
            />
            <MenuItem
                name={'SWEET'}
                description={'(Nutella, Powdered Sugar)'}
                price={5.00}
            />
            <MenuItem
                name={'MASH UP'}
                description={'Random Deli Mix'}
                price={5.00}
            />
        </Container>
    );
}

export default WinterMenu;