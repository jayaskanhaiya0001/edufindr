import { Highlight } from "../common/Highlight/highlight";
import { About } from "../common/About/about";
import { Course } from "../common/Course/course";
import axios from "axios";
import { useState, useEffect } from "react";
import { MobileCall } from "../common/MobileCall/mobileCall";
import { HorizontalCard } from "../common/HorizontalCard/horizontalcard";
import { Header } from "../common/Header/header";
import { Footer } from "../common/Footer/footer";
import "./teacher.css";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//const HightLightList = ["CoFounder of Vidya Education, one of the pioneer institute for BPSC aspirants.", "Eminent Faculty for History and Geography.", "Well Known for his unique teaching style and his motivation lectures among students."]
export const TeacherDetail = () => {
    const [teacher, setTeacher] = useState()
    const navigate = useNavigate();
    const { id } = useParams();
    const [HightLightList, setHightLightList] = useState()
    const getTeachersApi = () => {
        axios.get(`https://courseselling.onrender.com/api/v1/teacher/${id}`)
            .then(response => {

                setTeacher(response?.data?.data);
                setHightLightList(response?.data?.data?.highlights)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    useEffect(() => {
        // Make the API request here
        getTeachersApi()
    }, []);
    return (
        <>
            <Header />
            <div className="Teacher-Detail-Container">
                <div className="teacher-personal-detail">
                    <img src="/images/teacher.png" alt="" className="Teacher-Profile-image" />
                    <div className="basic-detail">
                        <div>
                            <h1 className="Teacher-Name">{teacher?.name}<img src="" alt="" /></h1>
                            <p className="Teacher-Dsignation"><span>{teacher?.designation}</span><span>+1 More</span></p>
                        </div>
                        <div>
                            <p className="Teacher-Cmn-Dtl"><span><b className="bold">{teacher?.studentsTaught}+</b> Students Taught</span><span><b className="bold">{teacher?.yearsOfExperience}+ Years</b> of Experience</span><span><b className="bold">{teacher?.selections}+</b> Selectors</span></p>
                        </div>
                    </div>
                </div>
                <About heading={'About Professor'} about={teacher?.about} color={'#722E60'} />
                <Highlight heading={'Highlights'} hightlightListItems={HightLightList} color={"#722E60"} />
                <div className="Eductation-Box">
                    <h1 className="education-head">Education</h1>

                    {teacher?.experiences?.map((item, index) => {
                        return (
                            <>
                                <ul className="education-ul-list" key={index}>
                                    <li><img /> {item?.institution}</li>
                                    <li><img /> {item?.year}</li>
                                </ul >
                            </>
                        )
                    })}

                </div>
                <div className="Ind-Teacher-Courses">
                    <h1 className="Heading">Courses By {teacher?.name}</h1>
                    <div className="teacher-page-course-grid-box">
                        {teacher?.courses?.map((item , index) => {
                            return (
                                <div onClick={() => { navigate(`/course/course-detail/${item?._id}`) }} key={index}>
                                    <HorizontalCard item={item} />
                                </div>
                            )
                        })}

                    </div>
                </div>
                <MobileCall />
            </div >
            <Footer />
        </>
    )
}