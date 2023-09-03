import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Header } from "../../common/Header/header";
import { Footer } from "../../common/Footer/footer";
import { Button } from "../../common/Button/button";
import { TestSeriesCard } from "../../common/TestSeriesCard/testSeries";
import { MobileCall } from "../../common/MobileCall/mobileCall";
import LottieControl from "../../common/Loader/loader";
import "./testSeries.css";
const hightlightListItems = ['Course Highlights Complete coverage of syllabus', 'Focus on building concepts.', 'Bi-weekly doubt resolution session.', '6 Class tests and 2 Full-length mock tests are included.', 'Special sessions for answer writing,']
export const TestSeries = () => {
    const location = useLocation();
    const params = useParams()
    const [testSeriesInfo, setTestSeriesInfo] = useState([])
    const [individualTestInfo, setIndividualTestInfo] = useState({})
    const [date, setDate] = useState({ date: "", month: "", year: "" })
    const [language, setLaguage] = useState([])
    const [loader, setLoader] = useState(false)
    const getTestSeriesInfo = async () => {
        try {
            let res = await axios.get(`https://courseselling.onrender.com/api/v1/getAllTest?category=${location?.state?.category}&exam=${location?.state?.exam}`)
            if (res?.status === 200) {
                setTestSeriesInfo(res?.data)
                setLoader(true)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const getIndividualTestSeries = async () => {
        try {
            let res = await axios.get(`https://courseselling.onrender.com/api/v1/Test/${params?.id}`)
            if (res?.status === 200) {
                setIndividualTestInfo(res?.data?.data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const getLanguage = () => {
        let language = individualTestInfo?.languages?.map((data, index) => individualTestInfo?.languages?.length - 1 === index ? `${"& " + data?.lanuguage
            }` : data?.lanuguage)
        if (language) {
            setLaguage(language?.join(", "))
        }
    }


    useEffect(() => {
        getIndividualTestSeries()
        getTestSeriesInfo()
    }, [])

    useEffect(() => {
        const date = new Date(`${individualTestInfo?.updatedAt}`)
        const month = date.toLocaleString('default', { month: 'long' });
        if (date && month) {
            setDate({ date: date.getDate(), month: month, year: date.getFullYear() })
        }
        if (individualTestInfo?.languages) {
            getLanguage()
        }
    }, [individualTestInfo])

    return (
        <>
            {!loader ? (
                <>
                    <div className="Loader-Container">
                        <LottieControl isStopped={false} isPaused={false} />
                    </div>


                </>
            ) : (
                <>
                    <Header />
                    <div className="Course-Detail-Top-Container">
                        <section id="Hero-Section">
                            <div className="main-container">
                                <div className="Left-Box">
                                    <h1 style={{ textTransform: "capitalize" }}>{individualTestInfo?.title}<br />(Prelims Cum Mains)</h1>
                                    <p>Last updated on <b>{date?.month + " " + date?.date + ", " + date?.year}</b></p>
                                    <div className="Starbox-Container">
                                        <div className="Rating-Box">{individualTestInfo?.rating}</div>
                                        <img src="/images/Star.svg" alt="star" />
                                        <img src="/images/Star.svg" alt="star" />
                                        <img src="/images/Star.svg" alt="star" />
                                        <img src="/images/Star.svg" alt="star" />
                                        <img src="/images/Star.svg" alt="star" />
                                    </div>
                                    <div className="Individual_Test_Series_Extra_Detail">
                                        <ul>
                                            <li>
                                                {individualTestInfo?.totalTest} Total Tests
                                            </li>
                                            <li>
                                                {individualTestInfo?.freeTest} Free Tests
                                            </li>
                                            <li>
                                                11.5K Users
                                            </li>
                                            <li>
                                                {language}
                                            </li>
                                        </ul>
                                        <ul>
                                            {individualTestInfo?.testDivision?.map((data, index) => {
                                                return (
                                                    <>
                                                        <li key={index}>{data?.key} ( {data?.value} )</li>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                        <p className="More_Test">+685 more tests</p>
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
                                    <div><span className="discounted-price">₹{individualTestInfo?.price}</span><span className="Price">₹50,000</span></div>
                                    <button className="get-started">get started</button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <div className="Ind-Description-Container">
                                <h1>Test Series Description</h1>
                                <div className="Ind-Description-Content">
                                    <div className="ind-des-head-box">
                                        <h1>About Test Series</h1>
                                        <p>{individualTestInfo?.about}</p>
                                    </div>
                                    <div className="ind-des-head-box">
                                        <h1>Test Series Highlights</h1>
                                        <ul>
                                            {individualTestInfo?.highlights?.map((data , index) => {
                                                return (
                                                    <>
                                                        <li key={index}>{data?.description}</li>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="course-language">
                                        <h1>Test Series Language</h1>
                                        <ul>
                                            {
                                                individualTestInfo?.languages?.map((data, index) => {
                                                    return (
                                                        <>
                                                            <li key={index}>{data?.lanuguage}</li>
                                                        </>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </section>
                        <section>
                            <div className="More_Test_Series_Container">
                                <h1 className="More_Test_Series_Heading">Explore More Related Test Series</h1>
                                <div className="Test-Series-Grid">
                                    {testSeriesInfo?.Tests?.map((data, index) => {
                                        return (
                                            <>
                                                <TestSeriesCard data={data} exam={location?.state?.exam} category={location?.state?.category} id={data?._id} key={index} />
                                            </>
                                        )
                                    })}
                                </div>
                                <Button width={'max-content'} value={'Explore all Test Series'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} margin={'0 auto'} Path={'/testseries'} />
                            </div>

                        </section>
                        <section>
                            <MobileCall />
                        </section>
                    </div>
                    <Footer />
                </>
            )}

        </>
    )
}