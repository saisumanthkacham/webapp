import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Arch from "../../images/Arch.jpg"
import entrance from "../../images/Entrance.jpg"
import road from "../../images/road.jpg"
import jogg from "../../images/jogging.jpg"

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}>
                <div>
                    <img alt="img1" src={Arch} />
                </div>
                <div>
                    <img alt="img2" src={entrance} />
                </div>
                <div>
                    <img alt="img3" src={road} />
                </div>
                <div>
                    <img alt="img4" src={jogg} />
                </div>
            </Carousel>
        </div>
    );
}