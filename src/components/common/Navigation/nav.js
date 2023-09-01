import { useEffect, useState } from "react";
import "./nav.css";
export const Nav = ({ navList, width, handleCategory,  category }) => {
    return (
        <>

            <nav className="Nav" style={{ width: width }}>
                <ul>
                    {
                        Object.keys(navList)?.map((item, index) => {
                            return (
                                <>
                                {console.log(item , index)}
                                    <li onClick={() => { handleCategory(item); }} className="Popular-Exam-Nav-Item"  id={index}>{item}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}