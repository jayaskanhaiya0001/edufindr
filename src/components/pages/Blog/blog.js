import { Header } from "../../common/Header/header";
import { Footer } from "../../common/Footer/footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./blog.css"
export const BlogPage = () => {
    const param = useParams();
    const [blog, setBlog] = useState({})
    const getBlog = async () => {
        try {
            let res = await axios.get(`https://courseselling.onrender.com/api/v1/blog/${param?.id}`)
            if(res?.data?.success){
                setBlog(res?.data?.data)
            } 
        } catch (err) {

        }
    }
    useEffect(() => {
        getBlog()
    }, [])
    console.log(blog)
    return (
        <>
            <Header />
            <div className="Course-Detail-Top-Container">
                <section>
                    <div className="Indvidual-Blog-Main-Container">
                        <div className="Indvidual-Blog-ImageContainer">
                            <img src={blog?.image ? blog?.image :"/images/dummy.png"} alt="dummyImage" className="Blog-Page-Image"/>
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