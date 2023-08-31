import { ContactForm } from "../../common/ContactForm/form";
import Email from "../../../assets/Icons/Email.svg";
import Mobile from "../../../assets/Icons/mobile.svg";
import Location from "../../../assets/Icons/Location.svg";
import { About } from "../../common/About/about";
import { Header } from "../../common/Header/header";
import { Footer } from "../../common/Footer/footer";
import "./contact.css";
import { Link } from "react-router-dom";
const ContactKeyPoints = ["Interactive live classes", "High quality notes", "Doubt solving sessions", "Recorded video lectures", "Answer paper writing"]
export const ContactUs = () => {
    return (
        <>
        <Header/>
            <div className="Conatct-Us-Container">
                <section>
                    <div className="Conatct-Top-Container">
                        <div className="Conatct-Content-Box">
                            <div className="Contact-Head-Box">
                                <h1 className="Contatct-Page-Heading">5000+ learners trust us for<br />online & offline coaching</h1>
                                <p className="Contatct-Page-Discription">Fill up the form and our team will contact you immediately!</p>
                            </div>
                            <ul className="contact-key-point">
                                {
                                    ContactKeyPoints?.map((data) => {
                                        return (
                                            <>
                                                <li>{data}</li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <ContactForm />
                    </div>
                </section>
                <section>
                    <div className="Contact-Details-Grid">
                        <Link to={'mailto:info@edufindr.com?subject=Subject&body=message%20goes%20here'}>
                            <div className="Contact-Detail-Box">
                                <p><img src={Email} alt='Email' />E-mail Us</p>
                                <h6>info@edufindr.com</h6>
                            </div>
                        </Link>
                        <Link>
                            <div className="Contact-Detail-Box">
                                <p><img src={Mobile} alt='Mob' />Call us for any doubts</p>
                                <h6>+91 XXXXX XXXXX</h6>
                            </div>
                        </Link>
                        <Link>
                            <div className="Contact-Detail-Box">
                                <p><img src={Location} alt='Mob' />Address</p>
                                <h6>4th Floor, Site no. 245, 16th Main, Sector 5 , Bengaluru</h6>
                            </div>
                        </Link>
                    </div>
                </section>
                <section>
                    <div className="Contact-us-btm-container">
                        <div className="Contact-us-btm-content">
                            <About heading={'About Us'} about={'Welcome to EduFindr, your one-stop destination for comprehensive and result-oriented preparation for various government exams. We understand the challenges that aspirants face while preparing for competitive exams, and our mission is to provide you with the tools, guidance, and resources necessary to excel in your journey.'}/>
                            <About heading={'Our Vision'} about={'About Us Welcome to EduFindr, your one-stop destination for comprehensive and result-oriented preparation for various government exams. We understand the challenges that aspirants face while preparing for competitive exams, and our mission is to provide you with the tools, guidance, and resources necessary to excel in your journey. Our Vision Our vision is to empower aspirants from all walks of life to achieve their dreams of a successful career in the government sector. We believe that quality education should be accessible to everyone, regardless of their geographical location or background. Through a combination of online and offline courses, we aim to bridge the gap between your aspirations and success. Our Commitment We are committed to your success. We believe that with the right guidance, resources, and your determination, you can achieve your goals. Join us at EduFindr and embark on a transformative learning journey that will prepare you to excel in UPSC, SSC, and other government exams. Your success story begins here!'}/>
                            <About heading={'Our Commitment'} about={'About Us Welcome to EduFindr, your one-stop destination for comprehensive and result-oriented preparation for various government exams. We understand the challenges that aspirants face while preparing for competitive exams, and our mission is to provide you with the tools, guidance, and resources necessary to excel in your journey. Our Vision Our vision is to empower aspirants from all walks of life to achieve their dreams of a successful career in the government sector. We believe that quality education should be accessible to everyone, regardless of their geographical location or background. Through a combination of online and offline courses, we aim to bridge the gap between your aspirations and success. Our Commitment We are committed to your success. We believe that with the right guidance, resources, and your determination, you can achieve your goals. Join us at EduFindr and embark on a transformative learning journey that will prepare you to excel in UPSC, SSC, and other government exams. Your success story begins here!'}/>
                        </div>
                    
                    <div className="Contact-us-img-container">
                        <div className="first_image"><img src="/images/dummy.png" alt="dummy"/></div>
                        <div className="Second_image"><img src="/images/dummy.png" alt="dummy"/></div>
                    </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}