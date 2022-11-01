import { Container } from "react-bootstrap";
import './menu.css'
import WinterMenu from "./winter";
import SummerMenu from "./summer";

function Menu({winterMenu, loading}) {
    return (
        <Container>
            {!loading &&
            <>
                {winterMenu ?
                    <WinterMenu />
                    :
                    <SummerMenu />
                }
            </>
            }
        </Container>
    );
}

export default Menu;
