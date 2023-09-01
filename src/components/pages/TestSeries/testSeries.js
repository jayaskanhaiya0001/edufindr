import { Header } from "../../common/Header/header";
import { Footer } from "../../common/Footer/footer";
import { UpperHeader } from "../../common/Heading/upperHeader";
import { About } from "../../common/About/about";
import { Highlight } from "../../common/Highlight/highlight";
import { TestSeriesCard } from "../../common/TestSeriesCard/testSeries";
import { MobileCall } from "../../common/MobileCall/mobileCall";
import { useLocation , useParams} from "react-router-dom";
import { useEffect , useState} from "react";
import axios from "axios";
const hightlightListItems = ['Course Highlights Complete coverage of syllabus', 'Focus on building concepts.', 'Bi-weekly doubt resolution session.', '6 Class tests and 2 Full-length mock tests are included.', 'Special sessions for answer writing,']
export const TestSeries = () => {
    const location = useLocation();
    const params = useParams()
    console.log(location , "Location")
    const [testSeriesInfo , setTestSeriesInfo] = useState([]) 
    const [individualTestInfo , setIndividualTestInfo] = useState({})
    const getTestSeriesInfo = async () => {
        try {
            let res = await axios.get(`https://courseselling.onrender.com/api/v1/getAllTest?category=${location?.state?.category}&exam=${location?.state?.exam}`)
            if(res?.status === 200) {
                setTestSeriesInfo(res?.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const getIndividualTestSeries = async () => {
        try {
            let res = await axios.get(`https://courseselling.onrender.com/api/v1/Test/${params?.id}`)
            console.log(res)
            if(res?.status === 200) {
                setIndividualTestInfo(res?.data?.data)
            }
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getIndividualTestSeries()
        getTestSeriesInfo()
    } , [])
    return (
        <>
            <Header />
            <div className="Course-Detail-Top-Container">
                <section id="Hero-Section">
                    <div className="main-container">
                        <div className="Left-Box">
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
                        </div>
                        <div className="Right-Box">
                            <div className="Course-Start-Detail-Container">
                                <img src="/images/dummy.png" alt="dummy" />
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="Price-Container">
                            <div><span className="discounted-price">₹48,585</span><span className="Price">₹50,000</span></div>
                            <button className="get-started">get started</button>
                        </div>
                    </section>
                </section>
                <section>
                    <UpperHeader title={'Test Series Description'} />
                    <About heading={'About Test Series'} about={'The 5-month course covers both papers of Public Administration optional in detail.'} />
                    <Highlight heading={'Course Highlights'} hightlightListItems={hightlightListItems} />
                    <div className="course-language">
                        <h1>Test Series Language</h1>
                        <ul>
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Public Administration</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h1>Explore More Related Test Series</h1>
                    <div className="Test-Series-Grid">
                        <TestSeriesCard />
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