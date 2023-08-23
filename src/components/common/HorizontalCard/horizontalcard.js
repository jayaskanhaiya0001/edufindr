import "./horizontalcard.css";
export const HorizontalCard = ({ item }) => {
    return (
        <>
            <div className="Horizontal-Common-Card">
                <div className="Horizontal-Common-Image-Box">
                    <img src={item?.image} alt="" />
                </div>
                <div className="Horizontal-Common-Content-Box">
                    <div>
                        <h2>{item?.title}</h2>
                        {/* <br />({additionalinfo})
                        <p className="Horizontal-Common-Content-disc">{desc}</p> */}
                    </div>
                    <div className="star-box">
                        <div>
                            <span className="star-value">{item?.rating}</span>
                            <img src="/images/Star.svg" alt="rate" />
                            <img src="/images/Star.svg" alt="rate" />
                            <img src="/images/Star.svg" alt="rate" />
                            <img src="/images/Star.svg" alt="rate" />
                            <img src="/images/Star.svg" alt="rate" />
                        </div>

                        <p>
                            {/* <span>{bottomVal1}</span>
                            <span>{bottomVal2}</span> */}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}