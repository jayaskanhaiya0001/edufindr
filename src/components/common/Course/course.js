import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "../Navigation/nav";
import { HorizontalCard } from "../HorizontalCard/horizontalcard";
import { Sidebar } from "../Sidebar/sidebar";
import axios from "axios"
import { UpperHeader } from "../Heading/upperHeader";
import { Button } from "../Button/button";
import "./course.css";

const NavItem =  {'SSC':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Teaching Exams':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'UPSC':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'civil service':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'GATE':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'AE & JE':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Goverment Exmas':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Bamnking & Insurance':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Degfence Exams':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Raleway':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Teaching':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"]};
export const Course = ({ title, children , display , path }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get('search');
  const type = queryParams.get('category');
  
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(search? "": "SSC")
  const [exam, setExam] = useState("")
  const handleCategory = (data) => {
    setCategory(data)
  }
  const handleExam = (data) => {
    setExam(data)
  }
  const courseapi = () => {
    axios.get(`https://edu-server-side-2023.onrender.com/api/v1/getAllcourses?exam=${exam}&category=${category}&search=${search?search:""}`)
      .then(response => {

        setCourses(response.data.courses);
      })
      .catch(error => {
        
      });
  }

  useEffect(() => {
    // Make the API request here
    courseapi();

  }, [category, exam,search]);

  return (
    <>
   { (search?.length!=0 && search!=undefined&& courses?.length==0)?<h1>No Course Found of your matching search</h1>:
      <div className="exam-box">
        {(search?.length==0 || search==undefined )&& 
        <div>
          <UpperHeader title={title} />
          <Nav navList={NavItem} handleCategory={handleCategory} handleExam={handleExam} category={category}/>
        </div>}
        <div className="Our-Course-Main-Container">
        {(search?.length==0 || search==undefined ) &&  <Sidebar data={NavItem[category]} handleExam={handleExam} />}
          <div className="horizontal-card-grid">
          {courses?.length==0? <h1>No Course Found of this type</h1>:
            courses?.map((item , index) => {
              return (<HorizontalCard image={'./images/dummy.png'} item={item} title={item?.title} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal2={'Hinglish'} path={path} key={index}/>)
            })}


          </div>
        </div>
        <Button value={'Get Started For Free'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} width={'fit-content'} margin={"0 auto"} display={display} Path={"/contact-us"}/>
      </div>}
    </>
  )
}