import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FreeBiesCards } from "../../common/FreebiesCommonCard/freebiesCard";
import { Header } from "../../common/Header/header";
import { Footer } from "../../common/Footer/footer";
import axios from "axios"
import "./Freebies.css";
export const Freebeis = () => {
    const location = useLocation();
    const [btnValue, setBtnValue] = useState([])
    const [toggle, setToggle] = useState('File')
    useEffect(() => {
        if (location.pathname !== "/freebeis") {
            setBtnValue([{ Value: 'All', url: "" }, { Value: 'SSC', url: "" }, { Value: 'UPSC', url: "" }, { Value: 'Civil Services', url: "" }, { Value: 'Teaching Exams', url: "" }, { Value: 'Goverment Exams', url: "" }, { Value: 'Railway', url: "" }])
            setToggle("All")
        } else {
            setBtnValue([{ Value: 'Videos', url: "/icons/Video.svg" }, { Value: 'File', url: "/icons/WritingWhite.svg" }])
            setToggle("File")
        }
        
    }, [location.pathname])
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]) 
    return (
        <>
            <div className="Freebeis-Main-Container">
                <Header />
                <section>
                    <div className="Freebeis-Upper-Section">
                        <h1>Freebies</h1>
                        <div className="freebeis-btn-box">
                            {location.pathname === "/freebeis" ? (<>
                                {btnValue?.map((data , index) => {
                                    return (
                                        <Fragment key={index}>

                                            <button onClick={() => setToggle(data?.Value)} style={toggle === data.Value ? { background: "#722E60", transition: "2s", color: "#fff", transitionTimingFunction: "ease", borderRadius: "8px" } : { background: "#fff" }}><span><img src={data?.url} className="freebeis-icon" /></span><span>{data.Value}</span></button>
                                        </Fragment>
                                    )
                                })}


                            </>) : (
                                <>
                                    {btnValue?.map((data , index) => {
                                        return (
                                            <Fragment key={index}>
                                                <button onClick={() => setToggle(data?.Value)} style={toggle === data.Value ? { background: "#722E60", transition: "2s", color: "#fff", transitionTimingFunction: "ease", borderRadius: "8px" } : { background: "#fff" }}><span>{data.Value}</span></button>
                                            </Fragment>
                                        )
                                    })}
                                </>
                            )}
                        </div>
                    </div>
                </section>
                <div className="Freebeis-Card-Container">
                    <section>
                        {
                            location.pathname === "/freebeis" ? (
                                <>
                                    {
                                        toggle !== 'File' ? (
                                            <>
                                                <FreebeisVideo FreeBiesCards={FreeBiesCards} />
                                            </>
                                        ) : (
                                            <>
                                                <FreebeisFiles FreeBiesCards={FreeBiesCards} />
                                            </>
                                        )
                                    }

                                </>
                            ) : (
                                <>
                                    <FreebeisBlog toggle={toggle} FreeBiesCards={FreeBiesCards} />
                                </>
                            )}
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}

const FreebeisVideo = ({ FreeBiesCards }) => {
    const [video, setVideo] = useState([])
    const FreebeesVideo = () => {
        axios.get(`https://courseselling.onrender.com/api/v1/getAllFreebees?filter=video`)
            .then(response => {
                setVideo(response.data?.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    useEffect(() => {
        FreebeesVideo()
    }, []);
    return (
        <>
            <div className="FreebeisVideoGrid">
                {
                    video?.map((item , index) => {

                        return (

                            <Fragment key={index}>


                                <FreeBiesCards freebies={"Video"} title={item?.about} url={item?.value} target={""} />
                            </Fragment>
                        
                        )
                    })
                }
            </div>
        </>
    )
}

const FreebeisFiles = ({ FreeBiesCards }) => {
    const [files, setFiles] = useState([])
    const InvokeFreebiesFile = () => {
        axios.get(`https://courseselling.onrender.com/api/v1/getAllFreebees?filter=file`)
            .then(response => {
                setFiles(response.data?.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    useEffect(() => {
        InvokeFreebiesFile()
    }, []);
    return (
        <>
            <div className="FreebeisFilesGrid">
                {
                    files?.map((data , index) => {
                        return (
                            <Fragment key={index}>
                                <FreeBiesCards title={data.about}  path={data?.value} target={"_blank"}/>
                            </Fragment>
                        )
                    })
                }
            </div>
        </>
    )
}

const FreebeisBlog = ({ FreeBiesCards, toggle }) => {
    const [blogs, setBlogs] = useState([])
    const InvokeFreebiesBlog = () => {
        axios.get(`https://courseselling.onrender.com/api/v1/blogs?tag=${toggle}`)
            .then(response => {
                setBlogs(response.data?.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        InvokeFreebiesBlog()
    }, [toggle]);
    return (
        <>
            <div className="FreebeisBlogGrid">
                {blogs.length === 0 ? <h1>No Blogs are their for this category</h1> :
                    blogs?.map((data , index) => {
                        return (
                            <Fragment key={index}>
                                <FreeBiesCards data={data} title={data?.title} date={true} path={`/blog/${data?._id}`}  target={""} key={index}/>
                            </Fragment>
                        )
                    })
                }
            </div>
        </>
    )
}