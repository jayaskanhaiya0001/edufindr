import { useState } from "react";
import "./sidebar.css";
const options = ['History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History', 'History']
export const Sidebar = ({ width, data  , selectItem , handleSelectItem}) => {

    return (
        <>
        {   console.log(data,"hello")}
            <aside className="Common-Sidebar" style={{ width: width }}>
                <div className="sidebar-container">
                    <ul>
                        {
                            data?.map((item, index) => {
                                return (
                                    <>

                                        <li id={index} onClick={() => {handleSelectItem(data[index]);}} style={selectItem === item ? { backgroundColor: "#722E60" , cursor: "pointer", color: "#fff" } : {}}>{item}</li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </aside>
        </>
    )
}