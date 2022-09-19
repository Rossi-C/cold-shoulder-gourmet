import {Col, Row} from "react-bootstrap";
import Address from "../Address";
import Hours from "../Hours";


function Info({address, hours, addressSize, hoursSize, middleComponent: Middle, phone}) {
    return <Row className={"h-50 px-5"}>
        <Col className={`my-auto ${!Middle ? 'mx-auto' : ''}`} style={{fontSize: addressSize}}
             lg={Middle ? 3: 8}
        >
            {/*// TODO rename address*/}
            {address && < Address address={address} phone={phone}/>}
        </Col>
        {
            Middle &&
            <Col className={`m-auto`} lg={4} style={{fontSize: hoursSize, letterSpacing: "0.15em"}} >
                <Middle />
            </Col>
        }
        <Col className={`my-auto ${!Middle ? 'mx-auto' : ''}`} style={{fontSize: hoursSize}}
             lg={Middle ? 3: 4}
        >
            {hours && < Hours hours={hours}/>}
        </Col>
    </Row>;
}

export default Info;