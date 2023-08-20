import { Link } from "react-router-dom";
import "./footer.css"
export const Footer = () => {
    return (
        <>
            <div className="Footer-Container">
                <div className="Footer-Upper-Container">
                    <ul>
                        <li>
                            <img src="/images/edufindr.svg" alt="edufindr-logo" />
                        </li>
                        <li>
                            <ul>
                                <li>About us</li>
                                <li>FAQs</li>
                                <li>Terms & conditions</li>
                                <li>Privacy Policy</li>
                                <li>Refund & <br/> Cancellation Policy</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Contact</li>
                                <li><img src="/images/mob.svg" alt="mob" /><span>+91 98765XXXXX</span></li>
                                <li><img src="/images/mail.svg" alt="mail" />team@edufindr.in</li>
                                <li><img src="/images/location.svg" alt="location" />4th Floor, Site no. 245 24th cross,<br/> 16th Main, Sector 5 , Bengaluru</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Learn from the finest educators <br/> in India.</li>
                                <li>
                                    <input placeholder="Your phone number" /><span><img src="/images/right-arrow.svg" alt="" /></span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="Footer-Bottom-Container">
                    <ul>
                        <li>
                            Your Pathway to <br/>Excellence
                        </li>
                        <li>
                            <ul>
                                <li>
                                    We in social
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <Link to=""><img src="/images/instagram.svg" alt="instagram" /></Link>
                                        </li> <li>
                                            <Link to=""><img src="/images/facebook.svg" alt="facebook" /></Link>
                                        </li>
                                        <li>
                                            <Link to=""><img src="/images/twitter.svg" alt="twitter" /></Link>
                                        </li>
                                        <li>
                                            <Link to=""><img src="/images/linkedin.svg" alt="linkedin" /></Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <button>Get Started For Free</button>
                                </li>
                                <li>
                                    <button>Contact Us</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="Copyright-Container">
                    <p><span>&#169;2023 EduFindr PVT. LTD.</span><span>Site by EditTree Enterprises</span></p>
                </div>
            </div>
        </>
    )
}