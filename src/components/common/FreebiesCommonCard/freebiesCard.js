import Timer from "../../../assets/Icons/Timer.svg";
import Calendar from "../../../assets/Icons/Calendar.svg";
import { useNavigate } from "react-router-dom";
import "./Freebiescard.css";
export const FreeBiesCards = ({ data, freebies , path , id}) => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        if(!path) {
            return;
        } else {
            navigate(`/blog/${id}`,)
        }
    }
    return (
        <>
            <div className="FreeeBies-Card" onClick={() => handleRedirect(path , id)}>
                <div className="Freebies-View-Card">
                    {(freebies === "Video") ? (
                        <>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/y7MW7d8fb1Y?si=L3eN2KVbDUR2ya8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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