import { Fragment, useEffect, useState } from "react";
import { FreeBiesCards } from "../../common/FreebiesCommonCard/freebiesCard";
import { Header } from "../../common/Header/header";
import { Footer } from "../../common/Footer/footer";
import LottieControl from "../../common/Loader/loader";
import axios from "axios"
import "./Freebies.css";
export const Freebeis = () => {
    const [btnValue, setBtnValue] = useState([])
    const [toggle, setToggle] = useState('Videos')
    const [video, setVideo] = useState([])
    const [files, setFiles] = useState([])
    const FreebeesVideo = () => {
        axios.get(`https://courseselling.onrender.com/api/v1/getAllFreebees?filter=video`)
            .then(response => {
                setVideo(response.data?.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
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
        FreebeesVideo()
        setBtnValue([{ Value: 'Videos', url: "/icons/video-black.svg", whiteUrl: "/icons/Video.svg" }, { Value: 'File', url: "/icons/WritingWhite.svg", whiteUrl: "/icons/Writing-white.svg" }])
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {
                (video?.length > 0 && files?.length > 0) ?

                    <div className="Freebeis-Main-Container">
                        <Header />
                        <section>
                            <div className="Freebeis-Upper-Section">
                                <h1>Freebies</h1>
                                <div className="freebeis-btn-box">
                                    {btnValue?.map((data, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <button onClick={() => setToggle(data?.Value)} style={toggle === data.Value ? { background: "#722E60", transition: "2s", color: "#fff", transitionTimingFunction: "ease", borderRadius: "8px" } : { background: "#fff" }}><span><img src={toggle === data.Value ? data?.whiteUrl : data?.url} className="freebeis-icon" /></span><span>{data.Value}</span></button>
                                            </Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                        <div className="Freebeis-Card-Container">
                            <section>

                                {
                                    toggle !== 'File' ? (
                                        <>
                                            <div className="FreebeisVideoGrid">
                                                {
                                                    video?.map((item, index) => {

                                                        return (

                                                            <Fragment key={index}>


                                                                <FreeBiesCards freebies={"Video"} title={item?.about} url={item?.value} target={""} />
                                                            </Fragment>

                                                        )
                                                    })
                                                }
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="FreebeisFilesGrid">
                                                {
                                                    files?.map((data, index) => {
                                                        return (
                                                            <Fragment key={index}>
                                                                <FreeBiesCards title={data.about} path={data?.value} target={"_blank"} />
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </>
                                    )
                                }
                            </section>
                        </div>
                        <Footer />
                    </div>
                    : (
                        <>
                            <div className="Loader-Container">
                                <LottieControl isStopped={false} isPaused={false} />
                            </div>

                        </>
                    )
            }
        </>
    )
}