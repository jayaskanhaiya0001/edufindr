import { useEffect, useState } from "react";
import "./nav.css";
export const Nav = ({ navList, width, handleCategory, handleExam, category }) => {
    return (
        <>

            <nav className="Nav" style={{ width: width }}>
                <ul>
                    {
                        Object.keys(navList)?.map((item, index) => {
                            return (
                                <>
                                {console.log(item , index)}
                                    <li onClick={() => { handleCategory(item); handleExam("") }} className="Popular-Exam-Nav-Item"  style={category == item ? { backgroundColor: "#722E60" , cursor: "pointer", color: "#fff" } : {}} id={index}>{item}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}