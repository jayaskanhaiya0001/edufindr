import { UpperHeader } from "../common/Heading/upperHeader";
import { About } from "../common/About/about";
import { Highlight } from "../common/Highlight/highlight";
import { Card } from "../common/Card/card";
import { BatchCard } from "../common/BatchCard/batchCard";
import { MobileCall } from "../common/MobileCall/mobileCall";
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
import VideoAccess from "../../assets/Course-Detailed-Page/Extended-Video-Access.svg"
import "./courseDetail.css";
const hightlightListItems = ['Course Highlights Complete coverage of syllabus', 'Focus on building concepts.', 'Bi-weekly doubt resolution session.', '6 Class tests and 2 Full-length mock tests are included.', 'Special sessions for answer writing,']
const AllFeatures = [{ title: "Detail class Notes hard copy", imgurl: HardCopy }, { title: "Test Series", imgurl: TestSeriesIcon }, { title: "Online Live Lectures", imgurl: LiveLectures }, { title: "Recorded Video Lectures", imgurl: RecordedLectures }, { title: "Doubt solving session", imgurl: DoubtSession }, { title: "Answer paper writting", imgurl: AnswerPaper }, { title: "Extended video access", imgurl: VideoAccess }]
export const CourseDetail = () => {
    return (
        <>
            <div className="Course-Detail-Top-Container">
                <section id="Hero-Section">
                    <div className="main-container">
                        <div className="Left-Box">
                            <button className="Class-Mode">Online</button>
                            <h1>GS Foundation <br />(Prelims Cum Mains)</h1>
                            <p>By: <b>Snehil Tripathi & Team</b></p>
                            <div className="Starbox-Container">
                                <div className="Rating-Box">4.7</div>
                                <img src="/images/Star.svg" alt="star" />
                                <img src="/images/Star.svg" alt="star" />
                                <img src="/images/Star.svg" alt="star" />
                                <img src="/images/Star.svg" alt="star" />
                                <img src="/images/Star.svg" alt="star" />
                            </div>
                            <div className="Course-Basic-Detail">
                                <div className="Course-Basic-Detail-Row">
                                    <div className="">
                                        <div className="Icon-box">
                                            <img src={Translate} alt="translate" />
                                        </div>
                                        <div className="Course-Basic-Content">
                                            <h3>Course Language</h3>
                                            <span>English</span>
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
                                            <span>15</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="Icon-box">
                                            <img src={Duration} alt="Duration" />
                                        </div>
                                        <div className="Course-Basic-Content">
                                            <h3>Duration</h3>
                                            <span>8 Weeks</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Right-Box">
                            <div className="Course-Start-Detail-Container">
                                <img src="/images/dummy.png" alt="dummy" />
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Price-Container">
                        <div><span className="discounted-price">₹48,585</span><span className="Price">₹50,000</span></div>
                        <button className="get-started">get started</button>
                    </div>
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
                    <About heading={'About Course'} about={'The 5-month course covers both papers of Public Administration optional in detail.'} />
                    <Highlight heading={'Course Highlights'} hightlightListItems={hightlightListItems} />
                    <div className="course-language">
                        <h1>Course Language</h1>
                        <ul>
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Public Administration</li>
                        </ul>
                    </div>
                </section>
                {/* <section>
                    <div className="Teachers-Container">
                        <h1>Know your Teachers</h1>
                        <div className="teacher-grid-box">
                            <Card title={'Rahul Awasthi'} image={'/images/dummy.png'} description={'5000+ Students taught'} text={'Vidya Education'} icon={Hat} />
                            <Card title={'Rahul Awasthi'} image={'/images/dummy.png'} description={'5000+ Students taught'} text={'Vidya Education'} icon={Hat} />
                            <Card title={'Rahul Awasthi'} image={'/images/dummy.png'} description={'5000+ Students taught'} text={'Vidya Education'} icon={Hat} />
                        </div>
                    </div>
                </section> */}
                {/* <section>
                    <h1>Select Batch</h1>
                    <div className="Batch-Card-Grid">
                        <BatchCard />
                        <BatchCard />
                    </div>
                </section> */}
                {/* <section>
                    <div className="Price-Container">
                        <div><span className="discounted-price">₹48,585</span><span className="Price">₹50,000</span></div>
                        <button className="get-started">get started</button>
                    </div>
                </section> */}
                {/* <section>
                    <h1>Similar Test Series</h1>
                    <div className="Test-Series-Grid">
                        <TestSeriesCard />
                        <TestSeriesCard />
                        <TestSeriesCard />
                        <TestSeriesCard />
                    </div>
                </section> */}
                {/* <section>
                    <MobileCall />
                </section> */}
            </div>

        </>
    )
}