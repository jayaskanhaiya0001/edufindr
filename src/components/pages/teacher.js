import { Highlight } from "../common/Highlight/highlight";
import { About } from "../common/About/about";
import { Course } from "../common/Course/course";
import { MobileCall } from "../common/MobileCall/mobileCall";
import { HorizontalCard } from "../common/HorizontalCard/horizontalcard";
import "./teacher.css";
const HightLightList = ["CoFounder of Vidya Education, one of the pioneer institute for BPSC aspirants.", "Eminent Faculty for History and Geography.", "Well Known for his unique teaching style and his motivation lectures among students."]
export const TeacherDetail = () => {
    return (
        <>
            <div className="Teacher-Detail-Container">
                <div className="teacher-personal-detail">
                    <img src="/images/teacher.png" alt="" className="Teacher-Profile-image" />
                    <div className="basic-detail">
                        <div>
                            <h1 className="Teacher-Name">Rahul Chandra <img src="" alt="" /></h1>
                            <p className="Teacher-Dsignation"><span>Director. Vidya Education</span><span>+1 More</span></p>
                        </div>
                        <div>
                            <p className="Teacher-Cmn-Dtl"><span><b className="bold">50000+</b> Students Taught</span><span><b className="bold">28+ Years</b> of Experience</span><span><b className="bold">500+</b> Selectors</span></p>
                        </div>
                    </div>
                </div>
                <About heading={'About Professor'} about={'Rahul Chandra is a renowned name is UPSC fraternity for his deep understanding of the Anthropology optional. He has industry experience of more than 10 years and is already known to have given toppers like Parikshit Thoudam, Devesh Chaturvedi, Bokka Chaitanya Redyy and many more.'} color={'#722E60'} />
                <Highlight heading={'Highlights'} hightlightListItems={HightLightList} color={"#722E60"} />
                <div className="Eductation-Box">
                    <h1 className="education-head">Education</h1>
                    <ul className="education-ul-list">
                        <li><img /> B Tech Biochemical Engineering</li>
                        <li><img /> 2009 - 2013</li>
                    </ul>
                </div>
                <div className="Ind-Teacher-Courses">
                    <h1 className="Heading">Courses By Rahul Chandra</h1>
                    <div className="teacher-page-course-grid-box">
                        <HorizontalCard image={'./images/dummy.png'} title={'GS Foundation'} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal2={'Hinglish'} />
                        <HorizontalCard image={'./images/dummy.png'} title={'GS Foundation'} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal2={'Hinglish'} />
                        <HorizontalCard image={'./images/dummy.png'} title={'GS Foundation'} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal2={'Hinglish'} />
                        <HorizontalCard image={'./images/dummy.png'} title={'GS Foundation'} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal2={'Hinglish'} />
                        <HorizontalCard image={'./images/dummy.png'} title={'GS Foundation'} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal2={'Hinglish'} />
                        <HorizontalCard image={'./images/dummy.png'} title={'GS Foundation'} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal2={'Hinglish'} />
                    </div>
                </div>
                {/* <MobileCall /> */}
            </div>
        </>
    )
}