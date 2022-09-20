import {Col} from "react-bootstrap";
import {AiFillInstagram, AiOutlineGoogle} from "react-icons/ai";
import {FaYelp} from "react-icons/fa";

// TODO RENAME
function Address({ address: { street, city, state, zip }, phone }) {
    return (
        <div className="m-auto">
            <Col>
                <a className={"link-light"} >
                    <p>{street}</p>
                    <p>{city}, {state} {zip}</p>
                    <p>{phone}</p>
                </a>

                <a className={"link-light"} href="https://www.instagram.com/coldshouldergourmet/" >
                    <AiFillInstagram style={{fontSize: 30}}/>
                </a>
                <a className={"link-light"} href="https://www.yelp.com/biz/cold-shoulder-gourmet-charleston" >
                    <FaYelp style={{fontSize: 30}}/>
                </a>
                <a className={"link-light"} href="https://goo.gl/maps/LtASenwskeKSNuBV9" >
                    <AiOutlineGoogle style={{fontSize: 30}}/>
                </a>
            </Col>



        </div>
    );
}

export default Address;