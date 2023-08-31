import { Nav } from "../Navigation/nav";
import { HorizontalCard } from "../HorizontalCard/horizontalcard";
import { Sidebar } from "../Sidebar/sidebar";
import axios from "axios"
import { UpperHeader } from "../Heading/upperHeader";
import { Button } from "../Button/button";
import "./course.css";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export const Course = ({ title, children , display , path}) => {
  const NavItem =  {'SSC':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Teaching Exams':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'UPSC':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'civil service':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'GATE':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'AE & JE':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Goverment Exmas':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Bamnking & Insurance':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Degfence Exams':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Raleway':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"], 'Teaching':["History","Anthropology","Sociology","Maithili","Public Administration","Law","Economics"]};
  // const [NavItem, setNavItem] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get('search');
  const type = queryParams.get('category');
  
  console.log(search,type,"himanshu")
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
    axios.get(`https://courseselling.onrender.com/api/v1/getAllcourses?exam=${exam}&category=${category}&search=${search?search:""}`)
      .then(response => {

        setCourses(response.data.courses);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  // const headerapi = () => {
  //   axios.get('https://courseselling.onrender.com/api/v1/categories')
  //     .then(response => {

  //       setNavItem(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }
  useEffect(() => {
    // Make the API request here
    courseapi();

  }, [category, exam,search]);

  return (
    <>
      <div className="exam-box">
        <div>
          <UpperHeader title={title} />
          <Nav navList={NavItem} handleCategory={handleCategory} handleExam={handleExam} category={category}/>
        </div>
        <div className="Our-Course-Main-Container">
          <Sidebar data={NavItem[category]} handleExam={handleExam} />
          <div className="horizontal-card-grid">
            {courses?.map((item) => {
              return (<HorizontalCard image={'./images/dummy.png'} item={item} title={item?.title} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal2={'Hinglish'} path={path}/>)
            })}


          </div>
        </div>
        <Button value={'Get Started For Free'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} width={'fit-content'} margin={"0 auto"} display={display}/>
      </div>
    </>
  )
}