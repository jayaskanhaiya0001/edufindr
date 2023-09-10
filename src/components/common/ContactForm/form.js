import { useState , Fragment} from "react";
import Mobile from "../../../assets/Icons/mobile.svg";
import Email from "../../../assets/Icons/Email.svg";
import axios from "axios";
import "./form.css";
const InputItems = [{ img: "", placeholder: "Full Name", type: "text", name: "name"}, { img: Mobile, placeholder: "Please enter your mobile number", type: "number"  ,name: "phone"}, { img: Email, placeholder: "Please enter your e-mail address (Optional)", type: "email" , name: "email"}, { img: "", placeholder: "Message (Optional)", type: "text", name: "msg"}]
export const ContactForm = () => {
    const [contactInfo , setContactInfo] = useState({
        name: "",
        phone: null,
        email: "",
        msg: ""
    })
    const inputHandle = (event) => {
        const {name , value} = event.target
        setContactInfo({...contactInfo , [name]: value})
    }
    const [succMessage , setSuccessMess] = useState("")
    const handleSendMessage = async () => {
        try {
            const res = await axios.post('https://courseselling.onrender.com/api/v1/form', contactInfo)
            if(res) {
                console.log(res , "RES")
                setSuccessMess("Lorem Ipsum is simply dummy text")
            }
        } catch (err){
            console.log(err , "Error")
        }
    }

    return (
        <>
            <div className="Contact-Form-Container">
                <div className="Contact-form">
                    <h1>Start Your Journey Now</h1>
                    {
                        InputItems?.map((data , index) => {
                            return (
                                <Fragment key={index}>
                                    <div>
                                        {data?.img && (<img src={data.img} alt="" />)}
                                        <input type={data.type} placeholder={data.placeholder} name={data?.name} onChange={(e) =>inputHandle(e)}/>
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                     {succMessage && <p style={{color: "green"}}>{succMessage}</p>}
                    <button className="contact-form-btn" onClick={() => handleSendMessage()}>Send Message</button>
                </div>
               
            </div>
        </>
    )
}