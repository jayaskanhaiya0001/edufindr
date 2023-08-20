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
                    <UpperHeader title={'Join to access 3000+ '} desc={'Create a free account and access free classes playlists & more'} />
                    <form className="Mobile-Form">
                        <div>
                            <img src={MobileIcon} alt="mob-icon" /> <input type="Number" placeholder="Please Enter your mobile number" />
                        </div>
                        <Button value={'Get Started'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} margin={'0 auto'} />
                    </form>
                </div>
                <img src={DummyImage} alt=""/>
            </div>
        </>
    )
}