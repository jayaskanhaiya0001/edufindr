import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mobslider.css";
import StudentGrp from "../../../assets/slider-image/student-grp.svg";
import library from "../../../assets/slider-image/library.svg";
import Edufindr from "../../../assets/slider-image/edufindr-log.svg";
const sliderImage = [StudentGrp, library, Edufindr,StudentGrp, library, Edufindr];
export const MobSlider = () => {
    const settings = {
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    }
    return (
        <>
            <Slider {...settings}>
                {
                    sliderImage?.map((url, ind) => {
                        return (
                            <>
                                <div key={ind}>
                                    <img src={url} alt="" />
                                </div>
                            </>
                        )
                    })
                }
            </Slider>
        </>
    )
}