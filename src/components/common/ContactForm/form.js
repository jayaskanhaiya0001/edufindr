import "./form.css";
import Mobile from "../../../assets/Icons/mobile.svg";
import Email from "../../../assets/Icons/Email.svg";
const InputItems = [{ img: "", placeholder: "Full name", type: "text" }, { img: Mobile, placeholder: "Please enter your mobile number", type: "number" }, { img: Email, placeholder: "Please enter your e-mail address (Optional)", type: "email" }, { img: "", placeholder: "Message (Optional)", type: "text" }]
export const ContactForm = () => {
    return (
        <>
            <div className="Contact-Form-Container">
                <form className="Contact-form">
                    <h1>Start Your Journey Now</h1>
                    {
                        InputItems?.map((data) => {
                            return (
                                <>
                                    <div>
                                        {data?.img && (<img src={data.img} alt="" />)}
                                        <input type={data.type} placeholder={data.placeholder} />
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