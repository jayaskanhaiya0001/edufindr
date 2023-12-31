import { Fragment } from "react";
import Slider from "react-slick";
import StudentGrp from "../../../assets/slider-image/student-grp.webp";
import library from "../../../assets/slider-image/library.webp";
import Edufindr from "../../../assets/slider-image/edufindr-log.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"
const sliderImage = [StudentGrp, library, Edufindr]
export const SlickSlider = ({settings}) => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     cssEase: 'linear',
    //     autoplay: true,
    // };
    return (
        <>
            <Slider {...settings}>
                {
                    sliderImage?.map((url, ind) => {
                        return (
                            <Fragment key={ind}>
                                <div key={`${ind+url}`}>
                                    <img src={url} alt="" />
                                </div>
                            </Fragment>
                        )
                    })
                }
            </Slider>
        </>
    )
}