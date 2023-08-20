import "./horizontalcard.css";
export const HorizontalCard = ({ image, title, additionalinfo, desc, bottomVal1, bottomVal2 }) => {
    return (
        <>
            <div className="Horizontal-Common-Card">
                <div className="Horizontal-Common-Image-Box">
                    <img src={image} alt="" />
                </div>
                <div className="Horizontal-Common-Content-Box">
                    <div>
                        <h2>{title}<br />({additionalinfo})</h2>
                        <p className="Horizontal-Common-Content-disc">{desc}</p>
                    </div>
                    <div className="star-box">
                        <span className="star-value">4.7</span>
                        <img src="./images/Star.svg" alt="rate" />
                        <img src="./images/Star.svg" alt="rate" />
                        <img src="./images/Star.svg" alt="rate" />
                        <img src="./images/Star.svg" alt="rate" />
                        <img src="./images/Star.svg" alt="rate" />
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