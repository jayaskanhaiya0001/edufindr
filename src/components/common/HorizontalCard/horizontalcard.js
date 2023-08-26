import { useNavigate } from "react-router-dom";
import "./horizontalcard.css";
export const HorizontalCard = ({ item,image, title, additionalinfo, desc, bottomVal1, bottomVal2, path }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="Horizontal-Common-Card" onClick={() => navigate(`/course/course-detail/${item?._id}`)}>
                <div className="Horizontal-Common-Image-Box">
                    <img src={image} alt="" />
                </div>
                <div className="Horizontal-Common-Content-Box">
                    <div>
                        <h2>{title}<br />({additionalinfo})</h2>
                        <p className="Horizontal-Common-Content-disc">{desc}</p>
                    </div>
                    <div className="star-box">
                        <div>
                            <span className="star-value">4.7</span>
                            <img src="/images/Star.svg" alt="rate" />
                            <img src="/images/Star.svg" alt="rate" />
                            <img src="/images/Star.svg" alt="rate" />
                            <img src="/images/Star.svg" alt="rate" />
                            <img src="/images/Star.svg" alt="rate" />
                        </div>

                        <p>
                            <span>{bottomVal1}</span>
                            <span>{bottomVal2}</span>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}