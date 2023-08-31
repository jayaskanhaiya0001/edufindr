import { Button } from "../common/Button/button";
import { SquareCard } from "../common/SquareCard/squareCard";
import { Course } from "../common/Course/course";
import { MobileCall } from "../common/MobileCall/mobileCall";
import { Footer } from "../common/Footer/footer";
import { Header } from "../common/Header/header";
import { useLocation } from "react-router-dom";
import "./coursePage.css";
const NavItem = ['SSC', 'Teaching Exams', 'UPSC', 'civil service', 'GATE', 'AE & JE', 'Goverment Exmas', 'Bamnking & Insurance', 'Degfence Exams', 'Raleway', 'Teaching'];
const title = '50+ Courses By Best Teachers';
export const CoursePage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search');
    const type = queryParams.get('category');
    console.log(search,type,"himanshu")
    return (
        <>
            <Header />
            <div className="course-page">
                <section id="course-first-section">
                    <div>
                        <div className="corse-page-head-box">
                            <h1>Why EduFindr?</h1>
                            <p>With <span>1.8+ Crore Students</span> and India’s Highest Selection Rate Amongst online learning platforms, you can surely rely on us to excel</p>
                        </div>
                        <Button value={'Get Started For Free'} background={'#722E60'} txtColor={'#FFF'} border={'none'} width={'max-content'} margin={'0 auto'} />
                    </div>


                    <div className="course-page-grid-box">
                        <SquareCard title={'Learn from the Best'} disc={'Learn from the masters of the subject, in the most engaging yet simplified ways'} backgroundColor={'#FFF1E9'} bgColor={'#D96A27'} src={'/images/reading-book.svg'}/>
                        <SquareCard title={'Learn from the Best'} disc={'Learn from the masters of the subject, in the most engaging yet simplified ways'} backgroundColor={'#FFF1E9'} bgColor={'#D96A27'} src={'/images/open-book.svg'}/>
                        <SquareCard title={'Learn from the Best'} disc={'Learn from the masters of the subject, in the most engaging yet simplified ways'} backgroundColor={'#FFF1E9'} bgColor={'#D96A27'} src={'/images/additional-discount.svg'}/>
                        <SquareCard title={'Learn from the Best'} disc={'Learn from the masters of the subject, in the most engaging yet simplified ways'} backgroundColor={'#FFF1E9'} bgColor={'#D96A27'} src={'/images/fee-refund.svg'}/>
                    </div>
                </section>
                <section>
                    <Course NavItem={NavItem} title={title} display={'none'}/>
                </section>
                <section>
                    <MobileCall />
                </section>
            </div>
            <Footer />
        </>
    )
}