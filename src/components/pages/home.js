import { Header } from "../common/Header/header";
import { Card } from "../common/Card/card";
import axios from "axios"
import { Button } from "../common/Button/button";
import { UpperHeader } from "../common/Heading/upperHeader.js";
import { SquareCard } from "../common/SquareCard/squareCard";
import { TestSeriesCard } from "../common/TestSeriesCard/testSeries";
import { TestSeriesSection } from "../common/TestSeriesSection/testSeriesSection";
import { Nav } from "../common/Navigation/nav";
import { Course } from "../common/Course/course";
import { SlickSlider } from "../common/Slider/Slider";
import shield from "../../assets/Icons/shield.svg";
import trophy from "../../assets/Icons/trophy.svg";
import test from "../../assets/Icons/test-series.svg";
import { CoursePage } from "./coursePage";
import { CourseDetail } from "./courseDetail";
import { Footer } from "../common/Footer/footer";
import "./home.css";
import { useState, useEffect } from "react";
//const Teacher_Content = [{ title: "Rahul Awasthi", description: "5000+ Students taught", text: "Vidya Education" }, { title: "Rahul Awasthi", description: "5000+ Students taught", text: "Vidya Education" }, { title: "Rahul Awasthi", description: "5000+ Students taught", text: "Vidya Education" }]
const destinationItem = ['learn', 'practice', 'improve', 'success'];
const destinationCard = [{ icon: shield, title: "Trusted by", student: "4000+ Student" }, { icon: trophy, title: "Students Selected", student: "50+ Student" }, { icon: test, title: "Exam Attempted", student: "200+ Student" }]
const PopularExamNavItem = ['SSC', 'Teaching Exams', 'UPSC', 'civil service', 'GATE', 'AE & JE', 'Goverment Exmas', 'Bamnking & Insurance', 'Degfence Exams', 'Raleway', 'Teaching']
const PopularExam = ['Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police']

