import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FreeBiesCards } from "../../common/FreebiesCommonCard/freebiesCard";
import { Header } from "../../common/Header/header";
import { Footer } from "../../common/Footer/footer";
import axios from "axios"
import "./Freebies.css";
export const Freebeis = () => {
    const location = useLocation();
    const [toggle, setToggle] = useState('File')
    return (
        <>
            <div className="Freebeis-Main-Container">
                <Header />
                <section>
                    <div className="Freebeis-Upper-Section">
                        <h1>Freebies</h1>
                        <div><button><img /><span>Videos</span></button><button><img /><span>Videos</span></button></div>
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
                                    <FreebeisBlog FreeBiesCards={FreeBiesCards} />
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
    return (
        <>
            <div className="FreebeisVideoGrid">
                <FreeBiesCards />
            </div>
        </>
    )
}

const FreebeisFiles = ({ FreeBiesCards }) => {
    const [files, setFiles] = useState([])
    const InvokeFreebiesFile = () => {
        const FreebiesFiles = [];
        for (let i = 0; i < 20; i++) {
            FreebiesFiles.push({ title: "Class 9th: History", subtitle: "India and the Contemporary World-1" })
        }
        setFiles(FreebiesFiles)
    }
    useEffect(() => {
        InvokeFreebiesFile()
    }, []);
    console.log(files)
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

const FreebeisBlog = ({ FreeBiesCards }) => {
    const [blogs, setBlogs] = useState([])
    // const InvokeFreebiesBlog = () => {
    //     const FreebiesBlogs = [];
    //     for (let i = 0; i < 20; i++) {
    //         FreebiesBlogs.push({ title: "UPSC History Syllabus for UPSC Mains 2024", disc: "Millions of Indian youth aspire to clear the Civil Services Exam yearly to serve our country. Still, due to the intense competition and limited postings" })
    //     }
    //     setBlogs(FreebiesBlogs)
    // }
    const InvokeFreebiesBlog = () => {
        axios.get('https://courseselling.onrender.com/api/v1/blogs')
            .then(response => {
console.log(response.data)
                setBlogs(response.data?.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

useEffect(() => {
    InvokeFreebiesBlog()
}, []);
return (
    <>
        <div className="FreebeisBlogGrid">
            {
                blogs?.map((data) => {
                    return (
                        <>
                            <FreeBiesCards data={data} date={true} />
                        </>
                    )
                })
            }
        </div>
    </>
)
}