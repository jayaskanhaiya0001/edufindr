import { useEffect, useState } from "react";
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
    return (
        <>
            <div className="Freebeis-Main-Container">
                <Header />
                <section>
                    <div className="Freebeis-Upper-Section">
                        <h1>Freebies</h1>
                        <div className="freebeis-btn-box">
                            {location.pathname === "/freebeis" ? (<>
                                {btnValue?.map((data) => {
                                    return (
                                        <>

                                            <button onClick={() => setToggle(data?.Value)} style={toggle === data.Value ? { background: "#722E60", transition: "2s", color: "#fff", transitionTimingFunction: "ease" ,borderRadius: "8px"} : { background: "#fff" }}><span><img src={data?.url} className="freebeis-icon" /></span><span>{data.Value}</span></button>
                                        </>
                                    )
                                })}


                            </>) : (
                                <>
                                    {btnValue?.map((data) => {
                                        return (
                                            <>

                                                <button onClick={() => setToggle(data?.Value)} style={toggle === data.Value ? { background: "#722E60", transition: "2s", color: "#fff", transitionTimingFunction: "ease" ,borderRadius: "8px"} : { background: "#fff" }}><span>{data.Value}</span></button>

                                            </>
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
    const [video,setVideo]=useState([])
    const FreebeesVideo=()=>{
        axios.get(`https://courseselling.onrender.com/api/v1/getAllFreebees?filter=video`)
        .then(response => {
            setVideo(response.data?.data);
            console.log(response.data.data,"hhhhh")
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
                <FreeBiesCards freebies={"Video"} />
            </div>
        </>
    )
}

const FreebeisFiles = ({ FreeBiesCards }) => {
    const [files, setFiles] = useState([])
    const InvokeFreebiesFile = async () => {
        const FreebiesFiles = [];
        for (let i = 0; i < 20; i++) {
            FreebiesFiles.push({ title: "Class 9th: History", subtitle: "India and the Contemporary World-1" })
        }
        setFiles(FreebiesFiles)
        // let res =  axios.get(`https://courseselling.onrender.com/api/v1/blogs?tag=${toggle}`)
    }
    useEffect(() => {
        InvokeFreebiesFile()
    }, []);
    return (
        <>
            <div className="FreebeisFilesGrid">
                {
                    files?.map((data) => {
                        return (
                            <>
                                <FreeBiesCards title={data.title} subTitle={data.subtitle} />
                            </>
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
                {blogs.length == 0 ? <h1>No Blogs are their for this category</h1> :
                    blogs?.map((data) => {
                        return (
                            <>
                                <FreeBiesCards data={data} date={true} path={true} id={data?._id} />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}