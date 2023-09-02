import { useNavigate } from "react-router-dom";
import "./card.css";
import hat from "../../../assets/Icons/graduation_hat.svg";
export const Card = ({ data,title, description, image, icon, text, path }) => {
    const navigate = useNavigate();
    console.log(data,"hhhh")
    return (
        <>
            <div className="common_card" onClick={() => { navigate(path) }}>
                <img src={data?.image ? data?.image : "./images/dummy.png"} alt="dummy" className="common-card-image" />
                <div className="common_card_desc_box">
                    <h2 className="common-card-title">{data?.name}</h2>
                    <p className="common-card-description">{data?.about.slice(0,50)}</p>
                </div>
                <p className="common-card-btm-txt"><img src={icon ? icon : hat} alt="common-card-icon" />{data?.experiences[0]?.institution}</p>
            </div>
        </>
    )
}