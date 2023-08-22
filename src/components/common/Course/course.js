import { Nav } from "../Navigation/nav";
import { HorizontalCard } from "../HorizontalCard/horizontalcard";
import { Sidebar } from "../Sidebar/sidebar";
import axios from "axios"
import { UpperHeader } from "../Heading/upperHeader";
import { Button } from "../Button/button";
import "./course.css";
import { useState ,useEffect} from "react";
export const Course = ({ title , children}) => {
    const [NavItem,setNavItem] = useState({});
     const [courses, setCourses] = useState([]);
     const [category,setCategory]=useState("")
     const [exam,setExam]=useState("")
     const handleCategory=(data)=>{
       setCategory(data)
     }
     const handleExam=(data)=>{
        setExam(data)
      }
     const courseapi=()=>{
        axios.get(`https://courseselling.onrender.com/api/v1/getAllcourses?exam=${exam}&category=${category}`)
        .then(response => {
        
          setCourses(response.data.courses);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
     }
     const headerapi=()=>{
        axios.get('https://courseselling.onrender.com/api/v1/categories')
        .then(response => {
       
            setNavItem(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
     }
    useEffect(() => {
        // Make the API request here
        courseapi();
   
      }, [category,exam]);
      useEffect(() => {
        // Make the API request here
     
        headerapi();
      }, []);
    return (
        <>
            <div className="exam-box" style={{ paddingBottom: "100px" }}>
                <div>
                    <UpperHeader title={title} />
                    <Nav navList={NavItem} handleCategory={handleCategory} handleExam={handleExam} />
                </div>
                <div className="Our-Course-Main-Container">
                    <Sidebar data={NavItem[category]} handleExam={handleExam}/>
                    <div className="horizontal-card-grid">
                   { courses?.map((item)=>{
return (<HorizontalCard image={'./images/dummy.png'} title={item?.title} additionalinfo={'Prelims Cum Mains'} desc={'By: Snehil Tripathi & Team'} bottomVal1={'30+ Courses'} bottomVal2={'Hinglish'} />)
                    })}
                        
                        
                    </div>
                </div>
                <Button value={'Get Started For Free'} background={'#fff'} txtColor={'#000'} border={'1px solid #000'} width={'fit-content'} margin={"0 auto"} />
            </div>
        </>
    )
}