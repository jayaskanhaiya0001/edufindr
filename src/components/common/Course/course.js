import { Nav } from "../Navigation/nav";
import { HorizontalCard } from "../HorizontalCard/horizontalcard";
import { Sidebar } from "../Sidebar/sidebar";
import { UpperHeader } from "../Heading/upperHeader";
import { Button } from "../Button/button";
import "./course.css";
export const Course = ({ NavItem, title , children}) => {
    return (
        <>
            <div className="exam-box" style={{ paddingBottom: "100px" }}>
                <div>
                    <UpperHeader title={title} />
                    <Nav navList={NavItem} />
                </div>
                <div className="Our-Course-Main-Container">
                    <Sidebar />
                    <div className="horizontal-card-grid">
                        <HorizontalCard image={'./images/dummy.png'} title={'GS Foundation'} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal1={'30+ Courses'} bottomVal2={'Hinglish'} />
                        <HorizontalCard image={'./images/dummy.png'} title={'GS Foundation'} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal1={'30+ Courses'} bottomVal2={'Hinglish'} />
                        <HorizontalCard image={'./images/dummy.png'} title={'GS Foundation'} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal1={'30+ Courses'} bottomVal2={'Hinglish'} />
                        <HorizontalCard image={'./images/dummy.png'} title={'GS Foundation'} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal1={'30+ Courses'} bottomVal2={'Hinglish'} />
                        <HorizontalCard image={'./images/dummy.png'} title={'GS Foundation'} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal1={'30+ Courses'} bottomVal2={'Hinglish'} />
                    </div>
                </div>
                <Button value={'Get Started For Free'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} width={'fit-content'} margin={"0 auto"} />
            </div>
        </>
    )
}