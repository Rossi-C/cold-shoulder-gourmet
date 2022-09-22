import {Button, Col, Row} from "react-bootstrap";
import {BsChevronDown, BsChevronRight} from "react-icons/bs";
import Image from "react-bootstrap/Image";

export function MenuItem({setDisplay, display, image, description, name}) {
    return (
        <Row className="m-2 p-2 border border-light ">
            <h1>{name}</h1>
            <Row className={'mb-2'}>
                <Col lg={10}>
                    <h4>{description}</h4>
                </Col>
                <Col className={'justify-content-end'}>
                    <Button variant={'dark'} onClick={() => setDisplay(!display)}>
                        {
                            display ?
                                <BsChevronRight className={"icon"}/>
                                :
                                <BsChevronDown className={"icon"}/>
                        }
                    </Button>
                </Col>
            </Row>
            <Row>
                <Image src={image} className={display ? "d-block" : "d-none"}/>
            </Row>
        </Row>
    );
}