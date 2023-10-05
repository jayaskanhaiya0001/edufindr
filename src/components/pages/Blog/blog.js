import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../common/Header/header";
import { Footer } from "../../common/Footer/footer";
import LottieControl from "../../common/Loader/loader";
import axios from "axios";
import "./blog.css"
export const BlogPage = () => {
    const param = useParams();
    const [blog, setBlog] = useState({})
    const [loader, setLoader] = useState(false)
    const getBlog = async () => {
        try {
            let res = await axios.get(`https://edu-server-side-2023.onrender.com/api/v1/blog/${param?.id}`)
            if (res?.data?.success) {
                setBlog(res?.data?.data)
                setLoader(true)
            }
        } catch (err) {

        }
    }
    useEffect(() => {
        getBlog()
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {
                !loader ? (
                    <>
                        <div className="Loader-Container">
                            <LottieControl isStopped={false} isPaused={false} />
                        </div>
                    </>
                ) : (

                    <>
                        <Header />
                        <div className="Course-Detail-Top-Container">
                            <section>
                                <div className="Indvidual-Blog-Main-Container">
                                    <div className="Indvidual-Blog-ImageContainer">
                                        <img src={blog?.image ? blog?.image : "/images/dummy.png"} alt="dummyImage" className="Blog-Page-Image" />
                                    </div>
                                    <div className="Indvidual-Blog-Content-Container">
                                        <h1 className="Indvidual-Blog-Content-Heading">{blog?.title}</h1>
                                        <p className="Indvidual-Blog-Content-Paragraph">{blog?.content}</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <Footer />

                    </>
                )
            }

        </>
    )
}