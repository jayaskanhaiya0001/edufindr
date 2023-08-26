import { Nav } from "../Navigation/nav";
import { Sidebar } from "../Sidebar/sidebar";
import { Button } from "../Button/button";
import { useState } from "react";
import { TestSeriesCard } from "../TestSeriesCard/testSeries";
import "./testSeries.css";
const NavItem =  {'SSC':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Teaching Exams':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'UPSC':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'civil service':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'GATE':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'AE & JE':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Goverment Exmas':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Bamnking & Insurance':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Degfence Exams':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Raleway':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Teaching':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"]};
export const TestSeriesNav = ({ title , children}) => {
    const [category, setCategory] = useState("")
    const [exam, setExam] = useState("")
    const handleCategory = (data) => {
      setCategory(data) 
    }
    const handleExam = (data) => {
      setExam(data)
    }
    return (
        <>
        {console.log(NavItem[category],"heellllohimanshu",category)}
            <div className="exam-box">
                <div>
                    <Nav navList={NavItem} handleCategory={handleCategory} handleExam={handleExam} />
                </div>
                <div className="Our-Course-Main-Container">
                    <Sidebar width={'292px'} data={NavItem[category]} handleExam={handleExam}/>
                    <div className="TestSeries-card-grid">
                        <TestSeriesCard/>
                        <TestSeriesCard/>
                        <TestSeriesCard/>
                        <TestSeriesCard/>
                        <TestSeriesCard/>
                        <TestSeriesCard/>
                    </div>
                </div>
                <Button value={'Get Started For Free'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} width={'fit-content'} margin={"0 auto"} />
            </div>
        </>
    )
}