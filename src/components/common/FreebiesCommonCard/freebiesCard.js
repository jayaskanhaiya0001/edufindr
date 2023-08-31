import Timer from "../../../assets/Icons/Timer.svg";
import Calendar from "../../../assets/Icons/Calendar.svg"
import "./Freebiescard.css";
export const FreeBiesCards = ({ data, freebies='video'}) => {
    return (
        <>
            <div className="FreeeBies-Card">
                <div className="Freebies-View-Card">
                    {(freebies === "Video") ? (
                        <>
                            <iframe src="https://www.youtube.com/watch?v=y7MW7d8fb1Y&list=RDy7MW7d8fb1Y&start_radio=1" width="100%" height="100%" ></iframe>

                        </>
                    ) : (
                        <>
                            <img src={data?.image ? data?.image : "/images/dummy.png"} alt="freebies" />
                        </>
                    )
                    }
                </div>
                <div className="Freebies-View-Content">
                    {
                       (<><p className="date-container"><span><img src={Timer} alt="timer" />8 min read</span> <span><img src={Calendar} alt="claendar" />{data?.createdAt}</span></p></>)
                    }
                    <div>
                        <h3 className="Freebies-title">{data?.title ? data?.title : "UPSC History Syllabus for UPSC Mains 2024"}</h3>
                        {/* {subTitle && (<><h3 className="Freebies-title">{subTitle}</h3></>)} */}
                    </div>
                    {
                        data?.content && (<><p className="Freebies-discription">{data?.content ? data?.content : 'Millions of Indian youth aspire to clear the Civil Services Exam yearly to serve our country. Still, due to the intense competition and limited postings'}</p></>)
                    }
                </div>
            </div>
        </>
    )
}