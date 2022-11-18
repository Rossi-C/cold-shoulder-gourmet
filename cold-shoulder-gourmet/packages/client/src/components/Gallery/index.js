
import { Carousel } from "react-bootstrap";
import Gallery1 from '../Services/Gallery1.jpg'
import Gallery3 from './Gallery3.jpg'
import Image from 'react-bootstrap/Image'
import './gallery.css'

function Gallery() {
    return (

        <Carousel className="h-auto justify-content-center" fade={true} pause={"hover"}>
            <Carousel.Item interval={2000}>
                <Image className="d-block m-auto galleryImage"
                    src={Gallery1}
                    alt="Second slide" />
                <Carousel.Caption>
                    <h3 className={"m-auto bg-dark w-50 px-1"}>Gourmet sandwiches made fresh, everyday...</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image className="d-block m-auto galleryImage"
                    src={Gallery1}
                    alt="Second slide" />
                <Carousel.Caption>
                    <h3 className={"m-auto bg-dark w-50 px-1"}>Finest sourced meats and local vegetables...</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image className="d-block m-auto galleryImage"
                    src={Gallery3}
                    alt="Second slide" />
                <Carousel.Caption>
                    <h3 className={"m-auto bg-dark w-50 px-1"}>
                        High end ingredients, infused with delicious truffles...
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Gallery;