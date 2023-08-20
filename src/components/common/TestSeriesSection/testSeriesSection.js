import "./testSeriesSection.css";
import { Button } from "../Button/button"
export const TestSeriesSection = () => {
    return (
        <>
            <div className="TestSeriesSection-Container">
                <div className="Img-Box">
                    <img src="/images/Wavy_Tech-31_Single-01.svg" alt="" />
                </div>
                <div className="TestSeriesSection-Content-Box">
                    <div className="TestSeriesSection-Heading-Box">
                        <span>Test Series</span>
                        <h2 className="TestSeriesSection-Heading">Enroll In Test Series</h2>
                        <p className="TestSeriesSection-Disc">Get exam-ready with concepts, questions and study notes as per the latest pattern</p>
                    </div>
                    <div>
                        <h2 className="TestSeriesSection-Heading" style={{ marginTop: "40px", marginBottom: "24px" }}>What You’ll Get</h2>
                        <div className="TestSeriesSection-Grid-Box">
                            <div className="TestSeriesSection-Flex-Box">
                                <div className="TestSeriesSection-Rectangle-Box">
                                    <img src="" alt="" />
                                </div>
                                <p>Get <br />exam-ready</p>
                            </div>
                            <div className="TestSeriesSection-Flex-Box">
                                <div className="TestSeriesSection-Rectangle-Box">
                                    <img src="" alt="" />
                                </div>
                                <p>Latest Exam <br />Patterns</p>
                            </div>
                            <div className="TestSeriesSection-Flex-Box">
                                <div className="TestSeriesSection-Rectangle-Box">
                                    <img src="" alt="" />
                                </div>
                                <p>In-depth  <br /> Performance <br />Analysisexam</p>
                            </div>
                            <div className="TestSeriesSection-Flex-Box">
                                <div className="TestSeriesSection-Rectangle-Box">
                                    <img src="" alt="" />
                                </div>
                                <p>Multi-lingual <br />Mock Tests</p>
                            </div>
                        </div>
                    </div>
                    <Button value={'Explore Test Series Now'} background={'#000'} txtColor={'#FFF'} border={'none'} margin={'57px 0 0 0'}/>
                </div>
            </div>
        </>
    )
}