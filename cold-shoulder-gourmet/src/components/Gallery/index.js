import {Carousel, Row} from "react-bootstrap";
import Gallery1 from './Gallery1.jpg'
import Gallery2 from './Gallery2.jpg'
import Gallery3 from './Gallery3.jpg'
import Image from 'react-bootstrap/Image'

function Gallery() {
    return (
                <Carousel className="h-auto justify-content-center" fade={true} pause={"hover"}>
                    <Carousel.Item interval={2000}>
                            <Image className="d-block m-auto" width={"50%"} height={"50%"}
                                   src={Gallery1}
                                   alt="Second slide" />
                            <Carousel.Caption>
                                <h3 className={"m-auto bg-dark w-50 px-1"}>Made fresh, everyday...</h3>
                            </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                            <Image className="d-block m-auto"  width={"50%"}    height={"50%"}
                                   src={Gallery2}
                                 alt="Second slide" />
                            <Carousel.Caption>
                                <h3  className={"m-auto bg-dark w-50 px-1"}>Finest sourced meats and local vegetables...</h3>
                            </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <Image className="d-block m-auto"  width={"50%"}    height={"50%"}
                               src={Gallery3}
                               alt="Second slide" />
                        <Carousel.Caption>
                            <h3  className={"m-auto bg-dark w-50 px-1"}>
                                High end ingredients, infused with delicious truffles...
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
    )
}

export default Gallery;