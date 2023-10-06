import Timer from "../../../assets/Icons/Timer.svg";
import Calendar from "../../../assets/Icons/Calendar.svg";
import { Link} from "react-router-dom";
import "./Freebiescard.css";
export const FreeBiesCards = ({ data, freebies, path, id, title, url, target}) => {
    return (
        <>
            <Link to={path} target={target} >
                <div className="FreeeBies-Card">
                    <div className={target !== "" ? "pdfViewer" : "Freebies-View-Card"}>
                        {(freebies === "Video") ? (
                            <>
                                <iframe width="100%" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            </>
                        ) : (
                            <>
                                {target !== "" ? <img src="/Icons/Pdf.svg" /> :

                                    <img src={data?.image ? data?.image : "/images/dummy.png"} alt="freebies" />}
                            </>
                        )
                        }
                    </div>
                    <div className="Freebies-View-Content">

                        {freebies === "Video" ? "" :

                            (<><p className="date-container"><span><img src={Timer} alt="timer" />8 min read</span> <span><img src={Calendar} alt="claendar" />{data?.createdAt.slice(0, 10)}</span></p></>)
                        }
                        <div>
                            <h3 className="Freebies-title">{title}</h3>
                            {/* {subTitle && (<><h3 className="Freebies-title">{subTitle}</h3></>)} */}
                        </div>
                        {
                            data?.content && (<><p className="Freebies-discription">{data?.content ? data?.content.slice(0, 100) : 'Millions of Indian youth aspire to clear the Civil Services Exam yearly to serve our country. Still, due to the intense competition and limited postings'}.........</p></>)
                        }
                    </div>
                </div>
            </Link>
        </>
    )
}