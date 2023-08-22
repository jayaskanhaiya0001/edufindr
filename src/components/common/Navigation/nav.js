import { useState } from "react";
import "./nav.css";
export const Nav = ({navList , width,handleCategory,handleExam}) => {
   
    return (
        <>
            <nav className="Nav" style={{width: width}}>
                <ul>
                    {
                      Object.keys(navList)?.map((item, index) => {
                            return (
                                <>
                                    <li onClick={()=>{handleCategory(item);handleExam("")}} className="Popular-Exam-Nav-Item" id={index} >{item}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}