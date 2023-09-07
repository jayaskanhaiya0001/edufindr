import Mobile from "../../../assets/Icons/mobile.svg";
import Email from "../../../assets/Icons/Email.svg";
import "./form.css";
import axios from "axios";
import { useState } from "react";
const InputItems = [{ img: "", placeholder: "fullName", type: "text", name: "FullName"}, { img: Mobile, placeholder: "Please enter your mobile number", type: "number"  ,name: "contactNumber"}, { img: Email, placeholder: "Please enter your e-mail address (Optional)", type: "email" , name: "email"}, { img: "", placeholder: "Message (Optional)", type: "text", name: "message"}]
export const ContactForm = () => {
    const [contactInfo , setContactInfo] = useState({
        fullName: "",
        contactNumber: null,
        email: "",
        message: ""
    })
    const inputHandle = (event) => {
        const {name , value} = event.target
        setContactInfo({...contactInfo , [name]: value})
    }
    const handleSendMessage = async () => {
        try {
            const res = await axios.post('' , )
        } catch (err){

        }
    }

    return (
        <>
            <div className="Contact-Form-Container">
                <form className="Contact-form">
                    <h1>Start Your Journey Now</h1>
                    {
                        InputItems?.map((data , index) => {
                            return (
                                <>
                                    <div>
                                        {data?.img && (<img src={data.img} alt="" />)}
                                        <input type={data.type} placeholder={data.placeholder} name={data?.name} onChange={(e) =>inputHandle(e)}/>
                                    </div>
                                </>
                            )
                        })
                    }
                    <button className="contact-form-btn">Send Message</button>
                </form>
            </div>
        </>
    )
}