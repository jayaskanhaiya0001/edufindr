import { useNavigate } from "react-router-dom";
import { Button } from "../Button/button";
import "./testSeries.css";
export const TestSeriesCard = ({ data, id, exam, category , key}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="test-series-container" onClick={() => navigate(`/testseries/test/${id}`, { state: { category: category, exam: exam } })} key={key}>
                <div className="test-series-main-box">
                    <div className="title-box">
                        <button className="User-count-button"> <img src="/images/Strength.svg" />{data?.alreadyEnrolled} Users</button>
                        <h2 className="test-series-title" style={{textTransform: "capitalize"}}>{data?.title}<br />2023 (Tier I & Tier II)</h2>
                        <p className="test-series-test-desc">{data?.totalTest} Total Tests | {data?.freeTest} Free Tests</p>
                    </div>
                    <div className="translate-box">
                        <p className="translate-language"><img src="/images/translate.svg" alt="translate" />
                            {data?.languages?.map((item) => {
                                return (item.lanuguage) + ","
                            })}
                        </p>
                    </div>
                    <ul className="Updated-test-box">
                        {data?.testDivision?.map((data , index) => {
                            return (
                                <>
                                    <li key={index}>{data?.key} ( {data?.value} )</li>
                                </>
                            )
                        })}
                        <span>+685 more tests</span>
                    </ul>
                </div>
                <Button value={'View Test Series'} background={'#722E60'} txtColor={'#fff'} borderRadius={'4px'} />
            </div>
        </>
    )
}