export const Homepage = () => {

    const [Teacher_Content, setTeacher_Content] = useState([]);
    const [PopularExamNavItem, setPopularExamNavItem] = useState([]);
    const testSeriesApi = () => {
        axios.get('https://courseselling.onrender.com/api/v1/categories')
            .then(response => {

                setPopularExamNavItem(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    const headerapi = () => {
        axios.get('https://courseselling.onrender.com/api/v1/categories')
            .then(response => {

                setPopularExamNavItem(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    const getAllTeachersApi = () => {
        axios.get('https://courseselling.onrender.com/api/v1/getAllTeachers')
            .then(response => {
                console.log(response, "heelo")
                setTeacher_Content(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    useEffect(() => {
        // Make the API request here
        getAllTeachersApi();
        headerapi();
    }, []);
    return (
        <>
            <Header />
            <div className="homePage-Container">

                <section className="one-destination">
                    <div className="one-destination_box" >
                        <div>
                            <div>
                                <h1 className="heading-one-destination">
                                    One Destination for <br />Complete Exam Preparation
                                </h1>
                                <ul className="path-point">
                                    {
                                        destinationItem.map((item, index) => {
                                            return (
                                                <>
                                                    <li id={index}>{item}</li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="home-form">
                                <div>
                                    <input placeholder="Enter your mobile number" />
                                </div>
                                <button className="Call-Back-Btn">Get a call back</button>
                                <p><img src={shield} alt="" />30,000+ students trust us</p>
                            </div>
                        </div>
                        <div className="Web-Caraousel">
                            <SlickSlider settings={{
                                dots: true,
                                infinite: true,
                                speed: 500,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                fade: true,
                                cssEase: 'linear',
                                autoplay: true,
                            }} />
                        </div>
                        <div className="Mob-Caraousel">
                           
                        </div>
                    </div>

                </section>
                <section>
                    <div className="one-destination-card-box">
                        {
                            destinationCard.map((item, index) => {
                                return (
                                    <>

                                        <div className="one-destination-card" style={index === 1 ? { background: "#FFF1E9" } : { background: "#E3F8FF" }}>
                                            <img src={item.icon} alt="icon" />
                                            <div className="one-destination-card-content">
                                                <span>{item.title}</span>
                                                <h2>{item.student}</h2>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </section>


            </div>
            <section style={{ background: "linear-gradient(180deg, #FFF 0%, #FFF5FC 100%)" }} id="Popular-Exam">
                <div className="homePage-Container">
                    <div className="Popular-exam-box" style={{ paddingBottom: "100px" }}>
                        <UpperHeader title={'Popular Exam'} desc={'Get exam-ready with concepts, questions and study notes as per the latest pattern'} />
                        <Nav navList={PopularExamNavItem} />
                        <div className="Popular-Ind-Exam-Box">
                            {
                                PopularExam.map((item, index) => {
                                    return (
                                        <>
                                            <div id={index} className="ind-exam">
                                                <span>{item}</span>
                                                <img src="./images/chevron-right.svg" alt="chevron-right" />
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </section>
            <div className="homePage-Container">

                <section id="edufinder">
                    <div className="edufinder-container">
                        <div className="edufinder-content-container">
                            <img src="./images/edufindr.svg" alt="logo" />
                            <div className="edu-desc">
                                <h1 className="edufinder-head">Why Edufindr?</h1>
                                <p className="edufinder-desc">With 1.8+ Crore Students and India’s Highest Selection Rate Amongst online learning platforms, you can surely rely on us to excel</p>
                            </div>
                            <Button value={'Get Started For Free'} width={'max-content'} background={'#722E60'} txtColor={'#FFF'} border={'none'} />
                        </div>
                        <div className="edufindr-box-container">
                            <div className="block1">
                                <SquareCard title={'Learn from the Best'} disc={'Learn from the masters of the subject, in the most engaging yet simplified ways'} backgroundColor={'#FFF1E9'} bgColor={"var(--orange-300, #D96A27)"} src={'/images/reading-book.svg'} />
                                <SquareCard title={'Learn from the Best'} disc={'Learn from the masters of the subject, in the most engaging yet simplified ways'} backgroundColor={'var(--purple-0, #FFF5FC)'} bgColor={"var(--purple-300, #9F3282)"} src={'/images/open-book.svg'} />
                            </div>
                            <div className="block2">
                                <SquareCard title={`Additional Discount on Books`} disc={'Learn from the masters of the subject, in the most engaging yet simplified ways'} backgroundColor={'#FFF1E9'} bgColor={"var(--orange-300, #D96A27)"} src={'/images/additional-discount.svg'} />
                                <SquareCard title={'Learn from the Best'} disc={'Learn from the masters of the subject, in the most engaging yet simplified ways'} backgroundColor={'var(--purple-0, #FFF5FC)'} bgColor={"var(--purple-300, #9F3282)"} src={'/images/fee-refund.svg'} />
                            </div>
                            <div className="block1">
                                <SquareCard title={'Learn from the Best'} disc={'Learn from the masters of the subject, in the most engaging yet simplified ways'} backgroundColor={'#FFF1E9'} bgColor={"var(--orange-300, #D96A27)"} src={'/images/reading-book.svg'} />
                                <SquareCard title={'Learn from the Best'} disc={'Learn from the masters of the subject, in the most engaging yet simplified ways'} backgroundColor={'var(--purple-0, #FFF5FC)'} bgColor={"var(--purple-300, #9F3282)"} src={'/images/open-book.svg'} />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="Course-Container">
                    <Course title={'What you will get with our course'} NavItem={PopularExamNavItem} />
                </section>
                <section className="Popular_teacher" id="popular-teacher-section" >
                    <div className="Popular_teacher_box" style={{ background: "#FFF5FC" }}>
                        <UpperHeader title={'Popular Teacher'} desc={'Get exam-ready with concepts, questions and study notes as per the latest pattern'} />
                        <div className="Popular_teacher_absolute_box">
                            {
                                Teacher_Content?.map((data, index) => {
                                    return (
                                        <>
                                            <Card title={data?.title} description={data?.description} text={data?.text} />
                                        </>
                                    )
                                })

                            }
                        </div>
                    </div>
                </section>
                <section className="commonPadding" id="test-series-section" style={{ minHeight: "553px" }}>
                    <div className="TestSeries-Main-Container">
                        <UpperHeader title={'Popular Test Series'} desc={'Get exam-ready with concepts, questions and study notes as per the latest pattern'} />
                        <div className="test-series-grid" style={{ margin: "36px 0" }}>
                            <TestSeriesCard />
                            <TestSeriesCard />
                            <TestSeriesCard />
                            <TestSeriesCard />
                        </div>

                        <Button width={'max-content'} value={'Explore all Test Series'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} margin={'0 auto'} />

                    </div>
                </section>
            </div>
            <section>
                <Footer />
            </section>

            {/* <section className="commonPadding" style={{ minHeight: "635px", marginTop: "100px" }}>
                <TestSeriesSection />
            </section> */}
            {/* <section className="commonPadding" style={{ minHeight: "493px" }}>
                <div className="Free-Courses-Container">

                    <UpperHeader title={'Popular Teacher'} desc={'Get exam-ready with concepts, questions and study notes as per the latest pattern'} />
                    <div className="Course-main-Box">
                        <div className="course-box">
                            <img src="./images/dummy.png" alt="dummy" />
                        </div>
                        <div className="course-box">
                            <img src="./images/dummy.png" alt="dummy" />
                        </div>
                        <div className="course-box">
                            <img src="./images/dummy.png" alt="dummy" />
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}