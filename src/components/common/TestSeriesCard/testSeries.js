import "./testSeries.css";
import { Button } from "../Button/button"
export const TestSeriesCard = ({data}) => {
    return (
        <>
            <div className="test-series-container">
                <div className="test-series-main-box">
                    <div className="title-box">
                        <button className="User-count-button"> <img src="/images/Strength.svg"/>{data?.alreadyEnrolled} Users</button>
                        <h2 className="test-series-title">{data?.title}<br />2023 (Tier I & Tier II)</h2>
                        <p className="test-series-test-desc">832 Total Tests | {data?.freeTest} Free Tests</p>
                    </div>
                    <div className="translate-box">
                        <p className="translate-language"><img src="/images/translate.svg" alt="translate"/>
                        {data?.languages?.map((item)=>{
                            return (item.lanuguage)+","
                        })}
                       </p>
                    </div>
                    <ul className="Updated-test-box">
                        <li>53 New Test Additions</li>
                        <li>39 Full Test (Tier I)</li>
                        <li>55 Sectional Test (Tier I)s</li>
                        <span>+685 more tests</span>
                    </ul>
                </div>
                <Button value={'View Test Series'} background={'#722E60'} txtColor={'#fff'} borderRadius={'4px'}/>
            </div>
        </>
    )
}