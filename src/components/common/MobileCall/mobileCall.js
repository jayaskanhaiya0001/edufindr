import { useState } from "react";
import axios from "axios";
import { UpperHeader } from "../Heading/upperHeader";
import { Button } from "../Button/button";
import DummyImage from "../../../assets/Images/dummy1.png";
import MobileIcon from "../../../assets/Icons/mobile.svg";
import "./mobileCall.css";
export const MobileCall = () => {
    const [succesAlert ,setSuccessAlert] = useState(false) 
    const [lead,setLead]=useState("");
    const onChange=(e)=>{
        setLead(e.target.value);
            }
            
    const leadGeneration=()=>{
                axios.post('https://edu-server-side-2023.onrender.com/api/v1/leadCollection',{
                    mobileNumber: lead
                })
                .then(response => {
        setLead("")
        if(response.data.success){ setSuccessAlert(true)}
       
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            }

    return (
        <>
            <div className="Mobile-Call-Container">
                <div className="FormBox">
                    <div className="Form-Title-Container">
                        <h3>Join to access 3000+</h3>
                        <p>Create a free account and access free classes playlists & more</p>
                    </div>
                    <div className="Mobile-Form" action="">
                        <div>
                            <img src={MobileIcon} alt="mob-icon" /> <input type="Number" placeholder="Please Enter your mobile number" className="EnterMobile" onChange={(e) => setLead(e.target.value)}/>
                        </div>
                        {succesAlert && <li style={{color: "green" , listStyle: "none"}}>Lorem Ipsum is simply dummy text</li>}
                        <div onClick={() => leadGeneration()}>
                        <Button value={'Get Started'} background={'#722E60'} txtColor={'#FFF'} border={'1px solid #000'} margin={'0 auto'} width={'inherit'} />
                        </div>
                    </div>
                </div>
                <div>
                    <img src={DummyImage} alt="" />
                </div>
            </div>
        </>
    )
}