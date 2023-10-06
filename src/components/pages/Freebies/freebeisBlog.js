import { Fragment, useEffect, useState } from "react";
import { FreeBiesCards } from "../../common/FreebiesCommonCard/freebiesCard";
import { Header } from "../../common/Header/header";
import { Footer } from "../../common/Footer/footer";
import LottieControl from "../../common/Loader/loader";
import axios from "axios"
import "./Freebies.css";
const btnValue = [{ Value: 'All', url: "" }, { Value: 'SSC', url: "" }, { Value: 'UPSC', url: "" }, { Value: 'Civil Services', url: "" }, { Value: 'Teaching Exams', url: "" }, { Value: 'Goverment Exams', url: "" }, { Value: 'Railway', url: "" }]
export const FreebeisBlog = () => {
    const [toggle, setToggle] = useState('All')
    const [blogs, setBlogs] = useState([])
    const InvokeFreebiesBlog = () => {
        axios.get(`https://edu-server-side-2023.onrender.com/api/v1/blogs?tag=${toggle}`)
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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {
                blogs?.length > 0 ?


                    <div className="Freebeis-Main-Container">
                        <Header />
                        <section>
                            <div className="Freebeis-Upper-Section">
                                <h1>Freebies</h1>
                                <div className="freebeis-btn-box">
                                    {btnValue?.map((data, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <button onClick={() => setToggle(data?.Value)} style={toggle === data.Value ? { background: "#722E60", transition: "2s", color: "#fff", transitionTimingFunction: "ease", borderRadius: "8px" } : { background: "#fff" }}><span>{data.Value}</span></button>
                                            </Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                        <div className="Freebeis-Card-Container">
                            <section>
                                <div className="FreebeisBlogGrid">
                                    {blogs.length === 0 ? <h1>No Blogs are their for this category</h1> :
                                        blogs?.map((data, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    <FreeBiesCards data={data} title={data?.title} date={true} path={`/blog/${data?._id}`} target={""} key={index} />
                                                </Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </section>
                        </div>
                        <Footer />
                    </div> :
                    <div className="Loader-Container">
                        <LottieControl isStopped={false} isPaused={false} />
                    </div>

            }
        </>
    )
}

