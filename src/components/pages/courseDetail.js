import { useEffect, useState , Fragment} from "react";
import { useNavigate } from "react-router-dom";
import { UpperHeader } from "../common/Heading/upperHeader";
import { Card } from "../common/Card/card";
import { BatchCard } from "../common/BatchCard/batchCard";
import { MobileCall } from "../common/MobileCall/mobileCall";
import { HorizontalCard } from "../common/HorizontalCard/horizontalcard";
import { TestSeriesCard } from "../common/TestSeriesCard/testSeries"
import { Footer } from  "../common/Footer/footer";
import { Header } from "../common/Header/header";
import Student from "../../assets/Course-Detailed-Page/Student.svg";
import Translate from "../../assets/Course-Detailed-Page/Translate.svg";
import Duration from "../../assets/Course-Detailed-Page/Duration.svg";
import Enrolled from "../../assets/Course-Detailed-Page/Enrolled.svg";
import HardCopy from "../../assets/Course-Detailed-Page/Hard-Copy.svg";
import TestSeriesIcon from "../../assets/Course-Detailed-Page/Hard-Copy.svg";
import LiveLectures from "../../assets/Course-Detailed-Page/Live-Lectures.svg";
import RecordedLectures from "../../assets/Course-Detailed-Page/Recorded-Lecture.svg";
import DoubtSession from "../../assets/Course-Detailed-Page/Doubt-Session.svg";
import AnswerPaper from "../../assets/Course-Detailed-Page/Answer-Paper.svg";
import VideoAccess from "../../assets/Course-Detailed-Page/Extended-Video-Access.svg";
import axios from "axios"
import { useParams } from "react-router-dom";
import "./courseDetail.css";
const AllFeatures = [{ title: "Detail class Notes hard copy", imgurl: HardCopy }, { title: "Test Series", imgurl: TestSeriesIcon }, { title: "Online Live Lectures", imgurl: LiveLectures }, { title: "Recorded Video Lectures", imgurl: RecordedLectures }, { title: "Doubt solving session", imgurl: DoubtSession }, { title: "Answer paper writting", imgurl: AnswerPaper }, { title: "Extended video access", imgurl: VideoAccess }]
export const CourseDetail = () => {

    const param = useParams();
    const navigate = useNavigate()
    console.log(param?.id, "chh")
    const [course, setCourse] = useState({})
    const [courses, setCourses] = useState([])
    const [testSeriesInfo, setTestSeriesInfo] = useState([])
    const courseapi = (category) => {
        axios.get(`https://edu-server-side-2023.onrender.com/api/v1/getAllcourses?category=${category}`)
            .then(response => {

                setCourses(response.data.courses);
            })
            .catch(error => {
                console.log(error);
            });
    }
    const getCourse = async () => {
        try {
            let res = await axios.get(`https://edu-server-side-2023.onrender.com/api/v1/course/${param?.id}`)
            if (res?.data?.success) {
                setCourse(res?.data?.data)
                courseapi(res?.data?.data?.category)

            }
        } catch (err) {

        }
    }

    const getTestSeries = async () => {
        try {
            let res = await axios.get(`https://edu-server-side-2023.onrender.com/api/v1/getAllTest?category=${course?.category}&exam=${course?.exam}`)
            if (res?.status === 200) {
                setTestSeriesInfo(res?.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getCourse()
        getTestSeries()
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <div>
                <Header />
                <div className="Course-Detail-Top-Container">
                    <section id="Hero-Section">
                        <div className="main-container">
                            <div className="Left-Box">
                                <button className="Class-Mode">Online</button>
                                <h1>{course?.title}</h1>
                                <p>By: <b>{course?.mentorNames?.map((item) => item?.name).join(', ')},</b></p>
                                <div className="Starbox-Container">
                                    <div className="Rating-Box">{course?.rating}</div>
                                    {Array.from({ length: Math.ceil(course?.rating) }).map((_, index) => (
                                        <img key={index} src="/images/Star.svg" alt="star" />
                                    ))}



                                </div>
                                <div className="Course-Basic-Detail">
                                    <div className="Course-Basic-Detail-Row">
                                        <div className="">
                                            <div className="Icon-box">
                                                <img src={Translate} alt="translate" />
                                            </div>
                                            <div className="Course-Basic-Content">
                                                <h3>Course Language</h3>
                                                <span>{course?.language}</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="Icon-box">
                                                <img src={Student} alt="Student" />
                                            </div>
                                            <div className="Course-Basic-Content">
                                                <h3>students mentored</h3>
                                                <span>50,000+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Course-Basic-Detail-Row">
                                        <div className="">
                                            <div className="Icon-box">
                                                <img src={Enrolled} alt="Enrolled" />
                                            </div>
                                            <div className="Course-Basic-Content">
                                                <h3>Already Enrolled</h3>
                                                <span>{course?.alreadyEnrolled}</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="Icon-box">
                                                <img src={Duration} alt="Duration" />
                                            </div>
                                            <div className="Course-Basic-Content">
                                                <h3>Duration</h3>
                                                <span>{course?.courseDuration}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Right-Box">
                                <div className="Course-Start-Detail-Container">
                                    {console.log(course , "Check Which Course")}
                                    <img src={course?.image} alt="dummy" className="Teacher_Corse_img" />
                                    <div className="Course-Start-Detail-Content">
                                        <div>
                                            <h3>{course?.mentorNames?.[0]?._id?.name}</h3>
                                            {/* <p>{course?.mentorNames?.[0]?._id?.studentsTaught}+ Students taught</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section>
                            <div className="Price-Container">
                                <div><span className="discounted-price">₹{course?.price}</span><span className="Price">₹50,000</span></div>
                                <button className="get-started" onClick={() => navigate("/contact-us")}>get started</button>
                            </div>
                        </section>
                    </section>

                    <section>
                        <div className="Course-Additional-Detail-Container">
                            <UpperHeader title={'What all you are getting'} />
                            <div className="Additional-Detail-grid-Container">
                                {AllFeatures?.map((data, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <div className="Additional-Detail-Box">
                                                <span><img src={data?.imgurl} alt="" /></span>
                                                <p className="Additional-Detail-Disc">{data?.title}</p>
                                            </div>
                                        </Fragment>
                                    )
                                })}

                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="Ind-Description-Container">
                            <h1>Full Course Description</h1>
                            <div className="Ind-Description-Content">
                                <div className="ind-des-head-box">
                                    <h1>About Course</h1>
                                    <p>{course?.about}</p>
                                </div>
                                <div className="ind-des-head-box">
                                    <h1>Course Highlights</h1>
                                    <ul>
                                        {course?.highlights?.map((data , index) => {
                                            return (
                                                <>
                                                    <li key={index}>{data?.description}</li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="course-language">
                                    <h1>Course Language</h1>
                                    <ul>

                                        <li>{course?.language}</li>

                                    </ul>
                                </div>
                            </div>
                        </div>


                    </section>
                    <section>
                        <div className="Teachers-Container">
                            <h1>Know your Teachers</h1>
                            <div className="teacher-grid-box">
                                {course?.mentorNames?.map((data , index) => {
                                    return <Card data={data?._id} title={data?._id?.title} description={data?._id?.description} text={data?._id?.text} path={`/teachers/${data?._id?._id}`} keyId={index}/>
                                })}
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="Select-Batch-Container">
                            <h1>Select Batch</h1>
                            <div className="Batch-Card-Grid">
                                {course?.batches?.map((item , index) => {
                                    return <BatchCard item={item} price={course?.price} batchStarting={course?.batchStarting} enrollmentEndDate={course?.enrollmentEndDate} days={course?.days} keyId={index}/>
                                })}



                            </div>
                            <div className="Price-Container">
                                <div><span className="discounted-price">₹{course?.price}</span><span className="Price">₹50,000</span></div>
                                <button className="get-started" onClick={() => navigate("/contact-us")}>get started</button>
                            </div>
                        </div>

                    </section>
                    <section>
                        <h1>Similar Courses</h1>
                        <div className="Test-Series-Grid">
                            <div className="Similiar-Courses-Grid">
                                {courses.map((item , index) => {
                                    if (item?._id !== course?._id)
                                        return <HorizontalCard image={'/images/dummy.png'} item={item} title={item?.title} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal2={'Hinglish'} keyId={index}/>
                                })}


                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="Similiar_test_Series_Container">
                            <h1>Similar Test Series</h1>
                            <div className="Test-Series-Grid">
                                {testSeriesInfo?.Tests?.map((data, index) => {
                                    return (
                                        <Fragment key={data?._id}>
                                            <TestSeriesCard data={data} exam={course?.exam} category={course?.category} id={data?._id}/>
                                        </Fragment>
                                    )
                                })}
                            </div>
                        </div>

                    </section>
                    <section>
                        <MobileCall />
                    </section>
                </div>
                <Footer />
            </div>


        </>
    )
}