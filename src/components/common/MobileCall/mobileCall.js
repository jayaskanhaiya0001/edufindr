import { UpperHeader } from "../Heading/upperHeader";
import { Button } from "../Button/button";
import DummyImage from "../../../assets/Images/dummy1.png";
import MobileIcon from "../../../assets/Icons/mobile.svg";
import "./mobileCall.css";
export const MobileCall = () => {
    return (
        <>
            <div className="Mobile-Call-Container">
                <div className="FormBox">
                    <div className="Form-Title-Container">
                        <h3>Join to access 3000+</h3>
                        <p>Create a free account and access free classes playlists & more</p>
                    </div>
                    <form className="Mobile-Form">
                        <div>
                            <img src={MobileIcon} alt="mob-icon" /> <input type="Number" placeholder="Please Enter your mobile number" className="EnterMobile"/>
                        </div>
                        <Button value={'Get Started'} background={'#722E60'} txtColor={'#FFF'} border={'1px solid #000'} margin={'0 auto'} width={'inherit'} />
                    </form>
                </div>
                <div>
                    <img src={DummyImage} alt="" />
                </div>
            </div>
        </>
    )
}