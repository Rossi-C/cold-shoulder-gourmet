import { Col, Row } from "react-bootstrap";
// import {BsChevronDown, BsChevronRight} from "react-icons/bs";
// import Image from "react-bootstrap/Image";
import { GiChiliPepper } from 'react-icons/gi'


export function MenuItem({ setDisplay, display, image, description, name, vegan, vegetarian, spicy, price }) {
    return (
        <Row className="m-2 p-2 border border-light " style={{ fontFamily: 'Stardos Stencil' }}>
            <Row className={'justify-content-between'}>
                <Col className={'d-inline'}>
                    <h1>
                        {name}
                        {vegan && '(V)'}
                        {vegetarian && '(VG)'}
                        {spicy &&
                            (<>
                                <label>(</label>
                                <GiChiliPepper className={'mb-2'} />
                                <label>)</label>
                            </>)
                        }
                    </h1>
                </Col>
                <Col className={'d-inline text-end'}>
                    <h1>
                        ${price.toFixed(2)}
                    </h1>
                </Col>
            </Row>

            <Row className={'mb-2'}>
                <Col lg={10}>
                    <h4>{description}</h4>
                </Col>
                {/*<Col className={'justify-content-end'}>*/}
                {/*    <Button variant={'dark'} onClick={() => setDisplay(!display)}>*/}
                {/*        {*/}
                {/*            display ?*/}
                {/*                <BsChevronRight className={"icon"}/>*/}
                {/*                :*/}
                {/*                <BsChevronDown className={"icon"}/>*/}
                {/*        }*/}
                {/*    </Button>*/}
                {/*</Col>*/}
            </Row>
            {/*<Row>*/}
            {/*    <Image src={image} className={display ? "d-block" : "d-none"}/>*/}
            {/*</Row>*/}
        </Row>
    );
}