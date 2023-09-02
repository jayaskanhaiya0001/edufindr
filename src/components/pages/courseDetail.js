import { UpperHeader } from "../common/Heading/upperHeader";
import { About } from "../common/About/about";
import { Highlight } from "../common/Highlight/highlight";
import { Card } from "../common/Card/card";
import { BatchCard } from "../common/BatchCard/batchCard";
import { MobileCall } from "../common/MobileCall/mobileCall";
import { HorizontalCard } from "../common/HorizontalCard/horizontalcard";
import { TestSeriesCard } from "../common/TestSeriesCard/testSeries"
import Hat from "../../assets/Icons/graduation_hat.svg";
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
import { Footer } from "../common/Footer/footer";
import { Header } from "../common/Header/header";
import "./courseDetail.css";
import axios from "axios"
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const hightlightListItems = ['Course Highlights Complete coverage of syllabus', 'Focus on building concepts.', 'Bi-weekly doubt resolution session.', '6 Class tests and 2 Full-length mock tests are included.', 'Special sessions for answer writing,']
const AllFeatures = [{ title: "Detail class Notes hard copy", imgurl: HardCopy }, { title: "Test Series", imgurl: TestSeriesIcon }, { title: "Online Live Lectures", imgurl: LiveLectures }, { title: "Recorded Video Lectures", imgurl: RecordedLectures }, { title: "Doubt solving session", imgurl: DoubtSession }, { title: "Answer paper writting", imgurl: AnswerPaper }, { title: "Extended video access", imgurl: VideoAccess }]
export const CourseDetail = () => {
    const param = useParams();
    console.log(param?.id,"chh")
    const [course, setCourse] = useState({})
    const [courses,setCourses]=useState([])
    const courseapi = (category) => {
        axios.get(`https://courseselling.onrender.com/api/v1/getAllcourses?category=${category}`)
          .then(response => {
    
            setCourses(response.data.courses);
          })
          .catch(error => {
            console.log(error);
          });
      }
    const getCourse = async () => {
        try {
            let res = await axios.get(`https://courseselling.onrender.com/api/v1/course/${param?.id}`)
            if(res?.data?.success){
                setCourse(res?.data?.data)
                courseapi(res?.data?.data?.category)

            } 
        } catch (err) {

        }
    }
    useEffect(() => {
        getCourse()
    }, [])
    return (
       
        <>
        { console.log(course,"hellllo")}
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
                                <img src="/images/dummy.png" alt="dummy" />
                                <div className="Course-Start-Detail-Content">
                                    <div>
                                        <h3>Rahul Awasthi</h3>
                                        <p>5000+ Students taught</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="Price-Container">
                            <div><span className="discounted-price">₹{course?.price}</span><span className="Price">₹50,000</span></div>
                            <button className="get-started">get started</button>
                        </div>
                    </section>
                </section>

                <section>
                    <div className="Course-Additional-Detail-Container">
                        <UpperHeader title={'What all you are getting'} />
                        <div className="Additional-Detail-grid-Container">
                            {AllFeatures?.map((data) => {
                                return (
                                    <>
                                        <div className="Additional-Detail-Box">
                                            <span><img src={data?.imgurl} alt="" /></span>
                                            <p className="Additional-Detail-Disc">{data?.title}</p>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </section>
                <section>
                    <UpperHeader title={'Full Course Description'} />
                    <About heading={'About Course'} about={course?.about} />
                    <Highlight heading={'Course Highlights'} hightlightListItems={course?.highlights} />
                    <div className="course-language">
                        <h1>Course Language</h1>
                        <ul>
                            <li>{course?.language}</li>
                        
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="Teachers-Container">
                        <h1>Know your Teachers</h1>
                        <div className="teacher-grid-box">
                            <Card title={'Rahul Awasthi'} image={'/images/dummy.png'} description={'5000+ Students taught'} text={'Vidya Education'} icon={Hat} />
                            <Card title={'Rahul Awasthi'} image={'/images/dummy.png'} description={'5000+ Students taught'} text={'Vidya Education'} icon={Hat} />
                            <Card title={'Rahul Awasthi'} image={'/images/dummy.png'} description={'5000+ Students taught'} text={'Vidya Education'} icon={Hat} />
                        </div>
                    </div>
                </section>
                <section>
                    <h1>Select Batch</h1>
                    <div className="Batch-Card-Grid">
                        {course?.batches?.map(item=>{
                           return <BatchCard item={item} price={course?.price} batchStarting={course?.batchStarting} enrollmentEndDate={course?.enrollmentEndDate} days={course?.days}/>
                        })}
                        
                    
                   
                    </div>
                    <div className="Price-Container">
                        <div><span className="discounted-price">₹{course?.price}</span><span className="Price">₹50,000</span></div>
                        <button className="get-started">get started</button>
                    </div>
                </section>
                <section>
                    <h1>Similar Courses</h1>
                    <div className="Test-Series-Grid">
                        <div className="Similiar-Courses-Grid">
                           { courses.map((item)=>{
                            if(item?._id!=course?._id)
                            return  <HorizontalCard image={'/images/dummy.png'} item={item} title={item?.title} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal2={'Hinglish'} />
                            })}
                            
                            
                        </div>
                    </div>
                </section>
                <section>
                    <h1>Similar Test Series</h1>
                    <div className="Test-Series-Grid">
                        <TestSeriesCard />
                        <TestSeriesCard />
                        <TestSeriesCard />
                    </div>
                </section>
                <section>
                    <MobileCall />
                </section>
            </div>
            <Footer />

        </>
    )
}