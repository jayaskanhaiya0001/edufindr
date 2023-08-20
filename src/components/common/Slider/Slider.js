import Slider from "react-slick";
import StudentGrp from "../../../assets/slider-image/student-grp.svg";
import library from "../../../assets/slider-image/library.svg";
import Edufindr from "../../../assets/slider-image/edufindr-log.svg";
const sliderImage = [StudentGrp , library , Edufindr]
export const SlickSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider {...settings}>
                {
                    sliderImage?.map((url , ind) => {
                        return (
                            <>
                            <div key={ind}>
                                <img src={url} alt=""/>
                            </div>
                            </>
                        )
                    })
                }
            </Slider>
        </>
    )
}