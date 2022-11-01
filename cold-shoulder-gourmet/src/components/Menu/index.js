import { Row, Container, Button } from "react-bootstrap";
import { useState } from "react";
import './menu.css'
import WinterMenu from "./winter";
import SummerMenu from "./summer";

function Menu() {
    const [winterMenu, setWinterMenu] = useState(false);

    const buttonHandler = () => {
        winterMenu ? setWinterMenu(false) : setWinterMenu(true)
    }

    return (
        <Container>
            <Button
                type="button"
                onClick={buttonHandler}>
                Change Seasonal Menu
            </Button>
            {winterMenu ?
                <WinterMenu />
                :
                <SummerMenu />}
        </Container>
    );
}

export default Menu;