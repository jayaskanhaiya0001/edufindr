import { Nav } from "../Navigation/nav";
import { Sidebar } from "../Sidebar/sidebar";
import { Button } from "../Button/button";
import { Fragment, useState } from "react";
import axios from "axios"
import { TestSeriesCard } from "../TestSeriesCard/testSeries";
import "./testSeries.css";
import { useEffect } from "react";
const NavItem =  {'SSC':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Teaching Exams':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'UPSC':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'civil service':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'GATE':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'AE & JE':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Goverment Exmas':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Bamnking & Insurance':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Degfence Exams':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Raleway':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Teaching':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"]};
export const TestSeriesNav = ({ search , setSearch}) => {
    const [category, setCategory] = useState("SSC")
    const [exam, setExam] = useState("History")
   
    const [testSeries, setTestSeries] = useState([])
    const handleCategory = (data) => {
      setCategory(data) 
    }
    const handleExam = (data) => {
      setExam(data)
    }
    const testSeriesApi = () => {
        axios.get(`https://edu-server-side-2023.onrender.com/api/v1/getAllTest?category=${category}&exam=${exam}&search=${search}`)
            .then(response => {
                setTestSeries(response.data.Tests);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    useEffect(() => {
      
        testSeriesApi();
    }, [category,exam]);
    return (
        <>
            <div className="exam-box">
                <div>
                    <Nav navList={NavItem} handleCategory={handleCategory} handleExam={handleExam} category={category} />
                </div>
                <div className="Our-Course-Main-Container our-test-series-main-container">
                    <Sidebar width={'292px'} data={NavItem[category]} handleExam={handleExam}/>
                    <div className="TestSeries-card-grid">

                    {testSeries.length==0?<h1>No Test Series Related to this category</h1>:testSeries?.map((item , index) => {
                      return  (
                        <Fragment key={index}>
                            <TestSeriesCard id={item?._id} exam={exam} category={category} data={item} />
                        </Fragment>
                      )
                    })}
                    </div>
                </div>
                <Button value={'Get Started For Free'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} width={'fit-content'} margin={"0 auto"} Path={'/contact-us'}/>
            </div>
        </>
    )
}