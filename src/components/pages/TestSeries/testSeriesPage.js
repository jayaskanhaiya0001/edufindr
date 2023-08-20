import { TestSeriesNav } from "../../common/TestSeries/testSeries";
import { TestSeriesSection } from "../../common/TestSeriesSection/testSeriesSection";
import { MobileCall } from "../../common/MobileCall/mobileCall";
import OnlineTestSeries from "../../../assets/Images/Online-Test-Series.svg";
import "./testSeriesPage.css";
const NavItem = ['SSC', 'Teaching Exams', 'UPSC', 'civil service', 'GATE', 'AE & JE', 'Goverment Exmas', 'Bamnking & Insurance', 'Degfence Exams', 'Raleway', 'Teaching'];
export const TestSeriesPage = () => {
    return (
        <>
            <div className="Test-Series-Page-Container">
                <section>
                    <div className="hero-section">
                        <div className="content-box">
                            <div>
                                <h1 className="top-heading">
                                    India’s #1 Online Test <br /> Series Platform
                                </h1>
                                <p className="discription">Boost your exam preparation with Test Series <br /> for Banking</p>
                            </div>
                            <div className="search-bar-container">
                                <h3 className="input-heading">Which exam you preparing for?</h3>
                                <div className="input-box">
                                    <input type="text" placeholder="search for your exam" />
                                    <span className="search-icon-box"> <img src="" alt="" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src={OnlineTestSeries} alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Test-Series-Category-Container">
                        <div className="Category-Top-Box">
                            <h2>Test Series by Categories</h2>
                            <div className="search-bar-container">
                                <div className="input-box">
                                    <input type="text" placeholder="search for your exam" />
                                    <span className="search-icon-box"> <img src="" alt="" /></span>
                                </div>
                            </div>
                        </div>
                        <TestSeriesNav NavItem={NavItem} />
                    </div>
                </section>
                <section>
                    <TestSeriesSection/>
                </section>
                <section>
                    <MobileCall/>
                </section>
            </div>

        </>
    )
}