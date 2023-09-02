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
import { useNavigate } from 'react-router-dom';
import { CoursePage } from "./coursePage";
import { CourseDetail } from "./courseDetail";
import { MobSlider } from "../common/MobSlider/mobslider";
import { GetCallBack } from "../common/Popup/call";
import { Footer } from "../common/Footer/footer";
import "./home.css";
import { useState, useEffect } from "react";
import LottieControl from "../common/Loader/loader";
//const Teacher_Content = [{ title: "Rahul Awasthi", description: "5000+ Students taught", text: "Vidya Education" }, { title: "Rahul Awasthi", description: "5000+ Students taught", text: "Vidya Education" }, { title: "Rahul Awasthi", description: "5000+ Students taught", text: "Vidya Education" }]
const destinationItem = ['learn', 'practice', 'improve', 'success'];
const destinationCard = [{ icon: shield, title: "Trusted by", student: "4000+ Student" }, { icon: trophy, title: "Students Selected", student: "50+ Student" }, { icon: test, title: "Exam Attempted", student: "200+ Student" }]
const PopularExamNavItem = { 'SSC': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Teaching Exams': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'UPSC': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'civil service': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'GATE': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'AE & JE': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Goverment Exmas': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Bamnking & Insurance': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Degfence Exams': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Raleway': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"], 'Teaching': ["History", "Anthropology", "Sociology", "Maithili", "Public Administration", "Law", "Economics"] };
const PopularExam = ['Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police', 'Delhi Police']

export const Homepage = () => {
    const navigate = useNavigate();
    const [lead, setLead] = useState("");
    const [Teacher_Content, setTeacher_Content] = useState([]);
    // const [PopularExamNavItem, setPopularExamNavItem] = useState([]);
    const [testSeries, setTestSeries] = useState([])
    const [succesAlert, setSuccessAlert] = useState(false)

    const onChange = (e) => {
        setLead(e.target.value);
    }
    const leadGeneration = () => {
        axios.post('https://courseselling.onrender.com/api/v1/leadCollection', {
            mobileNumber: lead
        })
            .then(response => {
                setLead("")
                if (response.data.success)
                    setSuccessAlert(true)

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    const testSeriesApi = () => {
        axios.get('https://courseselling.onrender.com/api/v1/getAllTest')
            .then(response => {
                setTestSeries(response.data.Tests);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    // const headerapi = () => {
    //     axios.get('https://courseselling.onrender.com/api/v1/categories')
    //         .then(response => {

    //             setPopularExamNavItem(response.data.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }
    const getAllTeachersApi = () => {
        axios.get('https://courseselling.onrender.com/api/v1/getAllTeachers')
            .then(response => {

                setTeacher_Content(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    const [category, setCategory] = useState("")
    const [exam, setExam] = useState("")
    const handleCategory = (data) => {
        setCategory(data)
    }
    const handleExam = (data) => {
        setExam(data)
    }
    useEffect(() => {
        // Make the API request here
        getAllTeachersApi();
        // headerapi();
        testSeriesApi();
    }, []);
    if (succesAlert) {
        setTimeout(() => {
            setSuccessAlert(false)
        }, 5000)
    }


    return (

        <>
            {(testSeries?.length > 0 && Teacher_Content?.length > 0)  ? (
                <>
                    <Header />
                    {succesAlert && (<GetCallBack succesAlert={succesAlert} />)}
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
                                                            <li id={index} key={index}>{item}</li>
                                                        </>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="home-form">
                                        <div>
                                            <input onChange={(e) => { onChange(e) }} value={lead} maxLength={10} type="number" placeholder="Enter your mobile number" />
                                        </div>
                                        <button onClick={() => { leadGeneration() }} className="Call-Back-Btn">Get a call back</button>
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
                                    <section>
                                        <MobSlider />
                                    </section>
                                </div>
                            </div>

                        </section>
                        <section>
                            <div className="one-destination-card-box">
                                {
                                    destinationCard.map((item, index) => {
                                        return (
                                            <>

                                                <div className="one-destination-card">
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
                                <Nav navList={PopularExamNavItem} handleCategory={handleCategory} handleExam={handleExam} />
                                <div className="Popular-Ind-Exam-Box">
                                    {
                                        PopularExam.map((item, index) => {
                                            return (
                                                <>
                                                    <div id={index} className="ind-exam" key={index}>
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
                            <Course title={'What you will get with our course'} NavItem={PopularExamNavItem} path={'/course/course-detail'} />
                        </section>
                        <section className="Popular_teacher" id="popular-teacher-section" >
                            <div className="Popular_teacher_box" style={{ background: "#FFF5FC" }}>
                                <UpperHeader title={'Popular Teacher'} desc={'Get exam-ready with concepts, questions and study notes as per the latest pattern'} />
                                <div className="Popular_teacher_absolute_box">
                                    {
                                        Teacher_Content?.map((data, index) => {
                                            return (
                                                <div onClick={() => { navigate(`/teachers/${data._id}`) }} key={index}>
                                                    <Card title={data?.title} description={data?.description} text={data?.text} />
                                                </div>
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
                                    {testSeries?.map((item) => {
                                        return <TestSeriesCard key={item.id} data={item} category={item?.category} exam={item?.Exam} id={item?._id} />;

                                    })}
                                </div>

                                <Button width={'max-content'} value={'Explore all Test Series'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} margin={'0 auto'} />

                            </div>
                        </section>
                    </div>

                    <section>
                        <Footer />
                    </section>
                </>

            ) : (
                <>
                <div >
                <LottieControl isStopped={false} isPaused={false} />
                </div>
                    
                </>
            )}



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