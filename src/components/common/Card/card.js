import "./card.css";
import hat from "../../../assets/Icons/graduation_hat.svg"
export const Card = ({ title, description, image , icon , text}) => {
    return (
        <>
            <div className="common_card">
                <img src={image ? image : "./images/dummy.png"} alt="dummy" className="common-card-image"/>
                <div className="common_card_desc_box">
                    <h2 className="common-card-title">{title}</h2>
                    <p className="common-card-description">{description}</p>
                </div>
                <p className="common-card-btm-txt"><img src={icon ? icon : hat} alt="common-card-icon"/>{text}</p>
            </div>
        </>
    )
}